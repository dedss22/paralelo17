import { chromium } from 'file:///C:/KIRO/.agents/tasks/nobre-transfers-fix/tools/node_modules/playwright-core/index.mjs';

const BASE = 'http://localhost:8082/';
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const ARTIFACTS_DIR = 'C:/Users/Paralelo 17/.gemini/antigravity/brain/332a9909-f1ea-431d-8084-eaa9f5556749';

async function test14vh() {
  const browser = await chromium.launch({ executablePath: CHROME, headless: true });
  const viewports = [
    { w: 1280, h: 800 },
    { w: 1366, h: 768 },
    { w: 1440, h: 900 },
    { w: 1536, h: 864 },
    { w: 1920, h: 1080 }
  ];

  console.log('Testing: margin-top: auto; margin-bottom: clamp(75px, 14vh, 160px);');
  for (const vp of viewports) {
    const page = await browser.newPage({ viewport: { width: vp.w, height: vp.h } });
    await page.goto(BASE, { waitUntil: 'networkidle' });

    await page.addStyleTag({
      content: `@media (min-width: 1024px) { .nbq-wrap { margin-top: auto !important; margin-bottom: clamp(75px, 14vh, 160px) !important; } }`
    });
    await page.waitForTimeout(100);

    const m = await page.evaluate(() => {
      const card = document.getElementById('nobreBookingForm');
      const subBar = document.getElementById('nbqSubBar');
      const cardRect = card.getBoundingClientRect();
      const subRect = subBar ? subBar.getBoundingClientRect() : null;
      return {
        cardTop: cardRect.top,
        cardBottom: cardRect.bottom,
        subBottom: subRect ? subRect.bottom : 0,
        viewportH: window.innerHeight,
        scrollH: document.documentElement.scrollHeight
      };
    });

    console.log(`  ${vp.w}x${vp.h}: cardTop=${m.cardTop.toFixed(1)}px, subBottom=${m.subBottom.toFixed(1)}px, diffToBottom=${(m.viewportH - m.subBottom).toFixed(1)}px, hasPageScroll=${m.scrollH > m.viewportH}`);

    await page.screenshot({ path: `${ARTIFACTS_DIR}/desktop_pos_${vp.w}x${vp.h}.png` });
    await page.close();
  }
  await browser.close();
}

test14vh().catch(console.error);
