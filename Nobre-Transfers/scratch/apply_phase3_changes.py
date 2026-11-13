import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

INDEX_PATH = r'C:\Users\Paralelo 17\.gemini\antigravity\scratch\paralelo17\Nobre-Transfers\index.html'

with open(INDEX_PATH, 'r', encoding='utf-8') as f:
    orig = f.read()

is_crlf = '\r\n' in orig
content = orig.replace('\r\n', '\n')

# ==============================================================================
# 1. CSS CHANGES
# ==============================================================================

# Target 1: Dropdown styling & border divider
old_dropdown_css = '''    .nbq-select-dropdown {
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

new_dropdown_css = '''    .nbq-select-dropdown {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      width: 100%;
      min-width: 260px;
      max-width: 380px;
      background: var(--q-surface);
      border: 1px solid var(--q-line-strong);
      border-radius: 10px;
      box-shadow: 0 12px 30px -4px rgba(20, 17, 15, 0.22), 0 4px 10px rgba(0, 0, 0, 0.06);
      z-index: 99999;
      max-height: none;
      overflow: visible;
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
      background: transparent;
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
      background: rgba(201, 164, 92, 0.16);
      color: var(--q-ink);
      outline: none;
    }
    .nbq-dropdown-item.is-selected {
      background: rgba(201, 164, 92, 0.22);
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
    }
    .nbq-time-slot.nbq-time-disabled,
    .nbq-time-slot[disabled] {
      opacity: 0.35;
      cursor: not-allowed;
      pointer-events: none;
      background: var(--q-surface-2);
      border-color: var(--q-line);
      color: var(--q-ph);
    }
    .nbq-notice-wa {
      color: var(--q-gold-ink);
      text-decoration: underline;
      font-weight: 700;
      transition: opacity 120ms ease;
    }
    .nbq-notice-wa:hover {
      opacity: 0.8;
    }'''

assert old_dropdown_css in content, "old_dropdown_css not found!"
content = content.replace(old_dropdown_css, new_dropdown_css, 1)
print("✔ 1. CSS Dropdown atualizado.")

# Target 2: Desktop 1024px position
old_desktop_pos = '''    @media (min-width: 1024px) {
      .nbq-wrap {
        margin-top: auto;
      }'''

new_desktop_pos = '''    @media (min-width: 1024px) {
      .nbq-wrap {
        margin-top: auto;
        margin-bottom: clamp(75px, 14vh, 160px);
      }'''

assert old_desktop_pos in content, "old_desktop_pos not found!"
content = content.replace(old_desktop_pos, new_desktop_pos, 1)
print("✔ 2. CSS Desktop position atualizado.")

# Target 3: Mobile dropdown sheet styling
old_mobile_dd = '''      .nbq-select-dropdown {
        left: 0;
        right: 0;
        width: 100%;
        max-width: 100%;
      }'''

new_mobile_dd = '''      .nbq-select-dropdown {
        left: 0;
        right: 0;
        width: 100%;
        max-width: 100%;
      }
      .nbq-select-dropdown.nbq-mobile-sheet {
        position: fixed !important;
        top: auto !important;
        bottom: 0 !important;
        left: 0 !important;
        right: 0 !important;
        width: 100% !important;
        max-width: 100% !important;
        border-radius: 16px 16px 0 0 !important;
        box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.45) !important;
        z-index: 100000 !important;
        background: var(--q-surface) !important;
      }'''

assert old_mobile_dd in content, "old_mobile_dd not found!"
content = content.replace(old_mobile_dd, new_mobile_dd, 1)
print("✔ 3. CSS Mobile sheet atualizado.")

# ==============================================================================
# 2. HTML DROPDOWN & SELECT DESTINATION OPTIONS (5 ONLY)
# ==============================================================================
old_dest_html = '''                <div class="nbq-select-dropdown" id="dropdownDestination" hidden role="listbox" aria-label="Opções de destino">
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
                </select>'''

new_dest_html = '''                <div class="nbq-select-dropdown" id="dropdownDestination" hidden role="listbox" aria-label="Opções de destino">
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
                </div>
                <select id="bookingDestination" name="destination" class="nbq-control nbq-hidden-input" required aria-describedby="err-destination" tabindex="-1">
                  <option value="" disabled selected>Para onde você vai?</option>
                  <option value="Trancoso">Trancoso</option>
                  <option value="Arraial d'Ajuda">Arraial d'Ajuda</option>
                  <option value="Caraíva">Caraíva</option>
                  <option value="Santo André">Santo André</option>
                  <option value="Praia do Espelho">Praia do Espelho</option>
                </select>'''

assert old_dest_html in content, "old_dest_html not found!"
content = content.replace(old_dest_html, new_dest_html, 1)
print("✔ 4. HTML Destinos atualizado (5 opções).")

# ==============================================================================
# 3. JAVASCRIPT: 48 HORAS DE ANTECEDÊNCIA, SELETORES E VALIDAÇÃO
# ==============================================================================
old_js_start = '''    (function initBookingForm() {
      var form = document.getElementById('nobreBookingForm');
      if (!form) return;
      var $ = function (id) { return document.getElementById(id); };

      var svcTransfer = $('svcTransfer'), svcTour = $('svcTour');
      var origin = $('bookingOrigin'), labelOrigin = $('labelOrigin');
      var destination = $('bookingDestination'), tour = $('bookingTour');
      var fieldDestination = $('fieldDestination'), fieldTour = $('fieldTour');
      var fieldTrip = $('fieldTrip');
      var oneWay = $('bookingOneWay'), roundTrip = $('bookingRoundTrip');
      var date = $('bookingDate'), time = $('bookingTime');
      var returnFields = $('returnFields');
      var returnDate = $('bookingReturnDate'), returnTime = $('bookingReturnTime');
      var paxCount = $('bookingPaxCount'), paxVehicle = $('paxVehicle');
      var hiddenPassengers = $('bookingPassengers');
      var summary = $('bookingErrorSummary');
      var liveRegion = $('nbqLive');
      var wrap = form.closest('.nbq-wrap') || document;
      var chipsGroup = wrap.querySelector('.nbq-chips');

      var today = localISODate(new Date());
      if (date) date.min = today;
      if (returnDate) returnDate.min = today;'''

new_js_start = '''    (function initBookingForm() {
      var form = document.getElementById('nobreBookingForm');
      if (!form) return;
      var $ = function (id) { return document.getElementById(id); };

      // Constante centralizada de antecedência mínima
      var ANTECEDENCIA_MINIMA_HORAS = 48;
      var WA_NUMBER = '5573998171117';
      var WA_MSG_48H = 'Reservas pelo site exigem no mínimo 48 horas de antecedência. Para viagens em menos tempo, <a href="https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent('Olá! Gostaria de uma cotação urgente de transfer (menos de 48h).') + '" target="_blank" rel="noopener noreferrer" class="nbq-notice-wa">fale com a gente pelo WhatsApp</a>.';

      function getBahiaNow() {
        var now = new Date();
        try {
          var formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: 'America/Bahia',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: false
          });
          var parts = formatter.formatToParts(now);
          var map = {};
          for (var i = 0; i < parts.length; i++) {
            map[parts[i].type] = parts[i].value;
          }
          var hr = parseInt(map.hour, 10);
          if (hr === 24) hr = 0;
          return new Date(
            parseInt(map.year, 10),
            parseInt(map.month, 10) - 1,
            parseInt(map.day, 10),
            hr,
            parseInt(map.minute, 10),
            parseInt(map.second, 10)
          );
        } catch (e) {
          var utc = now.getTime() + (now.getTimezoneOffset() * 60000);
          return new Date(utc - (3 * 3600000));
        }
      }

      function getTripDateTime(dStr, tStr) {
        if (!dStr) return null;
        var dp = dStr.split('-');
        if (dp.length !== 3) return null;
        var tp = (tStr || '12:00').split(':');
        var hr = parseInt(tp[0] || '12', 10);
        var min = parseInt(tp[1] || '0', 10);
        return new Date(parseInt(dp[0], 10), parseInt(dp[1], 10) - 1, parseInt(dp[2], 10), hr, min, 0);
      }

      function isTripAtLeast48HoursAhead(dStr, tStr) {
        var trip = getTripDateTime(dStr, tStr);
        if (!trip) return false;
        var bNow = getBahiaNow();
        var diffHours = (trip.getTime() - bNow.getTime()) / (1000 * 60 * 60);
        return diffHours >= ANTECEDENCIA_MINIMA_HORAS;
      }

      var bNow = getBahiaNow();
      var todayDate = new Date(bNow.getFullYear(), bNow.getMonth(), bNow.getDate());
      var today = localISODate(todayDate);
      var tomorrowDate = new Date(bNow.getFullYear(), bNow.getMonth(), bNow.getDate() + 1);
      var tomorrow = localISODate(tomorrowDate);
      var minDateObj = new Date(bNow.getFullYear(), bNow.getMonth(), bNow.getDate() + 2);
      var minSelectableDate = localISODate(minDateObj);

      var svcTransfer = $('svcTransfer'), svcTour = $('svcTour');
      var origin = $('bookingOrigin'), labelOrigin = $('labelOrigin');
      var destination = $('bookingDestination'), tour = $('bookingTour');
      var fieldDestination = $('fieldDestination'), fieldTour = $('fieldTour');
      var fieldTrip = $('fieldTrip');
      var oneWay = $('bookingOneWay'), roundTrip = $('bookingRoundTrip');
      var date = $('bookingDate'), time = $('bookingTime');
      var returnFields = $('returnFields');
      var returnDate = $('bookingReturnDate'), returnTime = $('bookingReturnTime');
      var paxCount = $('bookingPaxCount'), paxVehicle = $('paxVehicle');
      var hiddenPassengers = $('bookingPassengers');
      var summary = $('bookingErrorSummary');
      var liveRegion = $('nbqLive');
      var wrap = form.closest('.nbq-wrap') || document;
      var chipsGroup = wrap.querySelector('.nbq-chips');

      if (date) date.min = minSelectableDate;
      if (returnDate) returnDate.min = minSelectableDate;'''

assert old_js_start in content, "old_js_start not found!"
content = content.replace(old_js_start, new_js_start, 1)
print("✔ 5. JS 48h Constants & Bahia Time inicializados.")

# Target 4: Event listeners on date/time inputs
old_js_dt_listeners = '''      if (date && $('displayBookingDate')) {
        date.addEventListener('change', function () {
          updateDateDisplay(date, $('displayBookingDate'));
          if (returnDate) returnDate.min = date.value || today;
          clearError(date, 'err-date');
        });
        date.addEventListener('input', function () {
          updateDateDisplay(date, $('displayBookingDate'));
        });
      }
      if (returnDate && $('displayBookingReturnDate')) {
        returnDate.addEventListener('change', function () {
          updateDateDisplay(returnDate, $('displayBookingReturnDate'));
          clearError(returnDate, 'err-return');
        });
        returnDate.addEventListener('input', function () {
          updateDateDisplay(returnDate, $('displayBookingReturnDate'));
        });
      }
      if (time && $('displayBookingTime')) {
        time.addEventListener('change', function () {
          updateTimeDisplay(time, $('displayBookingTime'));
          clearError(time, 'err-time');
        });
        time.addEventListener('input', function () {
          updateTimeDisplay(time, $('displayBookingTime'));
        });
      }
      if (returnTime && $('displayBookingReturnTime')) {
        returnTime.addEventListener('change', function () {
          updateTimeDisplay(returnTime, $('displayBookingReturnTime'));
          clearError(returnDate, 'err-return');
        });
        returnTime.addEventListener('input', function () {
          updateTimeDisplay(returnTime, $('displayBookingReturnTime'));
        });
      }'''

new_js_dt_listeners = '''      if (date && $('displayBookingDate')) {
        date.addEventListener('change', function () {
          updateDateDisplay(date, $('displayBookingDate'));
          if (returnDate) returnDate.min = date.value || minSelectableDate;
          if (date.value && date.value < minSelectableDate) {
            setError(date, 'err-date', WA_MSG_48H, true);
          } else if (date.value && time && time.value && !isTripAtLeast48HoursAhead(date.value, time.value)) {
            setError(time, 'err-time', WA_MSG_48H, true);
          } else {
            clearError(date, 'err-date');
            if (time && time.value && isTripAtLeast48HoursAhead(date.value, time.value)) {
              clearError(time, 'err-time');
            }
          }
        });
        date.addEventListener('input', function () {
          updateDateDisplay(date, $('displayBookingDate'));
        });
      }
      if (returnDate && $('displayBookingReturnDate')) {
        returnDate.addEventListener('change', function () {
          updateDateDisplay(returnDate, $('displayBookingReturnDate'));
          if (returnDate.value && (returnDate.value < minSelectableDate || !isTripAtLeast48HoursAhead(returnDate.value, returnTime && returnTime.value ? returnTime.value : '12:00'))) {
            setError(returnDate, 'err-return', WA_MSG_48H, true);
          } else {
            clearError(returnDate, 'err-return');
          }
        });
        returnDate.addEventListener('input', function () {
          updateDateDisplay(returnDate, $('displayBookingReturnDate'));
        });
      }
      if (time && $('displayBookingTime')) {
        time.addEventListener('change', function () {
          updateTimeDisplay(time, $('displayBookingTime'));
          if (date && date.value && !isTripAtLeast48HoursAhead(date.value, time.value)) {
            setError(time, 'err-time', WA_MSG_48H, true);
          } else {
            clearError(time, 'err-time');
          }
        });
        time.addEventListener('input', function () {
          updateTimeDisplay(time, $('displayBookingTime'));
        });
      }
      if (returnTime && $('displayBookingReturnTime')) {
        returnTime.addEventListener('change', function () {
          updateTimeDisplay(returnTime, $('displayBookingReturnTime'));
          if (returnDate && returnDate.value && !isTripAtLeast48HoursAhead(returnDate.value, returnTime.value)) {
            setError(returnDate, 'err-return', WA_MSG_48H, true);
          } else {
            clearError(returnDate, 'err-return');
          }
        });
        returnTime.addEventListener('input', function () {
          updateTimeDisplay(returnTime, $('displayBookingReturnTime'));
        });
      }'''

assert old_js_dt_listeners in content, "old_js_dt_listeners not found!"
content = content.replace(old_js_dt_listeners, new_js_dt_listeners, 1)
print("✔ 6. JS Listeners de Data/Hora atualizados com validação 48h.")

# Target 5: renderCalendar logic with today & tomorrow disabled
old_cal_render = '''        var minDateStr = (activeDateInput === returnDate && date && date.value) ? date.value : today;
        var minParts = minDateStr.split('-');
        var minD = new Date(parseInt(minParts[0], 10), parseInt(minParts[1], 10) - 1, parseInt(minParts[2], 10));

        var isCurrentMonth = (calYear === minD.getFullYear() && calMonth <= minD.getMonth()) ||
                             (calYear < minD.getFullYear());
        if (btnCalPrev) btnCalPrev.disabled = isCurrentMonth;

        var firstDayIndex = new Date(calYear, calMonth, 1).getDay();
        var totalDays = new Date(calYear, calMonth + 1, 0).getDate();

        calDays.innerHTML = '';

        for (var i = 0; i < firstDayIndex; i++) {
          var empty = document.createElement('div');
          empty.className = 'nbq-cal-empty';
          empty.setAttribute('aria-hidden', 'true');
          calDays.appendChild(empty);
        }

        var selectedVal = activeDateInput ? activeDateInput.value : '';

        for (var day = 1; day <= totalDays; day++) {
          var dObj = new Date(calYear, calMonth, day);
          var dIso = localISODate(dObj);

          var btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'nbq-cal-day';
          btn.textContent = day;
          btn.dataset.date = dIso;

          if (dIso < minDateStr) {
            btn.classList.add('nbq-cal-disabled');
            btn.disabled = true;
            btn.setAttribute('aria-disabled', 'true');
          } else {
            if (dIso === today) btn.classList.add('nbq-cal-today');
            if (dIso === selectedVal) btn.classList.add('nbq-cal-selected');

            btn.addEventListener('click', function (e) {
              var chosen = e.currentTarget.dataset.date;
              if (activeDateInput) {
                activeDateInput.value = chosen;
                activeDateInput.dispatchEvent(new Event('change', { bubbles: true }));
                activeDateInput.dispatchEvent(new Event('input', { bubbles: true }));
              }
              closeCalendar();
            });
          }
          calDays.appendChild(btn);
        }'''

new_cal_render = '''        var minDateStr = (activeDateInput === returnDate && date && date.value) ? date.value : minSelectableDate;
        var minParts = minDateStr.split('-');
        var minD = new Date(parseInt(minParts[0], 10), parseInt(minParts[1], 10) - 1, parseInt(minParts[2], 10));

        var isCurrentMonth = (calYear === minD.getFullYear() && calMonth <= minD.getMonth()) ||
                             (calYear < minD.getFullYear());
        if (btnCalPrev) btnCalPrev.disabled = isCurrentMonth;

        var firstDayIndex = new Date(calYear, calMonth, 1).getDay();
        var totalDays = new Date(calYear, calMonth + 1, 0).getDate();

        calDays.innerHTML = '';

        for (var i = 0; i < firstDayIndex; i++) {
          var empty = document.createElement('div');
          empty.className = 'nbq-cal-empty';
          empty.setAttribute('aria-hidden', 'true');
          calDays.appendChild(empty);
        }

        var selectedVal = activeDateInput ? activeDateInput.value : '';

        for (var day = 1; day <= totalDays; day++) {
          var dObj = new Date(calYear, calMonth, day);
          var dIso = localISODate(dObj);

          var btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'nbq-cal-day';
          btn.textContent = day;
          btn.dataset.date = dIso;

          if (dIso < minDateStr) {
            btn.classList.add('nbq-cal-disabled');
            btn.disabled = true;
            btn.setAttribute('aria-disabled', 'true');
            if (dIso === today) {
              btn.classList.add('nbq-cal-today');
              btn.title = 'Hoje (bloqueado: mínimo 48h de antecedência)';
            } else if (dIso === tomorrow) {
              btn.title = 'Amanhã (bloqueado: mínimo 48h de antecedência)';
            }
          } else {
            if (dIso === today) btn.classList.add('nbq-cal-today');
            if (dIso === selectedVal) btn.classList.add('nbq-cal-selected');

            btn.addEventListener('click', function (e) {
              var chosen = e.currentTarget.dataset.date;
              if (activeDateInput) {
                activeDateInput.value = chosen;
                activeDateInput.dispatchEvent(new Event('change', { bubbles: true }));
                activeDateInput.dispatchEvent(new Event('input', { bubbles: true }));
              }
              closeCalendar();
            });
          }
          calDays.appendChild(btn);
        }'''

assert old_cal_render in content, "old_cal_render not found!"
content = content.replace(old_cal_render, new_cal_render, 1)
print("✔ 7. JS renderCalendar atualizado (hoje e amanhã desabilitados).")

# Target 6: openCalendar default date
old_cal_open = '''      function openCalendar(targetInput, displayEl) {
        activeDateInput = targetInput;
        activeDateDisplay = displayEl;
        var cur = targetInput && targetInput.value ? targetInput.value : today;'''

new_cal_open = '''      function openCalendar(targetInput, displayEl) {
        activeDateInput = targetInput;
        activeDateDisplay = displayEl;
        var cur = targetInput && targetInput.value ? targetInput.value : minSelectableDate;'''

assert old_cal_open in content, "old_cal_open not found!"
content = content.replace(old_cal_open, new_cal_open, 1)
print("✔ 8. JS openCalendar atualizado (abre na primeira data selecionável).")

# Target 7: populateTimeGrid logic disabling times < 48h
old_time_grid = '''        var curVal = activeTimeInput ? activeTimeInput.value : '';
        times.forEach(function (t) {
          var b = document.createElement('button');
          b.type = 'button';
          b.className = 'nbq-time-slot' + (t === curVal ? ' nbq-time-selected' : '');
          b.textContent = t;
          b.dataset.time = t;
          b.addEventListener('click', function () {
            if (activeTimeInput) {
              activeTimeInput.value = t;
              activeTimeInput.dispatchEvent(new Event('change', { bubbles: true }));
              activeTimeInput.dispatchEvent(new Event('input', { bubbles: true }));
            }
            closeTimeSheet();
          });
          grid.appendChild(b);
        });'''

new_time_grid = '''        var curVal = activeTimeInput ? activeTimeInput.value : '';
        var targetDateVal = (activeTimeInput === returnTime ? (returnDate ? returnDate.value : '') : (date ? date.value : ''));

        times.forEach(function (t) {
          var b = document.createElement('button');
          b.type = 'button';
          b.className = 'nbq-time-slot' + (t === curVal ? ' nbq-time-selected' : '');
          b.textContent = t;
          b.dataset.time = t;

          // Se a data de viagem estiver definida, bloqueia horários com menos de 48h
          if (targetDateVal && !isTripAtLeast48HoursAhead(targetDateVal, t)) {
            b.classList.add('nbq-time-disabled');
            b.disabled = true;
            b.setAttribute('aria-disabled', 'true');
            b.title = 'Mínimo de 48h de antecedência';
          } else {
            b.addEventListener('click', function () {
              if (activeTimeInput) {
                activeTimeInput.value = t;
                activeTimeInput.dispatchEvent(new Event('change', { bubbles: true }));
                activeTimeInput.dispatchEvent(new Event('input', { bubbles: true }));
              }
              closeTimeSheet();
            });
          }
          grid.appendChild(b);
        });'''

assert old_time_grid in content, "old_time_grid not found!"
content = content.replace(old_time_grid, new_time_grid, 1)
print("✔ 9. JS populateTimeGrid atualizado (bloqueia horários < 48h).")

# Target 8: btnApplyCustomTime check
old_apply_time = '''      if ($('btnApplyCustomTime')) {
        $('btnApplyCustomTime').addEventListener('click', function () {
          var customIn = $('nbqCustomTimeInput');
          if (customIn && customIn.value && activeTimeInput) {
            activeTimeInput.value = customIn.value;
            activeTimeInput.dispatchEvent(new Event('change', { bubbles: true }));
            activeTimeInput.dispatchEvent(new Event('input', { bubbles: true }));
            closeTimeSheet();
          }
        });
      }'''

new_apply_time = '''      if ($('btnApplyCustomTime')) {
        $('btnApplyCustomTime').addEventListener('click', function () {
          var customIn = $('nbqCustomTimeInput');
          if (customIn && customIn.value && activeTimeInput) {
            var targetDateVal = (activeTimeInput === returnTime ? (returnDate ? returnDate.value : '') : (date ? date.value : ''));
            if (targetDateVal && !isTripAtLeast48HoursAhead(targetDateVal, customIn.value)) {
              if (summary) {
                summary.innerHTML = WA_MSG_48H;
                summary.hidden = false;
              }
              closeTimeSheet();
              if (activeTimeInput === returnTime && returnDate) {
                setError(returnDate, 'err-return', WA_MSG_48H, true);
              } else if (time) {
                setError(time, 'err-time', WA_MSG_48H, true);
              }
              return;
            }
            activeTimeInput.value = customIn.value;
            activeTimeInput.dispatchEvent(new Event('change', { bubbles: true }));
            activeTimeInput.dispatchEvent(new Event('input', { bubbles: true }));
            closeTimeSheet();
          }
        });
      }'''

assert old_apply_time in content, "old_apply_time not found!"
content = content.replace(old_apply_time, new_apply_time, 1)
print("✔ 10. JS btnApplyCustomTime atualizado.")

# Target 9: date change listener for returnDate
old_date_chg = '''      if (date) {
        date.addEventListener('change', function () {
          if (returnDate) returnDate.min = date.value || today;
        });
      }'''

new_date_chg = '''      if (date) {
        date.addEventListener('change', function () {
          if (returnDate) returnDate.min = date.value || minSelectableDate;
        });
      }'''

assert old_date_chg in content, "old_date_chg not found!"
content = content.replace(old_date_chg, new_date_chg, 1)
print("✔ 11. JS date change listener atualizado.")

# Target 10: setupCustomSelect (mobile sheet detection & Escape handling)
old_custom_sel = '''      function setupCustomSelect(triggerBtn, dropdownEl, displayEl, selectEl, errId) {
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
      }'''

new_custom_sel = '''      function setupCustomSelect(triggerBtn, dropdownEl, displayEl, selectEl, errId) {
        if (!triggerBtn || !dropdownEl || !selectEl) return;

        function openDropdown() {
          closeAllCustomSelects(dropdownEl);
          dropdownEl.hidden = false;
          triggerBtn.setAttribute('aria-expanded', 'true');

          if (window.innerWidth <= 767) {
            var rect = triggerBtn.getBoundingClientRect();
            var ddHeight = dropdownEl.scrollHeight || 225;
            var spaceBelow = window.innerHeight - rect.bottom;
            if (spaceBelow < ddHeight + 16) {
              dropdownEl.classList.add('nbq-mobile-sheet');
            } else {
              dropdownEl.classList.remove('nbq-mobile-sheet');
            }
          } else {
            dropdownEl.classList.remove('nbq-mobile-sheet');
          }

          var selectedItem = dropdownEl.querySelector('.nbq-dropdown-item.is-selected');
          if (selectedItem) selectedItem.focus();
        }

        function closeDropdown() {
          dropdownEl.hidden = true;
          dropdownEl.classList.remove('nbq-mobile-sheet');
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
          } else if (e.key === 'Escape') {
            e.preventDefault();
            closeDropdown();
            triggerBtn.focus();
          }
        });
      }'''

assert old_custom_sel in content, "old_custom_sel not found!"
content = content.replace(old_custom_sel, new_custom_sel, 1)
print("✔ 12. JS setupCustomSelect atualizado (Escape e mobile panel).")

# Target 11: setError with asHtml support
old_set_error = '''      function setError(input, errId, message) {
        var err = $(errId);
        if (input) {
          input.setAttribute('aria-invalid', 'true');
          var field = input.closest('.nbq-field') || input.closest('.booking-field');
          if (field) field.classList.add('has-error');
        }
        if (err) { err.textContent = message; err.hidden = false; }
      }'''

new_set_error = '''      function setError(input, errId, message, asHtml) {
        var err = $(errId);
        if (input) {
          input.setAttribute('aria-invalid', 'true');
          var field = input.closest('.nbq-field') || input.closest('.booking-field');
          if (field) field.classList.add('has-error');
        }
        if (err) {
          if (asHtml) {
            err.innerHTML = message;
          } else {
            err.textContent = message;
          }
          err.hidden = false;
        }
      }'''

assert old_set_error in content, "old_set_error not found!"
content = content.replace(old_set_error, new_set_error, 1)
print("✔ 13. JS setError com suporte a asHtml atualizado.")

# Target 12: validate() function & submit handler
old_validate_submit = '''      function validate() {
        var errors = [];
        clearError(origin, 'err-origin');

        var isTour = svcTour && svcTour.checked;
        if (isTour) {
          if (!tour || !tour.value) {
            setError(tour, 'err-tour', 'Escolha o roteiro do passeio.');
            errors.push(tour);
          } else {
            clearError(tour, 'err-tour');
          }
        } else {
          if (!destination || !destination.value) {
            setError(destination, 'err-destination', 'Escolha o destino.');
            errors.push(destination);
          } else if (!checkSameRoute()) {
            errors.push(destination);
          } else {
            clearError(destination, 'err-destination');
          }
        }

        if (!date || !date.value || date.value < today) {
          setError(date, 'err-date', 'Informe a data da viagem.');
          errors.push(date);
        } else {
          clearError(date, 'err-date');
        }

        if (!time || !time.value) {
          setError(time, 'err-time', 'Informe o horário.');
          errors.push(time);
        } else {
          clearError(time, 'err-time');
        }

        if (roundTrip && roundTrip.checked) {
          var badReturn = !returnDate.value || !returnTime.value ||
            (returnDate.value + 'T' + returnTime.value) <= (date.value + 'T' + (time.value || '00:00'));
          if (badReturn) {
            var target = !returnDate.value ? returnDate : returnTime;
            setError(returnDate, 'err-return', 'Informe data e horário da volta (depois da ida).');
            errors.push(target.value ? returnDate : target);
          } else {
            clearError(returnDate, 'err-return');
          }
        }

        return errors;
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var errors = validate();
        if (errors.length) {
          summary.textContent = errors.length === 1
            ? 'Falta 1 informação para continuar.'
            : 'Faltam ' + errors.length + ' informações para continuar.';
          summary.hidden = false;
          if (errors[0] === date && $('btnOpenDatePicker')) {
            $('btnOpenDatePicker').focus();
          } else if (errors[0] === time && $('btnOpenTimePicker')) {
            $('btnOpenTimePicker').focus();
          } else {
            errors[0].focus();
          }
          return;
        }

        summary.hidden = true;
        summary.textContent = '';'''

new_validate_submit = '''      function validate() {
        var errors = [];
        var under48hError = false;
        clearError(origin, 'err-origin');

        var isTour = svcTour && svcTour.checked;
        if (isTour) {
          if (!tour || !tour.value) {
            setError(tour, 'err-tour', 'Escolha o roteiro do passeio.');
            errors.push(tour);
          } else {
            clearError(tour, 'err-tour');
          }
        } else {
          if (!destination || !destination.value) {
            setError(destination, 'err-destination', 'Escolha o destino.');
            errors.push(destination);
          } else if (!checkSameRoute()) {
            errors.push(destination);
          } else {
            clearError(destination, 'err-destination');
          }
        }

        // Validação da data da viagem (mínimo 48h de antecedência)
        if (!date || !date.value) {
          setError(date, 'err-date', 'Informe a data da viagem.');
          errors.push(date);
        } else if (date.value < minSelectableDate) {
          setError(date, 'err-date', WA_MSG_48H, true);
          errors.push(date);
          under48hError = true;
        } else {
          clearError(date, 'err-date');
        }

        // Validação do horário (mínimo 48h a partir do momento atual na Bahia)
        if (!time || !time.value) {
          setError(time, 'err-time', 'Informe o horário.');
          errors.push(time);
        } else if (date && date.value && !isTripAtLeast48HoursAhead(date.value, time.value)) {
          setError(time, 'err-time', WA_MSG_48H, true);
          errors.push(time);
          under48hError = true;
        } else {
          clearError(time, 'err-time');
        }

        // Validação da volta
        if (roundTrip && roundTrip.checked) {
          if (!returnDate || !returnDate.value) {
            setError(returnDate, 'err-return', 'Informe a data da volta.');
            errors.push(returnDate);
          } else if (returnDate.value < minSelectableDate) {
            setError(returnDate, 'err-return', WA_MSG_48H, true);
            errors.push(returnDate);
            under48hError = true;
          } else if (!returnTime || !returnTime.value) {
            setError(returnDate, 'err-return', 'Informe o horário da volta.');
            errors.push(returnTime);
          } else {
            var depStr = (date.value || '') + 'T' + (time.value || '00:00');
            var retStr = returnDate.value + 'T' + returnTime.value;
            if (retStr <= depStr) {
              setError(returnDate, 'err-return', 'Data e horário da volta devem ser posteriores à ida.');
              errors.push(returnDate);
            } else if (!isTripAtLeast48HoursAhead(returnDate.value, returnTime.value)) {
              setError(returnDate, 'err-return', WA_MSG_48H, true);
              errors.push(returnDate);
              under48hError = true;
            } else {
              clearError(returnDate, 'err-return');
            }
          }
        }

        return { errors: errors, under48h: under48hError };
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var res = validate();
        var errors = res.errors;
        if (errors.length) {
          if (res.under48h) {
            summary.innerHTML = WA_MSG_48H;
          } else {
            summary.textContent = errors.length === 1
              ? 'Falta 1 informação para continuar.'
              : 'Faltam ' + errors.length + ' informações para continuar.';
          }
          summary.hidden = false;
          if (errors[0] === date && $('btnOpenDatePicker')) {
            $('btnOpenDatePicker').focus();
          } else if (errors[0] === time && $('btnOpenTimePicker')) {
            $('btnOpenTimePicker').focus();
          } else {
            errors[0].focus();
          }
          return;
        }

        summary.hidden = true;
        summary.textContent = '';'''

assert old_validate_submit in content, "old_validate_submit not found!"
content = content.replace(old_validate_submit, new_validate_submit, 1)
print("✔ 14. JS validate e submit handler atualizados com regra de 48h.")

# Restore CRLF if file was CRLF
if is_crlf:
    content = content.replace('\n', '\r\n')

with open(INDEX_PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print("🎉 SUCESSO: Todas as alterações foram gravadas em index.html com perfeição!")
