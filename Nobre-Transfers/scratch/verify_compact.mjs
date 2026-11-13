import { chromium } from 'file:///C:/KIRO/.agents/tasks/nobre-transfers-fix/tools/node_modules/playwright-core/index.mjs';

const BASE = 'http://localhost:8082/';
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const ARTIFACTS_DIR = 'C:/Users/Paralelo 17/.gemini/antigravity/brain/332a9909-f1ea-431d-8084-eaa9f5556749';

async function main() {
  console.log('--- Iniciando Verificação Visual & Estrutural do Widget Compacto ---');
  const browser = await chromium.launch({ executablePath: CHROME, headless: true });

  // 1. Desktop (1440 x 900)
  {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(BASE, { waitUntil: 'networkidle' });

    const metrics = await page.evaluate(() => {
      const form = document.getElementById('nobreBookingForm');
      const head = form.querySelector('.nbq-head');
      const grid = form.querySelector('.nbq-grid');
      const subBar = document.getElementById('nbqSubBar');
      const wrap = form.closest('.nbq-wrap');
      const cta = form.querySelector('.nbq-cta');
      const formRect = form.getBoundingClientRect();
      const headRect = head ? head.getBoundingClientRect() : null;
      const gridRect = grid ? grid.getBoundingClientRect() : null;
      const subBarRect = subBar ? subBar.getBoundingClientRect() : null;
      const ctaRect = cta ? cta.getBoundingClientRect() : null;

      // Check prices
      const text = (form.innerText + ' ' + (subBar ? subBar.innerText : '')).toLowerCase();
      const hasPrice = /r\$|\b\d+,\d{2}\b|preço|valor\s*:\s*\d/.test(text);

      return {
        formWidth: formRect.width,
        formHeight: formRect.height,
        formTop: formRect.top,
        headHeight: headRect ? headRect.height : 0,
        gridHeight: gridRect ? gridRect.height : 0,
        subBarHeight: subBarRect ? subBarRect.height : 0,
        totalWidgetHeight: formRect.height + (subBarRect ? subBarRect.height + 10 : 0),
        ctaWidth: ctaRect ? ctaRect.width : 0,
        ctaHeight: ctaRect ? ctaRect.height : 0,
        hasPrice
      };
    });

    console.log('Desktop 1440px:');
    console.log(`  - Altura do Card: ${metrics.formHeight.toFixed(1)}px (Alvo: 110-120px)`);
    console.log(`  - Altura da Camada 1 (Abas): ${metrics.headHeight.toFixed(1)}px (Alvo: 40-44px)`);
    console.log(`  - Altura da Camada 2 (Campos): ${metrics.gridHeight.toFixed(1)}px (Alvo: 68-72px)`);
    console.log(`  - Largura do Botão CTA: ${metrics.ctaWidth.toFixed(1)}px (Alvo: 160-180px)`);
    console.log(`  - Altura Total (Card + Sub-bar): ${metrics.totalWidgetHeight.toFixed(1)}px (Alvo: ~160px)`);
    console.log(`  - Preço detectado no widget: ${metrics.hasPrice ? 'SIM (ERRO)' : 'NÃO (OK)'}`);

    await page.screenshot({ path: `${ARTIFACTS_DIR}/desktop_compact_hero.png` });
    console.log('✔ Screenshot Desktop salvo: desktop_compact_hero.png');
    await page.close();
  }

  // 2. Responsividade Mobile (360px, 390px, 430px) & Tablet (768px)
  const viewports = [
    { name: 'tablet_768', w: 768, h: 1024 },
    { name: 'mobile_430', w: 430, h: 932 },
    { name: 'mobile_390', w: 390, h: 844 },
    { name: 'mobile_360', w: 360, h: 780 }
  ];

  for (const vp of viewports) {
    const page = await browser.newPage({ viewport: { width: vp.w, height: vp.h }, isMobile: vp.w <= 430 });
    await page.goto(BASE, { waitUntil: 'networkidle' });

    const checks = await page.evaluate(() => {
      const scrollW = document.documentElement.scrollWidth;
      const innerW = window.innerWidth;
      const hasHorizontalScroll = scrollW > innerW;
      const form = document.getElementById('nobreBookingForm');
      const formRect = form.getBoundingClientRect();
      const stepBtns = Array.from(document.querySelectorAll('.nbq-step-btn')).map(b => {
        const r = b.getBoundingClientRect();
        return { w: r.width, h: r.height };
      });
      const cta = document.querySelector('.nbq-cta');
      const ctaRect = cta ? cta.getBoundingClientRect() : null;

      return {
        hasHorizontalScroll,
        scrollW,
        innerW,
        formHeight: formRect.height,
        stepBtnHeight: stepBtns[0] ? stepBtns[0].h : 0,
        ctaHeight: ctaRect ? ctaRect.h : 0
      };
    });

    console.log(`${vp.name} (${vp.w}px):`);
    console.log(`  - Rolagem horizontal: ${checks.hasHorizontalScroll ? `SIM (${checks.scrollW}px > ${checks.innerW}px) (ERRO)` : 'NÃO (OK)'}`);
    console.log(`  - Altura do card: ${checks.formHeight.toFixed(1)}px`);
    console.log(`  - Botão CTA altura: ${checks.ctaHeight}px (>= 44px)`);

    await page.screenshot({ path: `${ARTIFACTS_DIR}/${vp.name}_compact.png` });
    console.log(`✔ Screenshot salvo: ${vp.name}_compact.png`);
    await page.close();
  }

  await browser.close();
  console.log('--- Verificação Concluída com Sucesso ---');
}

main().catch(err => {
  console.error('Erro na verificação:', err);
  process.exit(1);
});
