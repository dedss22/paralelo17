import { chromium } from 'file:///C:/KIRO/.agents/tasks/nobre-transfers-fix/tools/node_modules/playwright-core/index.mjs';

const BASE = 'http://localhost:8082/';
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

async function inspectDropdown() {
  const browser = await chromium.launch({ executablePath: CHROME, headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(BASE, { waitUntil: 'networkidle' });

  await page.click('#btnOpenDestination');
  await page.waitForTimeout(200);

  const info = await page.evaluate(() => {
    const dd = document.getElementById('dropdownDestination');
    const ddRect = dd.getBoundingClientRect();
    const items = Array.from(dd.querySelectorAll('.nbq-dropdown-item'));

    // Find all ancestors and their overflow / clipping
    let el = dd.parentElement;
    const ancestors = [];
    while (el && el !== document.body) {
      const s = window.getComputedStyle(el);
      ancestors.push({
        tag: el.tagName,
        id: el.id,
        class: el.className,
        overflow: s.overflow,
        overflowY: s.overflowY,
        maxHeight: s.maxHeight,
        height: s.height,
        rect: el.getBoundingClientRect()
      });
      el = el.parentElement;
    }

    const ddStyle = window.getComputedStyle(dd);

    return {
      ddRect,
      ddStyleMaxHeight: ddStyle.maxHeight,
      ddStyleOverflowY: ddStyle.overflowY,
      ddStyleZIndex: ddStyle.zIndex,
      itemCount: items.length,
      itemRects: items.map(it => it.getBoundingClientRect()),
      ancestors
    };
  });

  console.log('Dropdown Info:');
  console.log('Rect:', info.ddRect);
  console.log('maxHeight:', info.ddStyleMaxHeight, 'overflowY:', info.ddStyleOverflowY, 'zIndex:', info.ddStyleZIndex);
  console.log('Ancestors with overflow != visible:');
  for (const a of info.ancestors) {
    if (a.overflow !== 'visible' || a.overflowY !== 'visible') {
      console.log(`  ${a.tag}#${a.id}.${a.class}: overflow=${a.overflow}, overflowY=${a.overflowY}, height=${a.height}`);
    }
  }

  await page.screenshot({ path: 'C:/Users/Paralelo 17/.gemini/antigravity/brain/332a9909-f1ea-431d-8084-eaa9f5556749/inspect_dropdown_cut.png' });
  await browser.close();
}

inspectDropdown().catch(console.error);
