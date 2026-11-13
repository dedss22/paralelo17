import { chromium } from 'file:///C:/KIRO/.agents/tasks/nobre-transfers-fix/tools/node_modules/playwright-core/index.mjs';

const BASE = 'http://localhost:8082/';
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

async function checkHeroWheelPositions() {
  const browser = await chromium.launch({ executablePath: CHROME, headless: true });

  const viewports = [
    { w: 1280, h: 800 },
    { w: 1366, h: 768 },
    { w: 1440, h: 900 },
    { w: 1536, h: 864 },
    { w: 1920, h: 1080 }
  ];

  for (const vp of viewports) {
    const page = await browser.newPage({ viewport: { width: vp.w, height: vp.h } });
    await page.goto(BASE, { waitUntil: 'networkidle' });

    const data = await page.evaluate(() => {
      const hero = document.getElementById('reservas');
      const wrap = document.querySelector('.nbq-wrap');
      const form = document.getElementById('nobreBookingForm');
      const subBar = document.getElementById('nbqSubBar');
      const heroContent = document.querySelector('.hero-content');
      const title = document.querySelector('.hero-title');
      const subtitle = document.querySelector('.hero-subtitle');

      return {
        heroRect: hero.getBoundingClientRect(),
        wrapRect: wrap.getBoundingClientRect(),
        formRect: form.getBoundingClientRect(),
        subBarRect: subBar ? subBar.getBoundingClientRect() : null,
        titleBottom: title ? title.getBoundingClientRect().bottom : 0,
        subBottom: subtitle ? subtitle.getBoundingClientRect().bottom : 0,
        wrapComputed: {
          marginTop: window.getComputedStyle(wrap).marginTop,
          marginBottom: window.getComputedStyle(wrap).marginBottom,
          position: window.getComputedStyle(wrap).position,
          top: window.getComputedStyle(wrap).top
        }
      };
    });

    console.log(`Viewport ${vp.w}x${vp.h}:`);
    console.log(`  Hero height: ${data.heroRect.height}px`);
    console.log(`  Subtitle bottom: ${data.subBottom.toFixed(1)}px`);
    console.log(`  Card top: ${data.formRect.top.toFixed(1)}px, Card height: ${data.formRect.height}px, Card bottom: ${data.formRect.bottom.toFixed(1)}px`);
    if (data.subBarRect) {
      console.log(`  SubBar bottom: ${data.subBarRect.bottom.toFixed(1)}px (Hero bottom: ${data.heroRect.bottom}px, Diff to viewport: ${(vp.h - data.subBarRect.bottom).toFixed(1)}px)`);
    }
    console.log(`  Wrap styles: marginTop=${data.wrapComputed.marginTop}`);

    await page.close();
  }

  await browser.close();
}

checkHeroWheelPositions().catch(console.error);
