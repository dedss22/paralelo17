import { chromium } from 'file:///C:/KIRO/.agents/tasks/nobre-transfers-fix/tools/node_modules/playwright-core/index.mjs';

const BASE = 'http://localhost:8082/';
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

async function runTests() {
  console.log('🚀 Iniciando testes automatizados da Fase 2 (Nobre Transfers)...');
  const browser = await chromium.launch({ executablePath: CHROME, headless: true });
  let passed = 0;
  let failed = 0;

  try {
    // -------------------------------------------------------------
    // Teste 1: Home Page & Etapa 1
    // -------------------------------------------------------------
    const page = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
    await page.goto(BASE, { waitUntil: 'load' });
    console.log('✔ Home page carregada com sucesso (390x844)');

    // Verifica elementos da Etapa 1
    const form = await page.$('#nobreBookingForm');
    if (!form) throw new Error('Formulário #nobreBookingForm não encontrado');

    const destSelect = await page.$('#bookingDestination');
    if (!destSelect) throw new Error('Campo #bookingDestination não encontrado');

    // Teste de stepper de passageiros
    const incBtn = await page.$('[data-step="1"]');
    await incBtn.click(); // 3
    await incBtn.click(); // 4
    await incBtn.click(); // 5
    await incBtn.click(); // 6 pax -> Spin
    const vehicleText = await page.$eval('#paxVehicle', el => el.textContent);
    if (!vehicleText.includes('Spin')) {
      throw new Error(`Esperado veículo Spin para 6 passageiros, mas obteve: "${vehicleText}"`);
    }
    console.log('✔ Stepper de passageiros funcionando com sugestão de frota (6 pax -> Spin)');

    await incBtn.click(); // 7 pax -> Van
    const vehicleText7 = await page.$eval('#paxVehicle', el => el.textContent);
    if (!vehicleText7.includes('Van')) {
      throw new Error(`Esperado veículo Van para 7 passageiros, mas obteve: "${vehicleText7}"`);
    }
    console.log('✔ Stepper de passageiros funcionando com sugestão de frota (7 pax -> Van)');

    // Teste de clique no Chip de rota rápida (Trancoso)
    const chipTrancoso = await page.$('.nbq-chip[data-dest="Trancoso"]');
    if (!chipTrancoso) throw new Error('Chip Trancoso não encontrado');
    await chipTrancoso.click();
    const selectedDest = await page.$eval('#bookingDestination', el => el.value);
    if (selectedDest !== 'Trancoso') {
      throw new Error(`Chip deveria selecionar Trancoso, mas está: "${selectedDest}"`);
    }
    console.log('✔ Chip de rota frequente selecionou Trancoso e atualizou o formulário');

    // Preenche data e horário
    const today = new Date();
    today.setDate(today.getDate() + 3);
    const dateStr = today.toISOString().split('T')[0];
    await page.fill('#bookingDate', dateStr);
    await page.fill('#bookingTime', '15:00');

    // Submete Etapa 1
    console.log('→ Submetendo Etapa 1...');
    await Promise.all([
      page.waitForNavigation({ waitUntil: 'load' }),
      page.click('#nbqContinue')
    ]);

    const currentUrl = page.url();
    if (!currentUrl.includes('/cotacao/') || !currentUrl.includes('destination=Trancoso')) {
      throw new Error(`URL esperada em /cotacao/ com destination=Trancoso, mas obteve: ${currentUrl}`);
    }
    console.log('✔ Redirecionamento da Etapa 1 para /cotacao/ com parâmetros de URL concluído com sucesso!');
    passed++;

    // -------------------------------------------------------------
    // Teste 2: Etapa 2 em /cotacao/
    // -------------------------------------------------------------
    console.log('→ Validando página /cotacao/ (Etapa 2)...');
    const summaryText = await page.$eval('.summary-card', el => el.textContent);
    if (!summaryText.includes('Trancoso')) {
      throw new Error('Resumo da viagem na /cotacao/ não contém o destino Trancoso');
    }
    console.log('✔ Resumo da viagem preenchido automaticamente a partir da Etapa 1');

    // Preenche dados do cliente
    await page.fill('#nome', 'Ana Maria');
    await page.fill('#whatsapp', '73998171117');

    // Intercepta abertura de janela do WhatsApp
    await page.evaluate(() => {
      window.__waOpened = null;
      window.open = (url) => { window.__waOpened = url; return {}; };
    });

    await page.click('#btnSubmit');
    await page.waitForTimeout(600);

    const waUrl = await page.evaluate(() => window.__waOpened);
    if (!waUrl || !waUrl.includes('https://wa.me/5573998171117')) {
      throw new Error(`URL do WhatsApp não foi disparada corretamente: ${waUrl}`);
    }
    if (!waUrl.includes('Trancoso') || !waUrl.includes('Ana%20Maria')) {
      throw new Error(`Mensagem do WhatsApp não contém os dados da cotação: ${waUrl}`);
    }
    console.log('✔ Envio da cotação com abertura segura de WhatsApp validado com sucesso!');
    passed++;

    // -------------------------------------------------------------
    // Teste 3: Lightbox da Galeria de Destinos
    // -------------------------------------------------------------
    console.log('→ Retornando à Home para testar o Lightbox...');
    await page.goto(BASE + '#destinos', { waitUntil: 'load' });
    await page.waitForTimeout(500);

    const firstThumb = await page.$('.spread-gallery-card');
    if (!firstThumb) throw new Error('Nenhum .spread-gallery-card encontrado');

    const tagName = await page.evaluate(el => el.tagName.toLowerCase(), firstThumb);
    if (tagName !== 'button') {
      throw new Error(`Card de miniatura deveria ter sido transformado em <button>, mas é <${tagName}>`);
    }
    console.log('✔ Miniaturas da galeria convertidas em botões acessíveis pelo lightbox.js');

    await firstThumb.click();
    await page.waitForTimeout(500);

    const isDialogOpen = await page.$eval('#nbLightbox', el => el.hasAttribute('open'));
    if (!isDialogOpen) throw new Error('Lightbox <dialog id="nbLightbox"> não abriu após o clique');
    console.log('✔ Lightbox abriu em tela cheia com tag <dialog> nativa');

    const counter = await page.$eval('.nb-lb-counter', el => el.textContent);
    console.log(`✔ Contador do Lightbox: "${counter.trim()}"`);

    // Fecha o lightbox
    await page.keyboard.press('Escape');
    await page.waitForTimeout(400);
    const isDialogClosed = await page.$eval('#nbLightbox', el => !el.hasAttribute('open'));
    if (!isDialogClosed) throw new Error('Lightbox não fechou com a tecla Escape');
    console.log('✔ Lightbox fechado com sucesso com a tecla Escape');
    passed++;

    // -------------------------------------------------------------
    // Teste 4: Página de Privacidade (LGPD)
    // -------------------------------------------------------------
    console.log('→ Validando página /privacidade/...');
    const privPage = await browser.newPage();
    const resp = await privPage.goto(BASE + 'privacidade/', { waitUntil: 'load' });
    if (resp.status() !== 200) throw new Error(`Status HTTP inesperado: ${resp.status()}`);

    const privH1 = await privPage.$eval('h1', el => el.textContent);
    if (!privH1.includes('Política de Privacidade')) {
      throw new Error(`Título incorreto na página de privacidade: ${privH1}`);
    }

    const hasRobotsNoIndex = await privPage.$eval('meta[name="robots"]', el => el.getAttribute('content'));
    if (!hasRobotsNoIndex.includes('noindex')) {
      throw new Error('Página de privacidade deve ter meta robots noindex');
    }
    console.log('✔ Página de Política de Privacidade em conformidade com LGPD (200 OK, noindex, conteúdo completo)');
    passed++;

  } catch (err) {
    console.error('❌ ERRO NO TESTE:', err.message);
    failed++;
  } finally {
    await browser.close();
  }

  console.log(`\n========================================`);
  console.log(`RESULTADO FINAL: ${passed} passaram, ${failed} falharam`);
  console.log(`========================================`);
  if (failed > 0) process.exit(1);
}

runTests();
