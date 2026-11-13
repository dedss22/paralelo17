import { chromium } from 'file:///C:/KIRO/.agents/tasks/nobre-transfers-fix/tools/node_modules/playwright-core/index.mjs';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

async function main() {
  const b = await chromium.launch({executablePath: CHROME, headless: true});
  const pg = await b.newPage();
  await pg.setViewportSize({width:1440, height:900});
  await pg.goto('http://localhost:8082/', {waitUntil:'networkidle'});
  
  const filme = await pg.$('#filme');
  if (filme) await filme.screenshot({path: 'scratch_img/before_filme.png'});
  
  const arraial = await pg.$('#arraial');
  if (arraial) await arraial.screenshot({path: 'scratch_img/before_arraial.png'});

  const taipe = await pg.$('#taipe');
  if (taipe) await taipe.screenshot({path: 'scratch_img/before_taipe.png'});

  const santoandre = await pg.$('#santoandre');
  if (santoandre) await santoandre.screenshot({path: 'scratch_img/before_santoandre.png'});
  
  console.log('Before screenshots saved successfully.');
  await b.close();
}

main().catch(console.error);
