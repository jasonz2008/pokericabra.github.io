# Jason Zhong — Games & creative tools

Public portfolio at [pokericabra.com](https://pokericabra.com/).

- The homepage opens with seven selectable game projects. BackPack Pokeris shows its default main-page screenshot and In development status; the other six projects include gameplay videos. Its content source is the `portfolio-data` JSON in `index.html`.
- Pokericabra links to its [Steam listing](https://store.steampowered.com/app/4027440/Pokericabra/); Pokericabra Trainee links to [Google Play](https://play.google.com/store/apps/details?id=com.pokericabra.trainee). Development projects expose their media without inventing store destinations.
- Drawply follows the game showcase with a working annotation demo. Its independent site, installation guide and downloads remain under `/drawply/`.
- `/resume.html` provides the professional résumé and `/assets/Jason-Zhong-Resume.pdf` provides the public PDF. Keep private contact details and source personal documents out of public assets.

## Publishing

`.github/workflows/market-pages.yml` deploys on pushes to `main` and manual dispatch. It stages the named root HTML, CSS, JS, legal and configuration files, then copies **all of `assets/` and `drawply/`**. Anything added beneath those directories is public; documentation, approval references and development evidence belong outside them. `DESIGN.md`, `PRODUCT.md`, `.impeccable/` and `docs/` are not staged.

Game policies, data deletion, `app-ads.txt`, and `CNAME` remain in place. The market-data updater remains removed. Drawply source and licensing: [jasonz2008/drawply](https://github.com/jasonz2008/drawply).

The root design system lives in `DESIGN.md`; route-specific notes live in `docs/design/`. Media provenance and publishing boundaries are in `ASSETS.md`.
