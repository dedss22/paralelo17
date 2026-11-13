import { chromium } from 'file:///C:/KIRO/.agents/tasks/nobre-transfers-fix/tools/node_modules/playwright-core/index.mjs';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

async function main() {
  const b = await chromium.launch({executablePath: CHROME, headless: true});
  const pg = await b.newPage();
  await pg.setViewportSize({width: 1440, height: 900});
  await pg.goto('http://localhost:8082/', {waitUntil: 'networkidle'});
  
  // Make destination spreads visible so animations trigger for screenshot
  await pg.evaluate(() => {
    document.querySelectorAll('.destination-page-spread').forEach(el => el.classList.add('is-visible'));
  });
  await pg.waitForTimeout(800);

  const filme = await pg.$('#filme');
  if (filme) {
    await filme.scrollIntoViewIfNeeded();
    await pg.waitForTimeout(300);
    await filme.screenshot({path: 'scratch_img/after_filme.png'});
  }

  const arraial = await pg.$('#arraial');
  if (arraial) {
    await arraial.scrollIntoViewIfNeeded();
    await pg.waitForTimeout(300);
    await arraial.screenshot({path: 'scratch_img/after_arraial.png'});
  }

  const taipe = await pg.$('#taipe');
  if (taipe) {
    await taipe.scrollIntoViewIfNeeded();
    await pg.waitForTimeout(300);
    await taipe.screenshot({path: 'scratch_img/after_taipe.png'});
  }

  const santoandre = await pg.$('#santoandre');
  if (santoandre) {
    await santoandre.scrollIntoViewIfNeeded();
    await pg.waitForTimeout(300);
    await santoandre.screenshot({path: 'scratch_img/after_santoandre.png'});
  }

  console.log('After screenshots captured successfully.');
  await b.close();
}

main().catch(console.error);
