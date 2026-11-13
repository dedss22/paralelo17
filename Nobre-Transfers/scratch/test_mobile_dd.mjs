import { chromium } from 'file:///C:/KIRO/.agents/tasks/nobre-transfers-fix/tools/node_modules/playwright-core/index.mjs';

const BASE = 'http://localhost:8082/';
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const ARTIFACTS_DIR = 'C:/Users/Paralelo 17/.gemini/antigravity/brain/332a9909-f1ea-431d-8084-eaa9f5556749';

async function main() {
  const browser = await chromium.launch({ executablePath: CHROME, headless: true });
  for (const vp of [{w:360,h:780}, {w:390,h:844}]) {
    const page = await browser.newPage({ viewport: { width: vp.w, height: vp.h }, isMobile: true, hasTouch: true });
    await page.goto(BASE, { waitUntil: 'networkidle' });
    await page.addStyleTag({
      content: `
        .nbq-select-dropdown { max-height: none !important; overflow: visible !important; z-index: 99999 !important; background: var(--q-surface) !important; }
        .nbq-dropdown-item { background: transparent !important; }
      `
    });
    // Remove extra items to simulate 5 items:
    await page.evaluate(() => {
      const dd = document.getElementById('dropdownDestination');
      const allowed = ["Trancoso", "Arraial d'Ajuda", "Caraíva", "Santo André", "Praia do Espelho"];
      const items = dd.querySelectorAll('.nbq-dropdown-item');
      items.forEach(item => {
        if (!allowed.includes(item.dataset.value)) {
          item.remove();
        }
      });
    });

    await page.click('#btnOpenDestination');
    await page.waitForTimeout(100);

    const dd = await page.evaluate(() => {
      const el = document.getElementById('dropdownDestination');
      const r = el.getBoundingClientRect();
      return { 
        top: r.top, 
        bottom: r.bottom, 
        height: r.height, 
        width: r.width,
        innerH: window.innerHeight 
      };
    });
    console.log(`Mobile ${vp.w}x${vp.h}:`, dd);
    await page.screenshot({ path: `${ARTIFACTS_DIR}/test_mobile_open_${vp.w}x${vp.h}.png` });
    await page.close();
  }
  await browser.close();
}

main().catch(console.error);
