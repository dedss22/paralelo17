import { chromium } from 'file:///C:/KIRO/.agents/tasks/nobre-transfers-fix/tools/node_modules/playwright-core/index.mjs';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

const testCss = `
@media (min-width: 769px) {
  /* Filme */
  .section-filme {
    height: 100vh;
    max-height: 100vh;
    padding: 56px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    box-sizing: border-box;
  }
  .section-filme .filme-frame {
    margin: 24px auto 20px;
  }

  /* Spreads */
  .destination-page-spread {
    height: calc(100vh - 80px);
    max-height: calc(100vh - 80px);
    grid-template-rows: 100%;
    overflow: hidden;
  }

  .destination-page-spread .spread-content-col {
    padding: 32px clamp(28px, 4.2vw, 64px) 32px;
    overflow-y: auto;
    scrollbar-width: none; /* hide scrollbar */
  }

  .destination-page-spread .spread-content-col::-webkit-scrollbar {
    display: none;
  }

  .spread-gallery-card {
    height: 62px;
  }

  .spread-gallery-section {
    margin-top: 12px;
    padding-top: 10px;
  }

  .spread-nearby-container {
    margin-top: 8px;
  }

  .dest-spread-sub {
    margin-bottom: 10px;
  }

  .dest-perks-inline {
    margin-bottom: 12px;
  }
}
`;

async function main() {
  const b = await chromium.launch({executablePath: CHROME, headless: true});
  const pg = await b.newPage();
  await pg.setViewportSize({width: 1440, height: 900});
  await pg.goto('http://localhost:8082/', {waitUntil: 'networkidle'});
  
  await pg.addStyleTag({ content: testCss });
  
  // Make all destination spreads visible
  await pg.evaluate(() => {
    document.querySelectorAll('.destination-page-spread').forEach(el => el.classList.add('is-visible'));
  });

  // Give animations a moment to complete
  await pg.waitForTimeout(800);
  
  const filme = await pg.$('#filme');
  if (filme) {
    await filme.scrollIntoViewIfNeeded();
    await pg.waitForTimeout(300);
    await filme.screenshot({path: 'scratch_img/test_filme.png'});
  }
  
  const arraial = await pg.$('#arraial');
  if (arraial) {
    await arraial.scrollIntoViewIfNeeded();
    await pg.waitForTimeout(300);
    await arraial.screenshot({path: 'scratch_img/test_arraial.png'});
  }

  const taipe = await pg.$('#taipe');
  if (taipe) {
    await taipe.scrollIntoViewIfNeeded();
    await pg.waitForTimeout(300);
    await taipe.screenshot({path: 'scratch_img/test_taipe.png'});
  }

  const santoandre = await pg.$('#santoandre');
  if (santoandre) {
    await santoandre.scrollIntoViewIfNeeded();
    await pg.waitForTimeout(300);
    await santoandre.screenshot({path: 'scratch_img/test_santoandre.png'});
  }

  console.log('Screenshots saved successfully.');
  await b.close();
}

main().catch(console.error);
