import { chromium } from 'file:///C:/KIRO/.agents/tasks/nobre-transfers-fix/tools/node_modules/playwright-core/index.mjs';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

async function testDropdown() {
  const browser = await chromium.launch({ executablePath: CHROME, headless: true });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.setContent(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
        :root {
          --q-surface: #FDFBF7;
          --q-surface-2: #ECE6DA;
          --q-line: rgba(20, 17, 15, 0.12);
          --q-line-strong: rgba(20, 17, 15, 0.22);
          --q-ink: #14110F;
          --q-ink-2: #5C554E;
          --q-gold: #C9A45C;
          --q-gold-hover: #D8B46E;
          --q-gold-ink: #8A6517;
          --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
        }
        body {
          font-family: var(--font-sans);
          background: #14110F;
          margin: 0;
          padding: 20px;
          box-sizing: border-box;
        }
        .card {
          background: rgba(244, 239, 230, 0.96);
          border-radius: 12px;
          border: 1px solid var(--q-line);
          box-shadow: 0 12px 32px rgba(0,0,0,0.4);
          overflow: visible;
          position: relative;
        }
        .head {
          display: flex;
          gap: 6px;
          padding: 8px;
          background: rgba(236, 230, 218, 0.85);
          border-bottom: 1px solid var(--q-line);
          border-radius: 12px 12px 0 0;
        }
        .tab {
          flex: 1;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 14px;
          border-radius: 6px;
          background: transparent;
          color: var(--q-ink-2);
        }
        .tab.active {
          background: #fff;
          color: var(--q-ink);
          font-weight: 700;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .field {
          padding: 10px 14px;
          position: relative;
          border-bottom: 1px solid var(--q-line);
        }
        .field-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 4px;
        }
        .label {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--q-ink-2);
          letter-spacing: 0.05em;
        }
        .origin-badge {
          font-size: 11px;
          color: var(--q-ink-2);
          background: rgba(20,17,15,0.06);
          padding: 2px 6px;
          border-radius: 4px;
        }
        .select-btn {
          width: 100%;
          height: 44px;
          background: #FFFFFF;
          border: 1px solid var(--q-line-strong);
          border-radius: 8px;
          padding: 0 12px;
          font-family: inherit;
          font-size: 15px;
          font-weight: 600;
          color: var(--q-ink);
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          box-sizing: border-box;
          transition: border-color 150ms ease;
        }
        .select-btn:focus, .select-btn.is-open {
          border-color: var(--q-gold-ink);
          outline: none;
          box-shadow: 0 0 0 3px rgba(201, 164, 92, 0.2);
        }
        .select-btn svg {
          color: var(--q-ink-2);
          transition: transform 150ms ease;
        }
        .select-btn.is-open svg {
          transform: rotate(180deg);
        }

        /* O MENU DROPDOWN COM BORDAS ENTRE OS ITENS */
        .dropdown-menu {
          position: absolute;
          top: calc(100% - 2px);
          left: 14px;
          right: 14px;
          background: #FFFFFF;
          border: 1px solid var(--q-line-strong);
          border-radius: 10px;
          box-shadow: 0 14px 36px -6px rgba(0, 0, 0, 0.35);
          z-index: 1000;
          overflow: hidden;
          max-height: 280px;
          overflow-y: auto;
          animation: slideDown 150ms ease-out;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .dropdown-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 16px;
          font-size: 14.5px;
          font-weight: 500;
          color: var(--q-ink);
          background: transparent;
          border: none;
          width: 100%;
          text-align: left;
          cursor: pointer;
          border-bottom: 1px solid var(--q-line);
          transition: background 120ms ease, color 120ms ease;
          box-sizing: border-box;
        }
        .dropdown-item:last-child {
          border-bottom: none;
        }
        .dropdown-item:hover, .dropdown-item:focus {
          background: rgba(201, 164, 92, 0.12);
          color: var(--q-ink);
          outline: none;
        }
        .dropdown-item.is-selected {
          background: rgba(201, 164, 92, 0.18);
          font-weight: 700;
          color: var(--q-gold-ink);
        }
        .dropdown-item .check {
          color: var(--q-gold-ink);
          font-weight: 800;
          font-size: 14px;
        }

        .cta-btn {
          width: 100%;
          height: 48px;
          background: var(--q-gold);
          border: none;
          font-size: 15px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 0 0 12px 12px;
          cursor: pointer;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="head">
          <div class="tab">Transfer</div>
          <div class="tab active">Passeio</div>
        </div>
        <div class="field">
          <div class="field-head">
            <span class="label">Passeio</span>
            <span class="origin-badge">Embarque: Seu Hotel/Pousada</span>
          </div>
          <button type="button" class="select-btn is-open">
            <span>Praia do Espelho</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div class="dropdown-menu">
            <button class="dropdown-item is-selected">
              <span>Praia do Espelho</span>
              <span class="check">✓</span>
            </button>
            <button class="dropdown-item">
              <span>Rio da Barra</span>
            </button>
            <button class="dropdown-item">
              <span>Taípe</span>
            </button>
            <button class="dropdown-item">
              <span>Caraíva (Passeio)</span>
            </button>
            <button class="dropdown-item">
              <span>Trancoso (Quadrado e Praias)</span>
            </button>
            <button class="dropdown-item">
              <span>Outro roteiro sob medida</span>
            </button>
          </div>
        </div>
        <div style="padding: 10px 14px; border-bottom: 1px solid var(--q-line); opacity: 0.5;">
          <div class="label">Data & Horário</div>
          <div style="height: 38px;"></div>
        </div>
        <button class="cta-btn">Receber cotação →</button>
      </div>
    </body>
    </html>
  `);
  await page.screenshot({ path: 'C:/Users/Paralelo 17/.gemini/antigravity/brain/332a9909-f1ea-431d-8084-eaa9f5556749/dropdown_prototype.png' });
  await browser.close();
  console.log('Prototype generated');
}
testDropdown();
