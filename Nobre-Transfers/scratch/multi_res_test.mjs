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

async function testResolution(width, height) {
  const b = await chromium.launch({executablePath: CHROME, headless: true});
  const pg = await b.newPage();
  await pg.setViewportSize({width, height});
  await pg.goto('http://localhost:8082/', {waitUntil: 'networkidle'});
  await pg.addStyleTag({ content: testCss });
  
  const h = await pg.evaluate((vh) => {
    const secs = ['reservas','filme','planejamento','arraial','trancoso','caraiva','riodabarra','espelho','taipe','santoandre','frota','faq','contato'];
    return secs.map(id => {
      const el = document.getElementById(id);
      if (!el) return {id, h: 'NOT FOUND'};
      const r = el.getBoundingClientRect();
      return {id, h: Math.round(r.height), over: r.height > vh};
    });
  }, height);
  console.log(`Resolution ${width}x${height}:`, h.filter(x => x.over));
  await b.close();
}

async function main() {
  await testResolution(1440, 900);
  await testResolution(1920, 1080);
  await testResolution(1366, 768);
  await testResolution(1280, 800);
}

main().catch(console.error);
