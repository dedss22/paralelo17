import re

INDEX_PATH = r'C:\Users\Paralelo 17\.gemini\antigravity\scratch\paralelo17\Nobre-Transfers\index.html'

with open(INDEX_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. CSS
css_needle = '''    .nbq-hidden-input {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 20px;
      height: 20px;
      opacity: 0.001;
      border: 0;
      padding: 0;
      margin: 0;
      pointer-events: none;
    }'''

css_replacement = '''    .nbq-hidden-input {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 20px;
      height: 20px;
      opacity: 0.001;
      border: 0;
      padding: 0;
      margin: 0;
      pointer-events: none;
    }

    /* Custom Select Wrap & Dropdown Menu com bordas separadoras */
    .nbq-custom-select-wrap {
      position: relative;
      width: 100%;
    }
    .nbq-select-trigger {
      cursor: pointer;
    }
    .nbq-select-trigger .nbq-chevron-icon {
      transition: transform 180ms ease;
      color: var(--q-ink-2);
      flex-shrink: 0;
    }
    .nbq-select-trigger[aria-expanded="true"] .nbq-chevron-icon {
      transform: rotate(180deg);
      color: var(--q-gold-ink);
    }
    .nbq-select-dropdown {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      width: 100%;
      min-width: 260px;
      max-width: 380px;
      background: #FFFFFF;
      border: 1px solid var(--q-line-strong);
      border-radius: 10px;
      box-shadow: 0 14px 32px -4px rgba(20, 17, 15, 0.28), 0 4px 12px rgba(0, 0, 0, 0.08);
      z-index: 9999;
      max-height: 275px;
      overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: var(--q-line-strong) transparent;
      box-sizing: border-box;
      animation: nbqDropdownFade 140ms ease-out;
    }
    .nbq-select-dropdown[hidden] {
      display: none !important;
    }
    @keyframes nbqDropdownFade {
      from { opacity: 0; transform: translateY(-4px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* ITENS DA LISTA COM BORDA DIVISÓRIA */
    .nbq-dropdown-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 12px 14px;
      min-height: 44px;
      background: #FFFFFF;
      border: none;
      border-bottom: 1px solid var(--q-line);
      font: 500 14px/1.3 var(--font-sans);
      color: var(--q-ink);
      text-align: left;
      cursor: pointer;
      transition: background 120ms ease, color 120ms ease;
      box-sizing: border-box;
    }
    .nbq-dropdown-item:last-child {
      border-bottom: none;
    }
    .nbq-dropdown-item:hover,
    .nbq-dropdown-item:focus-visible {
      background: rgba(201, 164, 92, 0.12);
      color: var(--q-ink);
      outline: none;
    }
    .nbq-dropdown-item.is-selected {
      background: rgba(201, 164, 92, 0.16);
      font-weight: 700;
      color: var(--q-gold-ink);
    }
    .nbq-dropdown-item .nbq-item-check {
      display: none;
      font-size: 13px;
      font-weight: 800;
      color: var(--q-gold-ink);
      margin-left: 8px;
      flex-shrink: 0;
    }
    .nbq-dropdown-item.is-selected .nbq-item-check {
      display: inline-block;
    }'''

assert css_needle in content, "css_needle not found"
content = content.replace(css_needle, css_replacement, 1)

# 2. Mobile CSS
mobile_needle = '''      .nbq-dest select.nbq-control {
        height: 44px;
        font-size: 15px;
      }'''

mobile_replacement = '''      .nbq-dest select.nbq-control,
      .nbq-dest .nbq-picker-btn {
        height: 44px;
        font-size: 15px;
      }
      .nbq-select-dropdown {
        left: 0;
        right: 0;
        width: 100%;
        max-width: 100%;
      }'''

assert mobile_needle in content, "mobile_needle not found"
content = content.replace(mobile_needle, mobile_replacement, 1)

# 3. HTML for Destino and Passeio
html_needle = '''            <div class="nbq-field nbq-dest" id="fieldDestination">
              <div class="nbq-field-header">
                <label class="nbq-label" for="bookingDestination">Destino</label>
                <div class="nbq-origin-fixed" id="fixedOriginBadge" title="Origem fixa no Aeroporto">
                  <span class="nbq-origin-tag">De:</span> Aeroporto BPS
                </div>
              </div>
              <select id="bookingOrigin" name="origin" class="nbq-hidden-input" tabindex="-1" aria-hidden="true">
                <option value="Aeroporto de Porto Seguro" selected>Aeroporto de Porto Seguro (BPS)</option>
                <option value="Porto Seguro (Centro / Hotéis)">Porto Seguro (Centro / Hotéis)</option>
                <option value="Arraial d'Ajuda">Arraial d'Ajuda</option>
                <option value="Trancoso">Trancoso</option>
                <option value="Caraíva">Caraíva</option>
                <option value="Santo André">Santo André</option>
                <option value="Praia do Espelho">Praia do Espelho</option>
                <option value="Taípe">Taípe</option>
                <option value="Rio da Barra">Rio da Barra</option>
                <option value="Terravista / Fly Club">Terravista / Fly Club</option>
                <option value="Outro local">Outro local</option>
              </select>
              <select id="bookingDestination" name="destination" class="nbq-control" required aria-describedby="err-destination">
                <option value="" disabled selected>Para onde você vai?</option>
                <option value="Trancoso">Trancoso</option>
                <option value="Arraial d'Ajuda">Arraial d'Ajuda</option>
                <option value="Caraíva">Caraíva</option>
                <option value="Santo André">Santo André</option>
                <option value="Praia do Espelho">Praia do Espelho</option>
                <option value="Taípe">Taípe</option>
                <option value="Rio da Barra">Rio da Barra</option>
                <option value="Aeroporto de Porto Seguro">Aeroporto de Porto Seguro</option>
                <option value="Porto Seguro (Centro / Hotéis)">Porto Seguro (Centro / Hotéis)</option>
                <option value="Terravista / Fly Club">Terravista / Fly Club</option>
                <option value="Outro local">Outro local</option>
              </select>
              <p class="nbq-error field-error" id="err-destination" hidden></p>
            </div>

            <div class="nbq-field nbq-dest" id="fieldTour" hidden>
              <div class="nbq-field-header">
                <label class="nbq-label" for="bookingTour">Passeio</label>
                <div class="nbq-origin-fixed">
                  <span class="nbq-origin-tag">Embarque:</span> Seu Hotel/Pousada
                </div>
              </div>
              <select id="bookingTour" name="tour" class="nbq-control" disabled aria-describedby="err-tour">
                <option value="" disabled selected>Escolha o passeio</option>
                <option value="Praia do Espelho">Praia do Espelho</option>
                <option value="Rio da Barra">Rio da Barra</option>
                <option value="Taípe">Taípe</option>
                <option value="Caraíva (Passeio)">Caraíva (Passeio)</option>
                <option value="Trancoso (Quadrado e Praias)">Trancoso (Quadrado e Praias)</option>
                <option value="Outro roteiro">Outro roteiro sob medida</option>
              </select>
              <p class="nbq-error field-error" id="err-tour" hidden></p>
            </div>'''

html_replacement = '''            <div class="nbq-field nbq-dest" id="fieldDestination">
              <div class="nbq-field-header">
                <label class="nbq-label" for="btnOpenDestination">Destino</label>
                <div class="nbq-origin-fixed" id="fixedOriginBadge" title="Origem fixa no Aeroporto">
                  <span class="nbq-origin-tag">De:</span> Aeroporto BPS
                </div>
              </div>
              <select id="bookingOrigin" name="origin" class="nbq-hidden-input" tabindex="-1" aria-hidden="true">
                <option value="Aeroporto de Porto Seguro" selected>Aeroporto de Porto Seguro (BPS)</option>
                <option value="Porto Seguro (Centro / Hotéis)">Porto Seguro (Centro / Hotéis)</option>
                <option value="Arraial d'Ajuda">Arraial d'Ajuda</option>
                <option value="Trancoso">Trancoso</option>
                <option value="Caraíva">Caraíva</option>
                <option value="Santo André">Santo André</option>
                <option value="Praia do Espelho">Praia do Espelho</option>
                <option value="Taípe">Taípe</option>
                <option value="Rio da Barra">Rio da Barra</option>
                <option value="Terravista / Fly Club">Terravista / Fly Club</option>
                <option value="Outro local">Outro local</option>
              </select>
              <div class="nbq-custom-select-wrap">
                <button type="button" class="nbq-picker-btn nbq-select-trigger" id="btnOpenDestination" aria-haspopup="listbox" aria-expanded="false" aria-controls="dropdownDestination" aria-label="Selecionar destino">
                  <span class="nbq-picker-val" id="displayBookingDestination">Para onde você vai?</span>
                  <svg class="nbq-picker-icon nbq-chevron-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                <div class="nbq-select-dropdown" id="dropdownDestination" hidden role="listbox" aria-label="Opções de destino">
                  <button type="button" class="nbq-dropdown-item" data-value="Trancoso" role="option">
                    <span>Trancoso</span>
                    <span class="nbq-item-check" aria-hidden="true">✓</span>
                  </button>
                  <button type="button" class="nbq-dropdown-item" data-value="Arraial d'Ajuda" role="option">
                    <span>Arraial d'Ajuda</span>
                    <span class="nbq-item-check" aria-hidden="true">✓</span>
                  </button>
                  <button type="button" class="nbq-dropdown-item" data-value="Caraíva" role="option">
                    <span>Caraíva</span>
                    <span class="nbq-item-check" aria-hidden="true">✓</span>
                  </button>
                  <button type="button" class="nbq-dropdown-item" data-value="Santo André" role="option">
                    <span>Santo André</span>
                    <span class="nbq-item-check" aria-hidden="true">✓</span>
                  </button>
                  <button type="button" class="nbq-dropdown-item" data-value="Praia do Espelho" role="option">
                    <span>Praia do Espelho</span>
                    <span class="nbq-item-check" aria-hidden="true">✓</span>
                  </button>
                  <button type="button" class="nbq-dropdown-item" data-value="Taípe" role="option">
                    <span>Taípe</span>
                    <span class="nbq-item-check" aria-hidden="true">✓</span>
                  </button>
                  <button type="button" class="nbq-dropdown-item" data-value="Rio da Barra" role="option">
                    <span>Rio da Barra</span>
                    <span class="nbq-item-check" aria-hidden="true">✓</span>
                  </button>
                  <button type="button" class="nbq-dropdown-item" data-value="Aeroporto de Porto Seguro" role="option">
                    <span>Aeroporto de Porto Seguro</span>
                    <span class="nbq-item-check" aria-hidden="true">✓</span>
                  </button>
                  <button type="button" class="nbq-dropdown-item" data-value="Porto Seguro (Centro / Hotéis)" role="option">
                    <span>Porto Seguro (Centro / Hotéis)</span>
                    <span class="nbq-item-check" aria-hidden="true">✓</span>
                  </button>
                  <button type="button" class="nbq-dropdown-item" data-value="Terravista / Fly Club" role="option">
                    <span>Terravista / Fly Club</span>
                    <span class="nbq-item-check" aria-hidden="true">✓</span>
                  </button>
                  <button type="button" class="nbq-dropdown-item" data-value="Outro local" role="option">
                    <span>Outro local</span>
                    <span class="nbq-item-check" aria-hidden="true">✓</span>
                  </button>
                </div>
                <select id="bookingDestination" name="destination" class="nbq-control nbq-hidden-input" required aria-describedby="err-destination" tabindex="-1">
                  <option value="" disabled selected>Para onde você vai?</option>
                  <option value="Trancoso">Trancoso</option>
                  <option value="Arraial d'Ajuda">Arraial d'Ajuda</option>
                  <option value="Caraíva">Caraíva</option>
                  <option value="Santo André">Santo André</option>
                  <option value="Praia do Espelho">Praia do Espelho</option>
                  <option value="Taípe">Taípe</option>
                  <option value="Rio da Barra">Rio da Barra</option>
                  <option value="Aeroporto de Porto Seguro">Aeroporto de Porto Seguro</option>
                  <option value="Porto Seguro (Centro / Hotéis)">Porto Seguro (Centro / Hotéis)</option>
                  <option value="Terravista / Fly Club">Terravista / Fly Club</option>
                  <option value="Outro local">Outro local</option>
                </select>
              </div>
              <p class="nbq-error field-error" id="err-destination" hidden></p>
            </div>

            <div class="nbq-field nbq-dest" id="fieldTour" hidden>
              <div class="nbq-field-header">
                <label class="nbq-label" for="btnOpenTour">Passeio</label>
                <div class="nbq-origin-fixed">
                  <span class="nbq-origin-tag">Embarque:</span> Seu Hotel/Pousada
                </div>
              </div>
              <div class="nbq-custom-select-wrap">
                <button type="button" class="nbq-picker-btn nbq-select-trigger" id="btnOpenTour" aria-haspopup="listbox" aria-expanded="false" aria-controls="dropdownTour" aria-label="Selecionar passeio">
                  <span class="nbq-picker-val" id="displayBookingTour">Escolha o passeio</span>
                  <svg class="nbq-picker-icon nbq-chevron-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                <div class="nbq-select-dropdown" id="dropdownTour" hidden role="listbox" aria-label="Opções de passeio">
                  <button type="button" class="nbq-dropdown-item" data-value="Praia do Espelho" role="option">
                    <span>Praia do Espelho</span>
                    <span class="nbq-item-check" aria-hidden="true">✓</span>
                  </button>
                  <button type="button" class="nbq-dropdown-item" data-value="Rio da Barra" role="option">
                    <span>Rio da Barra</span>
                    <span class="nbq-item-check" aria-hidden="true">✓</span>
                  </button>
                  <button type="button" class="nbq-dropdown-item" data-value="Taípe" role="option">
                    <span>Taípe</span>
                    <span class="nbq-item-check" aria-hidden="true">✓</span>
                  </button>
                  <button type="button" class="nbq-dropdown-item" data-value="Caraíva (Passeio)" role="option">
                    <span>Caraíva (Passeio)</span>
                    <span class="nbq-item-check" aria-hidden="true">✓</span>
                  </button>
                  <button type="button" class="nbq-dropdown-item" data-value="Trancoso (Quadrado e Praias)" role="option">
                    <span>Trancoso (Quadrado e Praias)</span>
                    <span class="nbq-item-check" aria-hidden="true">✓</span>
                  </button>
                  <button type="button" class="nbq-dropdown-item" data-value="Outro roteiro" role="option">
                    <span>Outro roteiro sob medida</span>
                    <span class="nbq-item-check" aria-hidden="true">✓</span>
                  </button>
                </div>
                <select id="bookingTour" name="tour" class="nbq-control nbq-hidden-input" disabled aria-describedby="err-tour" tabindex="-1">
                  <option value="" disabled selected>Escolha o passeio</option>
                  <option value="Praia do Espelho">Praia do Espelho</option>
                  <option value="Rio da Barra">Rio da Barra</option>
                  <option value="Taípe">Taípe</option>
                  <option value="Caraíva (Passeio)">Caraíva (Passeio)</option>
                  <option value="Trancoso (Quadrado e Praias)">Trancoso (Quadrado e Praias)</option>
                  <option value="Outro roteiro">Outro roteiro sob medida</option>
                </select>
              </div>
              <p class="nbq-error field-error" id="err-tour" hidden></p>
            </div>'''

assert html_needle in content, "html_needle not found"
content = content.replace(html_needle, html_replacement, 1)

# 4. JS: Wiring custom dropdowns
js_needle = '''      // Sincronização e clique nos chips de destinos
      function syncChips() {
        var chips = (wrap || document).querySelectorAll('.nbq-chip');
        chips.forEach(function (chip) {
          var destVal = destination ? destination.value : '';
          var isCurrent = chip.dataset.dest === destVal;
          chip.setAttribute('aria-pressed', String(isCurrent));
        });
      }'''

js_replacement = '''      // Sincronização e clique nos chips de destinos
      function syncChips() {
        var chips = (wrap || document).querySelectorAll('.nbq-chip');
        chips.forEach(function (chip) {
          var destVal = destination ? destination.value : '';
          var isCurrent = chip.dataset.dest === destVal;
          chip.setAttribute('aria-pressed', String(isCurrent));
        });
        if (destination && $('displayBookingDestination') && destination.value) {
          $('displayBookingDestination').textContent = destination.value;
          updateItemSelection($('dropdownDestination'), destination.value);
        }
      }'''

assert js_needle in content, "js_needle not found"
content = content.replace(js_needle, js_replacement, 1)

js_wiring_needle = '''      if (destination) {
        destination.addEventListener('change', syncChips);
      }'''

js_wiring_replacement = '''      if (destination) {
        destination.addEventListener('change', syncChips);
      }

      // ------------------------------------------
      // Dropdowns Customizados com Borda nos Itens (Destino e Passeio)
      // ------------------------------------------
      function setupCustomSelect(triggerBtn, dropdownEl, displayEl, selectEl, errId) {
        if (!triggerBtn || !dropdownEl || !selectEl) return;

        function openDropdown() {
          closeAllCustomSelects(dropdownEl);
          dropdownEl.hidden = false;
          triggerBtn.setAttribute('aria-expanded', 'true');
          var selectedItem = dropdownEl.querySelector('.nbq-dropdown-item.is-selected');
          if (selectedItem) selectedItem.focus();
        }

        function closeDropdown() {
          dropdownEl.hidden = true;
          triggerBtn.setAttribute('aria-expanded', 'false');
        }

        triggerBtn.addEventListener('click', function (e) {
          e.stopPropagation();
          if (dropdownEl.hidden) openDropdown();
          else closeDropdown();
        });

        var items = dropdownEl.querySelectorAll('.nbq-dropdown-item');
        items.forEach(function (item) {
          item.addEventListener('click', function (e) {
            e.stopPropagation();
            var val = item.dataset.value;
            selectEl.value = val;
            selectEl.dispatchEvent(new Event('change', { bubbles: true }));
            selectEl.dispatchEvent(new Event('input', { bubbles: true }));
            if (displayEl) displayEl.textContent = val;
            updateItemSelection(dropdownEl, val);
            closeDropdown();
            triggerBtn.focus();
            if (errId) clearError(selectEl, errId);
          });
        });

        selectEl.addEventListener('change', function () {
          if (displayEl && selectEl.value) displayEl.textContent = selectEl.value;
          updateItemSelection(dropdownEl, selectEl.value);
        });

        dropdownEl.addEventListener('keydown', function (e) {
          var itemsArr = Array.from(items);
          var idx = itemsArr.indexOf(document.activeElement);
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            var next = itemsArr[idx + 1] || itemsArr[0];
            if (next) next.focus();
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            var prev = itemsArr[idx - 1] || itemsArr[itemsArr.length - 1];
            if (prev) prev.focus();
          }
        });
      }

      function updateItemSelection(dropdownEl, value) {
        if (!dropdownEl) return;
        var items = dropdownEl.querySelectorAll('.nbq-dropdown-item');
        items.forEach(function (item) {
          var isMatch = item.dataset.value === value;
          item.classList.toggle('is-selected', isMatch);
          item.setAttribute('aria-selected', String(isMatch));
        });
      }

      function closeAllCustomSelects(exceptDropdown) {
        var dropdowns = form.querySelectorAll('.nbq-select-dropdown');
        dropdowns.forEach(function (dd) {
          if (dd !== exceptDropdown) {
            dd.hidden = true;
            var trigger = dd.parentElement ? dd.parentElement.querySelector('.nbq-select-trigger') : null;
            if (trigger) trigger.setAttribute('aria-expanded', 'false');
          }
        });
      }

      document.addEventListener('click', function (e) {
        if (!e.target.closest('.nbq-custom-select-wrap')) {
          closeAllCustomSelects();
        }
      });

      setupCustomSelect($('btnOpenDestination'), $('dropdownDestination'), $('displayBookingDestination'), destination, 'err-destination');
      setupCustomSelect($('btnOpenTour'), $('dropdownTour'), $('displayBookingTour'), tour, 'err-tour');'''

assert js_wiring_needle in content, "js_wiring_needle not found"
content = content.replace(js_wiring_needle, js_wiring_replacement, 1)

with open(INDEX_PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print("Custom dropdown with borders applied successfully!")
