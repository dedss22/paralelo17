import { chromium } from 'file:///C:/KIRO/.agents/tasks/nobre-transfers-fix/tools/node_modules/playwright-core/index.mjs';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

(async () => {
  const b = await chromium.launch({ executablePath: CHROME, headless: true });
  const pg = await b.newPage();
  await pg.setViewportSize({ width: 1440, height: 900 });
  await pg.goto('http://localhost:8082/', { waitUntil: 'load', timeout: 15000 });
  await pg.evaluate(() => {
    document.getElementById('trancoso').scrollIntoView();
  });
  await pg.waitForTimeout(1000);
  await pg.evaluate(async () => {
    const imgs = Array.from(document.querySelectorAll('#trancoso img'));
    await Promise.all(imgs.map(img => {
      if (img.complete) return Promise.resolve();
      return new Promise(resolve => {
        img.onload = resolve;
        img.onerror = resolve;
      });
    }));
  });
  await pg.waitForTimeout(500);
  const trancosoEl = await pg.$('#trancoso');
  await trancosoEl.screenshot({ path: 'scratch_img/screenshot_trancoso_updated.png' });
  console.log('Saved screenshot_trancoso_updated.png successfully');
  await b.close();
})();
