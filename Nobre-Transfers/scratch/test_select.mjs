import { chromium } from 'file:///C:/KIRO/.agents/tasks/nobre-transfers-fix/tools/node_modules/playwright-core/index.mjs';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

async function testSelect() {
  const browser = await chromium.launch({ executablePath: CHROME, headless: true });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.setContent(`
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: sans-serif; padding: 20px; background: #333; }
        .box { background: #fdfaf5; padding: 15px; border-radius: 8px; }
        select {
          width: 100%;
          font-size: 16px;
          padding: 10px;
          border: 1px solid #ccc;
        }
        option {
          padding: 12px 14px;
          border-bottom: 1px solid #e0d8cc;
          font-size: 15px;
          background: #fff;
        }
      </style>
    </head>
    <body>
      <div class="box">
        <select id="sel" size="7">
          <option>Escolha o passeio</option>
          <option>Praia do Espelho</option>
          <option>Rio da Barra</option>
          <option>Taípe</option>
          <option>Caraíva (Passeio)</option>
          <option>Trancoso (Quadrado e Praias)</option>
          <option>Outro roteiro sob medida</option>
        </select>
      </div>
    </body>
    </html>
  `);
  await page.screenshot({ path: 'C:/Users/Paralelo 17/.gemini/antigravity/brain/332a9909-f1ea-431d-8084-eaa9f5556749/test_select_size7.png' });
  await browser.close();
  console.log('Done test_select_size7');
}
testSelect();
