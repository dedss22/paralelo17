import { chromium } from 'file:///C:/KIRO/.agents/tasks/nobre-transfers-fix/tools/node_modules/playwright-core/index.mjs';

const BASE = 'http://localhost:8082/';
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

async function testDesktop() {
  const browser = await chromium.launch({ executablePath: CHROME, headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(BASE, { waitUntil: 'networkidle' });

  await page.evaluate(() => {
    document.getElementById('nobreBookingForm').style.overflow = 'visible';
    const form = document.getElementById('nobreBookingForm');
    form.style.overflow = 'visible';
    const grid = form.querySelector('.nbq-grid');
    grid.style.overflow = 'visible';
    const field = document.getElementById('fieldDestination');
    field.style.overflow = 'visible';
  });

  await page.click('#btnOpenDestination');
  await page.waitForTimeout(200);

  await page.screenshot({ path: 'C:/Users/Paralelo 17/.gemini/antigravity/brain/332a9909-f1ea-431d-8084-eaa9f5556749/desktop_destino_overflow_visible.png' });
  await browser.close();
  console.log('Done testDesktop');
}
testDesktop();
