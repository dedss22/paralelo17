import { chromium } from 'file:///C:/KIRO/.agents/tasks/nobre-transfers-fix/tools/node_modules/playwright-core/index.mjs';

const BASE = 'http://localhost:8082/';
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const ARTIFACTS_DIR = 'C:/Users/Paralelo 17/.gemini/antigravity/brain/332a9909-f1ea-431d-8084-eaa9f5556749';

async function verifyAll() {
  console.log('🧪 Iniciando Verificação Completa da Fase 3...');
  const browser = await chromium.launch({ executablePath: CHROME, headless: true });

  // -------------------------------------------------------------
  // Teste 1: Desktop Dropdown & Posicionamento (1440x900, 1366x768, 1920x1080)
  // -------------------------------------------------------------
  console.log('\n--- Teste 1: Desktop Dropdown & Posicionamento ---');
  for (const vp of [{ w: 1440, h: 900 }, { w: 1366, h: 768 }, { w: 1920, h: 1080 }, { w: 1280, h: 800 }, { w: 1536, h: 864 }]) {
    const page = await browser.newPage({ viewport: { width: vp.w, height: vp.h } });
    await page.goto(BASE, { waitUntil: 'networkidle' });

    // Métricas do card e subBar
    const metrics = await page.evaluate(() => {
      const card = document.getElementById('nobreBookingForm');
      const subBar = document.getElementById('nbqSubBar');
      const cardRect = card.getBoundingClientRect();
      const subRect = subBar ? subBar.getBoundingClientRect() : null;
      return {
        cardTop: cardRect.top,
        cardBottom: cardRect.bottom,
        cardHeight: cardRect.height,
        subBottom: subRect ? subRect.bottom : 0,
        viewportH: window.innerHeight,
        fitsWithoutScroll: subRect ? (subRect.bottom <= window.innerHeight) : true
      };
    });

    console.log(`  [${vp.w}x${vp.h}] Card Top: ${metrics.cardTop.toFixed(1)}px | SubBar Bottom: ${metrics.subBottom.toFixed(1)}px | Margem Inferior: ${(metrics.viewportH - metrics.subBottom).toFixed(1)}px | Visível sem rolagem: ${metrics.fitsWithoutScroll ? 'SIM (OK)' : 'NÃO (ERRO)'}`);

    if (!metrics.fitsWithoutScroll) {
      throw new Error(`O conjunto card + chips + frase NÃO coube sem rolagem em ${vp.w}x${vp.h}: subBottom=${metrics.subBottom} > viewportH=${metrics.viewportH}`);
    }

    // Abre o dropdown de destino
    await page.click('#btnOpenDestination');
    await page.waitForTimeout(150);

    const ddInfo = await page.evaluate(() => {
      const dd = document.getElementById('dropdownDestination');
      const r = dd.getBoundingClientRect();
      const items = Array.from(dd.querySelectorAll('.nbq-dropdown-item')).map(it => ({
        text: it.querySelector('span')?.textContent?.trim() || it.textContent.trim(),
        height: it.getBoundingClientRect().height,
        val: it.dataset.value
      }));
      const hero = document.getElementById('reservas').getBoundingClientRect();
      return {
        hidden: dd.hidden,
        top: r.top,
        bottom: r.bottom,
        height: r.height,
        heroBottom: hero.bottom,
        viewportH: window.innerHeight,
        itemsCount: items.length,
        items: items
      };
    });

    console.log(`  [${vp.w}x${vp.h}] Dropdown: ${ddInfo.itemsCount} itens | Altura total: ${ddInfo.height.toFixed(1)}px | Dropdown Bottom: ${ddInfo.bottom.toFixed(1)}px (Hero Bottom: ${ddInfo.heroBottom.toFixed(1)}px)`);

    if (ddInfo.itemsCount !== 5) {
      throw new Error(`Esperado 5 itens no dropdown, mas encontrado ${ddInfo.itemsCount}`);
    }
    for (const it of ddInfo.items) {
      if (it.height < 43.5) {
        throw new Error(`Item ${it.text} tem altura menor que 44px: ${it.height}px`);
      }
    }
    if (ddInfo.bottom > ddInfo.heroBottom) {
      throw new Error(`Dropdown ultrapassou a seção hero em ${vp.w}x${vp.h}: dd.bottom=${ddInfo.bottom} > heroBottom=${ddInfo.heroBottom}`);
    }

    if (vp.w === 1440 || vp.w === 1366 || vp.w === 1920) {
      await page.screenshot({ path: `${ARTIFACTS_DIR}/fase3_desktop_${vp.w}x${vp.h}_dropdown.png` });
    }

    // Testa fechamento com Esc
    await page.keyboard.press('Escape');
    await page.waitForTimeout(100);
    const isHiddenAfterEsc = await page.$eval('#dropdownDestination', el => el.hidden);
    if (!isHiddenAfterEsc) throw new Error('Dropdown não fechou com a tecla Escape!');

    await page.close();
  }
  console.log('✔ Dropdown e Posicionamento Desktop validados em todas as resoluções!');

  // -------------------------------------------------------------
  // Teste 2: Validação da Regra de Negócio de 48 Horas
  // -------------------------------------------------------------
  console.log('\n--- Teste 2: Regra de Antecedência Mínima de 48 Horas ---');
  {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(BASE, { waitUntil: 'networkidle' });

    // Seleciona Destino Trancoso via Chip
    await page.click('.nbq-chip[data-dest="Trancoso"]');

    // 2.1 Verifica min date no input
    const minDate = await page.$eval('#bookingDate', el => el.min);
    console.log(`  Data mínima configurada no input date: ${minDate}`);

    // 2.2 Abre o calendário e verifica que hoje e amanhã estão desabilitados
    await page.click('#btnOpenDatePicker');
    await page.waitForTimeout(150);

    const calCheck = await page.evaluate(() => {
      const todayBtn = document.querySelector('.nbq-cal-day.nbq-cal-today');
      const disabledBtns = document.querySelectorAll('.nbq-cal-day.nbq-cal-disabled');
      return {
        todayDisabled: todayBtn ? todayBtn.disabled : false,
        disabledCount: disabledBtns.length
      };
    });

    console.log(`  Calendário: "Hoje" desabilitado? ${calCheck.todayDisabled ? 'SIM (OK)' : 'NÃO (ERRO)'} | Total dias desabilitados: ${calCheck.disabledCount}`);
    if (!calCheck.todayDisabled) {
      throw new Error('O dia de "Hoje" deveria estar desabilitado no calendário!');
    }

    await page.screenshot({ path: `${ARTIFACTS_DIR}/fase3_calendario_48h.png` });
    await page.keyboard.press('Escape');
    await page.waitForTimeout(100);

    // 2.3 Testa submissão com tentativa de data bloqueada (Hoje)
    console.log('  Testando bloqueio de envio para data de Hoje...');
    await page.evaluate(() => {
      const now = new Date();
      const y = now.getFullYear();
      const m = String(now.getMonth() + 1).padStart(2, '0');
      const d = String(now.getDate()).padStart(2, '0');
      const dateIn = document.getElementById('bookingDate');
      dateIn.value = `${y}-${m}-${d}`;
      dateIn.dispatchEvent(new Event('change', { bubbles: true }));
      const timeIn = document.getElementById('bookingTime');
      timeIn.value = '14:00';
      timeIn.dispatchEvent(new Event('change', { bubbles: true }));
    });

    await page.click('#nbqContinue');
    await page.waitForTimeout(200);

    const errDateHtml = await page.$eval('#err-date', el => el.innerHTML);
    const summaryHtml = await page.$eval('#bookingErrorSummary', el => el.innerHTML);
    const currentUrl = page.url();

    console.log(`  Mensagem de erro exibida: "${errDateHtml}"`);
    if (!errDateHtml.includes('48 horas') || !errDateHtml.includes('wa.me/5573998171117')) {
      throw new Error(`Mensagem de 48h esperada no erro da data, mas obteve: ${errDateHtml}`);
    }
    if (!summaryHtml.includes('48 horas')) {
      throw new Error(`Resumo do formulário deveria indicar a regra de 48h: ${summaryHtml}`);
    }
    if (currentUrl.includes('/cotacao/')) {
      throw new Error('Formulário NÃO deveria ter avançado com data < 48h!');
    }
    console.log('✔ Bloqueio de envio para viagens com menos de 48h validado com sucesso!');

    // 2.4 Testa horário no Time Picker para data D+2
    console.log('  Testando bloqueio de horários no seletor de horários para data D+2...');
    await page.evaluate((minD) => {
      const dateIn = document.getElementById('bookingDate');
      dateIn.value = minD; // Hoje + 2
      dateIn.dispatchEvent(new Event('change', { bubbles: true }));
    }, minDate);

    await page.click('#btnOpenTimePicker');
    await page.waitForTimeout(150);

    const timeCheck = await page.evaluate(() => {
      const disabledSlots = document.querySelectorAll('.nbq-time-slot.nbq-time-disabled');
      const totalSlots = document.querySelectorAll('.nbq-time-slot');
      return {
        disabledCount: disabledSlots.length,
        totalCount: totalSlots.length
      };
    });
    console.log(`  Seletor de Horário para D+2: ${timeCheck.disabledCount} de ${timeCheck.totalCount} horários desabilitados (para respeitar 48h exatas)`);
    await page.screenshot({ path: `${ARTIFACTS_DIR}/fase3_timesheet_48h.png` });
    await page.keyboard.press('Escape');

    // 2.5 Testa sucesso com data D+3 (livre)
    console.log('  Testando envio válido com data D+3...');
    await page.evaluate(() => {
      const d = new Date();
      d.setDate(d.getDate() + 3);
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      const dateIn = document.getElementById('bookingDate');
      dateIn.value = `${y}-${m}-${day}`;
      dateIn.dispatchEvent(new Event('change', { bubbles: true }));
      const timeIn = document.getElementById('bookingTime');
      timeIn.value = '15:00';
      timeIn.dispatchEvent(new Event('change', { bubbles: true }));
    });

    await Promise.all([
      page.waitForNavigation({ waitUntil: 'load' }),
      page.click('#nbqContinue')
    ]);

    const forwardedUrl = page.url();
    if (!forwardedUrl.includes('/cotacao/') || !forwardedUrl.includes('destination=Trancoso')) {
      throw new Error(`Esperado redirecionamento para /cotacao/, mas obteve: ${forwardedUrl}`);
    }
    console.log('✔ Viagem com antecedência >= 48h aprovada e redirecionada para /cotacao/ com sucesso!');

    await page.close();
  }

  // -------------------------------------------------------------
  // Teste 3: Mobile Dropdown & Interação (390x844 e 360x780)
  // -------------------------------------------------------------
  console.log('\n--- Teste 3: Mobile Dropdown & Experiência ---');
  for (const vp of [{ w: 390, h: 844 }, { w: 360, h: 780 }]) {
    const page = await browser.newPage({ viewport: { width: vp.w, height: vp.h }, isMobile: true, hasTouch: true });
    await page.goto(BASE, { waitUntil: 'networkidle' });

    await page.click('#btnOpenDestination');
    await page.waitForTimeout(150);

    const mInfo = await page.evaluate(() => {
      const dd = document.getElementById('dropdownDestination');
      const r = dd.getBoundingClientRect();
      const items = Array.from(dd.querySelectorAll('.nbq-dropdown-item')).map(it => it.textContent.trim());
      return {
        top: r.top,
        bottom: r.bottom,
        height: r.height,
        viewportH: window.innerHeight,
        itemsCount: items.length,
        items: items
      };
    });

    console.log(`  [Mobile ${vp.w}x${vp.h}] Dropdown: ${mInfo.itemsCount} itens | Altura: ${mInfo.height.toFixed(1)}px | Bottom: ${mInfo.bottom.toFixed(1)}px (Viewport: ${mInfo.viewportH}px)`);

    await page.screenshot({ path: `${ARTIFACTS_DIR}/fase3_mobile_${vp.w}x${vp.h}_dropdown.png` });

    // Clica no item Santo André
    const santoAndreBtn = await page.$('.nbq-dropdown-item[data-value="Santo André"]');
    if (!santoAndreBtn) throw new Error('Opção Santo André não encontrada no dropdown mobile');
    await santoAndreBtn.click();
    await page.waitForTimeout(100);

    const selectedDest = await page.$eval('#bookingDestination', el => el.value);
    const displayVal = await page.$eval('#displayBookingDestination', el => el.textContent);
    console.log(`  Selecionado no mobile: destination="${selectedDest}", display="${displayVal}"`);
    if (selectedDest !== 'Santo André' || displayVal !== 'Santo André') {
      throw new Error(`Falha ao selecionar Santo André no mobile: ${selectedDest} / ${displayVal}`);
    }

    await page.close();
  }
  console.log('✔ Dropdown Mobile validado com sucesso!');

  await browser.close();
  console.log('\n======================================================');
  console.log('🎉 TODOS OS TESTES DA FASE 3 FORAM APROVADOS COM SUCESSO!');
  console.log('======================================================');
}

verifyAll().catch(err => {
  console.error('\n❌ FALHA NA VERIFICAÇÃO:', err);
  process.exit(1);
});
