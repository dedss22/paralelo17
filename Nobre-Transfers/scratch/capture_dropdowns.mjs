import { chromium } from 'file:///C:/KIRO/.agents/tasks/nobre-transfers-fix/tools/node_modules/playwright-core/index.mjs';

const BASE = 'http://localhost:8082/';
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const ARTIFACTS_DIR = 'C:/Users/Paralelo 17/.gemini/antigravity/brain/332a9909-f1ea-431d-8084-eaa9f5556749';

async function main() {
  const browser = await chromium.launch({ executablePath: CHROME, headless: true });

  // 1. Mobile Passeio Dropdown (mesma visão da imagem do usuário)
  {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true });
    await page.goto(BASE, { waitUntil: 'networkidle' });

    // Alterna para Passeio
    await page.click('label[for="svcTour"]');
    await page.waitForTimeout(200);

    // Clica no trigger do Passeio para abrir o dropdown
    await page.click('#btnOpenTour');
    await page.waitForTimeout(200);

    await page.screenshot({ path: `${ARTIFACTS_DIR}/mobile_passeio_dropdown_com_bordas.png` });
    console.log('✔ Screenshot mobile Passeio salvo: mobile_passeio_dropdown_com_bordas.png');
    await page.close();
  }

  // 2. Mobile Destino Dropdown
  {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true });
    await page.goto(BASE, { waitUntil: 'networkidle' });

    // Clica no trigger do Destino para abrir o dropdown
    await page.click('#btnOpenDestination');
    await page.waitForTimeout(200);

    await page.screenshot({ path: `${ARTIFACTS_DIR}/mobile_destino_dropdown_com_bordas.png` });
    console.log('✔ Screenshot mobile Destino salvo: mobile_destino_dropdown_com_bordas.png');
    await page.close();
  }

  // 3. Desktop Destino Dropdown
  {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(BASE, { waitUntil: 'networkidle' });

    await page.click('#btnOpenDestination');
    await page.waitForTimeout(200);

    await page.screenshot({ path: `${ARTIFACTS_DIR}/desktop_destino_dropdown_com_bordas.png` });
    console.log('✔ Screenshot desktop Destino salvo: desktop_destino_dropdown_com_bordas.png');
    await page.close();
  }

  await browser.close();
  console.log('Finalizado!');
}

main().catch(console.error);
