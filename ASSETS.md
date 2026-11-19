# Public portfolio media

The Pages workflow copies the complete `assets/` and `drawply/` trees. These are publication directories; keep private documents, raw source captures and internal evidence elsewhere.

| Location | Public use |
| --- | --- |
| `assets/keyart/` | Seven selected project key-art images, distinct from gameplay evidence. |
| `assets/projects/` | Selected real interfaces and gameplay stills; Trainee also includes its main menu. Fore of the Dead's concept image remains explicitly distinguishable from its gameplay still. |
| `assets/thumbnails/` | Landscape WebP crops for the seven-project selector. |
| `assets/videos/` | Six actual project recordings, played on request through the native video dialog. BackPack Pokeris has no published video. |
| `assets/Jason-Zhong-Resume.pdf` | Public professional résumé with private contact details omitted. |
| `drawply/assets/` | The preserved independent tool's imagery, mark and self-hosted Manrope font. |

The six video filenames are `pokericabra.mp4`, `pokericabra-trainee.mp4`, `indie-game-dev-clicker.mp4`, `moba-auto-battler.mp4`, `one-more-game.mp4`, and `fore-of-the-dead.mp4`. Captions, durations, development caveats and matching screenshots are maintained in `index.html`'s `portfolio-data` JSON.

Fore of the Dead uses the supplied `fore_of_the_dead_siege_small.mp4` (42 seconds), and Indie Game Dev Clicker Inc. uses the supplied `indie-game-dev-clicker-promo-64s.mp4`. Both retain their existing audio and are copied without transcoding. MOBA Auto Battler preserves its original H.264 stream and adds music using the existing Pokericabra map BGM asset `Sound/Faded Polaroids.mp3`; its music mix is approximately -18 LUFS with a short final fade. The standalone track is not published. Updated video URLs carry content versions to refresh cached playback.

Pokericabra PC uses the approved edited gameplay trailer, not an uninterrupted session recording. BackPack Pokeris is marked In development and displays only its genuine default Dew Meadow main-page screenshot; video actions and image-switching tabs are hidden. MOBA Auto Battler and One More Game are marked as work in progress. Fore of the Dead pairs visual-direction artwork with supplied siege gameplay. Never substitute generated mock gameplay for these sources.

Pokericabra Trainee uses the exact requested `pokericabra-v1.31-trailer-en-30s-with-music-1920x1080.mp4`, copied byte-for-byte from the local v1.31 marketing export. It includes a verified non-silent AAC music track. Its URL has a content version to refresh cached playback. Raw recordings and abandoned Backpack video edits stay outside the public asset tree.

The approved composition reference and its approval metadata remain under `.impeccable/mocks/`, outside deployment. Its invented project names, screens and claims are visual-reference material only. Do not copy them into public content.
