(function () {
  'use strict';
  const root = document.documentElement;
  let mode = 'auto';
  try { mode = localStorage.getItem('color-theme') || 'auto'; } catch (_) {}
  if (!['auto', 'light', 'dark'].includes(mode)) mode = 'auto';
  function solarTimes(now) {
    const parts = new Intl.DateTimeFormat('en', {timeZone:'Asia/Shanghai',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(now);
    const date = Object.fromEntries(parts.map(p => [p.type, p.value]));
    const noon = new Date(date.year + '-' + date.month + '-' + date.day + 'T12:00:00+08:00');
    return window.SunCalc.getTimes(noon, 39.9042, 116.4074);
  }
  function apply() {
    const now = new Date();
    let light;
    let description = 'Auto follows sunrise and sunset in Beijing.';
    if (window.SunCalc) {
      const times = solarTimes(now);
      light = now >= times.sunrise && now < times.sunset;
      const format = new Intl.DateTimeFormat('en-GB', {timeZone:'Asia/Shanghai',hour:'2-digit',minute:'2-digit',hour12:false});
      description += ' Today: ' + format.format(times.sunrise) + '–' + format.format(times.sunset) + ' (Beijing time).';
    } else {
      const hour = Number(new Intl.DateTimeFormat('en-GB', {timeZone:'Asia/Shanghai',hour:'numeric',hourCycle:'h23'}).format(now));
      light = hour >= 7 && hour < 19;
    }
    root.dataset.theme = mode === 'auto' ? (light ? 'light' : 'dark') : mode;
    root.style.colorScheme = root.dataset.theme;
    const select = document.getElementById('theme-select');
    if (select) select.title = description;
  }
  apply();
  document.addEventListener('DOMContentLoaded', function () {
    const select = document.getElementById('theme-select');
    if (select) {
      select.value = mode;
      select.addEventListener('change', function () {
        mode = select.value;
        try { localStorage.setItem('color-theme', mode); } catch (_) {}
        apply();
      });
    }
    apply();
  });
  setInterval(apply, 30000);
  document.addEventListener('visibilitychange', apply);
})();
