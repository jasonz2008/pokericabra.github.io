# Portfolio surfaces

## Root `/`

Mode: **Experience**. Let visitors inspect Jason Zhong's actual games before reading the tool or professional background.

The authorized direction is the split game-showcase theater (seed `491b0d7a`, approved reference `.impeccable/mocks/split-theater.png`; approval metadata sits beside it). The implementation replaces generated reference content with the seven real projects in the `portfolio-data` JSON inside `index.html`.

Desktop pairs large project copy and gameplay preview on the left with artwork on the right, below the fixed brand navigation. Seven thumbnail tabs sit below. The first project is Pokericabra; the URL fragment can select any project. Selection is visitor-controlled. Tablet stacks the main presentation; mobile uses a horizontally scrollable thumbnail rail. Short desktop viewports hide the redundant small gameplay preview while keeping the main action.

Artwork and Gameplay tabs distinguish key art from a real screenshot. Pokericabra Trainee also has a Menu view. The Watch gameplay action opens the selected local video in a native dialog; playback controls wait during a pending project change, and store actions appear only where a public store destination exists. Development notes remain attached to the corresponding video. The Clicker trailer explicitly identifies earlier footage; Fore of the Dead distinguishes visual-direction artwork from actual gameplay. The approved Pokericabra PC video is an edited gameplay trailer rather than an uninterrupted session recording.

The next paper section introduces Drawply with a working, sandboxed annotation demo and links to its independent site. A proper Résumé heading (32px, 1.2 leading) precedes supporting body copy (20px, 1.55 leading, weight 500 at all breakpoints): “A project and product manager with 7+ years of experience in digital products and research.” The short experience phrase retains the word-highlight treatment. Two separate links lead to the complete HTML résumé and downloadable professional PDF. Footer policy links stay grouped by product. The no-script section exposes all seven video and screenshot links.

## `/resume.html`

Mode: **Read**. Present professional experience, skills and education in the portfolio's paper theme, retaining the dark shared header and footer.

Desktop pairs experience with a narrower skills and education column; mobile preserves reading order in one column. The introduction offers the approved PDF and a route back to the games. Public résumé content omits private contact details. Preserve supplied career claims rather than adding inferred achievements.

## Boundaries

The root portfolio system is recorded in `DESIGN.md`; `/drawply/` retains its own system in `docs/design/drawply.md`. Game legal pages and the embedded demo's sample content do not inherit this redesign automatically. Documentation is source-only and excluded from the Pages staging list.
