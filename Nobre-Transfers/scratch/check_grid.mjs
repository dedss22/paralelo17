import { chromium } from 'file:///C:/KIRO/.agents/tasks/nobre-transfers-fix/tools/node_modules/playwright-core/index.mjs';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

async function main() {
  const b = await chromium.launch({executablePath: CHROME, headless: true});
  const pg = await b.newPage();
  await pg.setViewportSize({width: 1440, height: 900});
  await pg.goto('http://localhost:8082/', {waitUntil: 'networkidle'});
  
  await pg.addStyleTag({ content: `
@media (min-width: 769px) {
  .destination-page-spread {
    height: calc(100vh - 80px);
    max-height: calc(100vh - 80px);
    overflow: hidden;
  }
  .destination-page-spread .spread-content-col {
    padding: 32px clamp(28px, 4.2vw, 64px) 32px;
    overflow-y: auto;
    scrollbar-width: none;
  }
  .destination-page-spread .spread-content-col::-webkit-scrollbar {
    display: none;
  }
  .spread-gallery-card { height: 62px; }
  .spread-gallery-section { margin-top: 12px; padding-top: 10px; }
  .spread-nearby-container { margin-top: 8px; }
  .dest-spread-sub { margin-bottom: 10px; }
  .dest-perks-inline { margin-bottom: 12px; }
}
` });
  
  const h = await pg.evaluate(() => {
    return ['arraial', 'taipe', 'santoandre'].map(id => {
      const el = document.getElementById(id);
      const col = el.querySelector('.spread-content-col');
      const media = el.querySelector('.spread-media-col');
      return {
        id,
        sectionH: Math.round(el.getBoundingClientRect().height),
        mediaH: Math.round(media.getBoundingClientRect().height),
        contentClientH: Math.round(col.clientHeight),
        contentScrollH: Math.round(col.scrollHeight)
      };
    });
  });
  console.log(JSON.stringify(h, null, 2));
  await b.close();
}

main().catch(console.error);
