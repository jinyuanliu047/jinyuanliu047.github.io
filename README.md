# Jinyuan Liu’s website

A buildless academic website for GitHub Pages. No npm packages or build step are required.

## Edit

- `index.html`: biography, research interests, education, contact.
- `research/index.html`: working papers and work in progress.
- `assets/style.css`: design and responsive light/dark themes.
- `assets/theme.js`: theme selection, saved manual preference, and automatic sunrise/sunset switching for Beijing (39.9042° N, 116.4074° E).
- `assets/jinyuan-liu.jpg`: portrait reused from the previous public website.

Preview with `python3 -m http.server 8765`. Commit and push to `main` to publish through GitHub Pages.

Automatic mode computes each day’s sunrise and sunset locally with SunCalc. It does not request visitor location or contact an external API. Manual Light/Dark choices persist on that browser. Select Auto to restore solar switching.

Libertinus Serif is served from this repository under the SIL Open Font License (`assets/fonts/OFL.txt`). SunCalc is distributed under its BSD license (`assets/vendor/SUNCALC-LICENSE`).

Original public content was migrated from https://sites.google.com/view/jinyuan-liu/ on 2026-10-16. The original Google Site remains available separately. The biography and research interests were updated at the owner’s request.

The Chinese name uses a self-hosted FandolKai subset under GPL with the font exception. See `assets/fonts/StandardKai-COPYING` and `assets/fonts/StandardKai-README`.
