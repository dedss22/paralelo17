import { chromium } from 'file:///C:/KIRO/.agents/tasks/nobre-transfers-fix/tools/node_modules/playwright-core/index.mjs';

const BASE = 'http://localhost:8082/';
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const ARTIFACTS_DIR = 'C:/Users/Paralelo 17/.gemini/antigravity/brain/332a9909-f1ea-431d-8084-eaa9f5556749';

async function main() {
  const browser = await chromium.launch({ executablePath: CHROME, headless: true });
  for (const vp of [{w:1366,h:768}, {w:1440,h:900}, {w:1920,h:1080}]) {
    const page = await browser.newPage({ viewport: { width: vp.w, height: vp.h } });
    await page.goto(BASE, { waitUntil: 'networkidle' });
    await page.addStyleTag({
      content: `@media (min-width: 1024px) { 
        .nbq-wrap { margin-top: auto !important; margin-bottom: clamp(75px, 14vh, 160px) !important; } 
        .nbq-select-dropdown { max-height: none !important; overflow: visible !important; z-index: 99999 !important; }
      }`
    });
    // Remove extra items in prototype to simulate 5 items:
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
      const hero = document.getElementById('reservas').getBoundingClientRect();
      return { 
        top: r.top, 
        bottom: r.bottom, 
        height: r.height, 
        heroBottom: hero.bottom, 
        innerH: window.innerHeight 
      };
    });
    console.log(`${vp.w}x${vp.h}:`, dd);
    await page.screenshot({ path: `${ARTIFACTS_DIR}/test_open_${vp.w}x${vp.h}.png` });
    await page.close();
  }
  await browser.close();
}

main().catch(console.error);
