const ANTECEDENCIA_MINIMA_HORAS = 48;

function getBahiaNow() {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Bahia',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
  });
  const parts = formatter.formatToParts(now);
  const map = {};
  parts.forEach(p => { map[p.type] = p.value; });
  let hr = parseInt(map.hour, 10);
  if (hr === 24) hr = 0;
  return new Date(
    parseInt(map.year, 10),
    parseInt(map.month, 10) - 1,
    parseInt(map.day, 10),
    hr,
    parseInt(map.minute, 10),
    parseInt(map.second, 10)
  );
}

function toISODate(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function checkTrip(dateStr, timeStr) {
  const bahiaNow = getBahiaNow();
  const dp = dateStr.split('-');
  const tp = (timeStr || '12:00').split(':');
  const tripDate = new Date(
    parseInt(dp[0], 10),
    parseInt(dp[1], 10) - 1,
    parseInt(dp[2], 10),
    parseInt(tp[0], 10),
    parseInt(tp[1], 10),
    0
  );
  const diffHours = (tripDate.getTime() - bahiaNow.getTime()) / (1000 * 60 * 60);
  return {
    bahiaNow: bahiaNow.toISOString(),
    tripDate: tripDate.toISOString(),
    diffHours: diffHours.toFixed(2),
    valid: diffHours >= ANTECEDENCIA_MINIMA_HORAS
  };
}

const now = getBahiaNow();
console.log('Bahia Now:', now.toString());

const d0 = toISODate(now);
const d1 = toISODate(new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1));
const d2 = toISODate(new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2));
const d3 = toISODate(new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3));

console.log('Today (d0):', d0, checkTrip(d0, '15:00'));
console.log('Tomorrow (d1):', d1, checkTrip(d1, '15:00'));
console.log('D+2 early morning (d2 06:00):', d2, checkTrip(d2, '06:00'));
console.log('D+2 late afternoon (d2 20:00):', d2, checkTrip(d2, '20:00'));
console.log('D+3 (d3 15:00):', d3, checkTrip(d3, '15:00'));
