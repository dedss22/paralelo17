import { chromium } from 'file:///C:/KIRO/.agents/tasks/nobre-transfers-fix/tools/node_modules/playwright-core/index.mjs';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

(async () => {
  const b = await chromium.launch({ executablePath: CHROME, headless: true });
  const pg = await b.newPage();
  await pg.setViewportSize({ width: 1440, height: 900 });
  await pg.goto('http://localhost:8082/', { waitUntil: 'load', timeout: 15000 });
  await pg.evaluate(() => {
    document.getElementById('riodabarra').scrollIntoView();
  });
  await pg.waitForTimeout(1000);
  await pg.evaluate(async () => {
    const imgs = Array.from(document.querySelectorAll('#riodabarra img'));
    await Promise.all(imgs.map(img => {
      if (img.complete) return Promise.resolve();
      return new Promise(resolve => {
        img.onload = resolve;
        img.onerror = resolve;
      });
    }));
  });
  await pg.waitForTimeout(500);

  const rect = await pg.evaluate(() => {
    const el = document.getElementById('riodabarra');
    const r = el.getBoundingClientRect();
    const col = el.querySelector('.spread-content-col');
    return {
      sectionHeight: Math.round(r.height),
      colHeight: Math.round(col.getBoundingClientRect().height),
      colScrollHeight: col.scrollHeight,
      colClientHeight: col.clientHeight
    };
  });
  console.log('Rio da Barra metrics:', JSON.stringify(rect, null, 2));

  const riodabarraEl = await pg.$('#riodabarra');
  await riodabarraEl.screenshot({ path: 'scratch_img/screenshot_riodabarra_updated.png' });
  console.log('Saved screenshot_riodabarra_updated.png successfully');
  await b.close();
})();
