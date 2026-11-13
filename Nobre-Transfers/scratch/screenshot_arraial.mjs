import { chromium } from 'file:///C:/KIRO/.agents/tasks/nobre-transfers-fix/tools/node_modules/playwright-core/index.mjs';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

(async () => {
  const browser = await chromium.launch({ executablePath: CHROME, headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  
  await page.goto('http://localhost:8082/#arraial', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  
  const el = await page.$('#arraial');
  if (el) {
    await el.screenshot({ path: 'scratch_img/screenshot_arraial_section.png' });
    console.log('Saved section screenshot');
  }
  
  await browser.close();
})();
