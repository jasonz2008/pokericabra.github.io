---
name: Jason Zhong — Games & creative tools
description: A restrained cinema-program frame for independent games and professional experience.
colors:
  bg: "#11181b"
  surface: "#1a2327"
  ink: "#f3f0e8"
  muted: "#b6bfbd"
  accent: "#dcca9f"
  line: "#354044"
  line-strong: "#6d787a"
  paper: "#edf1ed"
  paper-ink: "#192326"
  paper-muted: "#485956"
  paper-accent: "#735b2f"
  paper-line: "#c8d0c9"
  paper-line-strong: "#89988d"
typography:
  display:
    fontFamily: 'Manrope, "Segoe UI", sans-serif'
    fontSize: "clamp(46px,5.25vw,76px)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-.04em"
  headline:
    fontFamily: 'Manrope, "Segoe UI", sans-serif'
    fontSize: "54px"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-.04em"
  body:
    fontFamily: 'Manrope, "Segoe UI", sans-serif'
    fontSize: "16px"
    lineHeight: 1.65
  label:
    fontFamily: 'Manrope, "Segoe UI", sans-serif'
    fontSize: "14px"
    fontWeight: 650
rounded:
  compact: "6px"
  control: "8px"
  thumbnail: "10px"
  frame: "12px"
spacing:
  tight: "8px"
  control-gap: "12px"
  content-gap: "24px"
  group-gap: "32px"
  column-gap: "48px"
  section-gap: "72px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.bg}"
    rounded: "{rounded.control}"
    padding: "12px 18px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "12px 18px"
  button-paper-primary:
    backgroundColor: "{colors.paper-ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "12px 18px"
  media-tab:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.compact}"
    padding: "8px 16px"
  media-tab-selected:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.bg}"
    rounded: "{rounded.compact}"
    padding: "8px 16px"
  media-frame:
    rounded: "{rounded.frame}"
  project-thumbnail:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.thumbnail}"
---

# Design System: Jason Zhong — Games & creative tools

## Overview

**Creative North Star: "The game-showcase theater"**

Warm charcoal, ivory type and restrained brass controls form a quiet frame around the games' own artwork. Heavy Manrope headings give the portfolio a clear voice; complete screenshots and real gameplay carry the detail. The interface uses material changes, rules and selected states rather than decorative scenery.

This system governs `/`, `/resume.html`, and their shared `home.css`. The pale reading theme is part of this portfolio system. The independent `/drawply/` pages retain their cobalt-and-paper identity, documented in [docs/design/drawply.md](docs/design/drawply.md). Surface composition and behavior are recorded in [docs/design/portfolio.md](docs/design/portfolio.md).

**Key Characteristics:**

- Dark presentation surfaces and light reading surfaces.
- Self-hosted Manrope throughout, with compact heavy headings and relaxed body leading.
- Fine borders, modest rounded corners and clear selected states.
- Artwork, complete game interfaces and genuine footage remain distinct media.

## Colors

Brass provides the only principal accent; charcoal and green-tinted paper support presentation and reading respectively.

### Primary

- **Warm brass** (`accent`): primary gameplay action, selected media and project states, availability and the small brand dot.
- **Paper brass** (`paper-accent`): restrained emphasis within light reading surfaces.

### Neutral

- **Theater charcoal** (`bg`) and **raised charcoal** (`surface`): page ground and interactive thumbnail or hover surfaces.
- **Warm ivory** (`ink`) and **quiet gray** (`muted`): principal and secondary text on dark surfaces.
- **Charcoal rule** (`line`) and **control rule** (`line-strong`): section boundaries and interactive outlines.
- **Reading paper** (`paper`), **reading ink** (`paper-ink`) and **reading gray** (`paper-muted`): the tool introduction and résumé.
- **Paper rule** (`paper-line`) and **paper control rule** (`paper-line-strong`): light-surface boundaries and controls.

**The Local Theme Rule.** Controls inherit their surrounding theme: brass on charcoal, dark ink on paper. The fixed header and footer remain dark on the résumé.

## Typography

**Display and Body Font:** Self-hosted Manrope variable font, with Segoe UI and sans-serif fallbacks; weight range 200–800 and `font-display: swap`.

The hierarchy is steep but uses one family. Large headings use tight tracking and balanced wrapping; paragraphs retain generous leading. Body weight stays quieter than titles and controls.

### Hierarchy

- **Display:** The main project title uses the recorded display role. Long names receive a smaller responsive size; mobile wraps the complete name.
- **Headline:** Tool headings use the recorded headline role and become smaller at intermediate widths. The root résumé introduction uses a 32px heading with 1.2 leading; résumé-page section headings use a quieter 30px size.
- **Feature description:** 20px with 1.55 leading and a 39ch maximum measure on desktop; 18px on mobile.
- **Body:** The recorded body role supports résumé lists. Tool explanations use 17px; the résumé summary uses 18px.
- **Controls:** 15px, weight 750, line-height 1.4. Media labels use the recorded label role; project captions use 12px, weight 750.

**The Full Name Rule.** Wrap long project names and reduce display size before clipping or abbreviating them.

## Layout

The shared container is capped at 1280px. Side gutters grow fluidly from 24px to 80px; the responsive overrides use 32px at 1000px, 22px at 760px and 18px at 380px. The fixed header is 80px high, reducing to 68px on mobile; anchors account for its height.

Desktop uses unequal columns with generous gaps; tablet stacks the project presentation and keeps copy controls together where space permits. At 760px the tool and résumé layouts become single-column. Controls retain usable targets and wrap where needed. The portfolio's exact first-screen composition and seven-project rail are surface decisions, not requirements for every future page.

## Elevation & Depth

The system is flat at rest. Tonal changes and thin borders separate surfaces. The selected project uses an accent outline, not an ambient shadow. The video dialog earns depth through a darkened backdrop; its content remains a simple framed surface.

**The Media Leads Rule.** Depth belongs to the work and the active modal. Surrounding interface surfaces use restrained borders and tonal separation.

## Shapes

Compact corners belong to media tabs and icon controls, control corners to action buttons, and broader corners to thumbnails and media frames. Images clip to their enclosing frame. Complete artwork and game screenshots use contain sizing; small rail thumbnails crop to a consistent landscape ratio. Circles are limited to small status dots and the preview play control.

## Components

### Buttons

Primary actions use the local action color; secondary actions use transparent fill and a stronger outline. Both have a 48px minimum height and the recorded control padding. Hover changes tone and lifts by 1px on a fine pointer; press moves down by 1px. Focus draws an immediate 2px outline with 5px offset. Reduced motion removes travel.

### Navigation

A heavy wordmark pairs with restrained semibold destinations. The current destination and hover state use a thin brass underline. Mobile keeps direct navigation, reducing spacing; only the redundant Games link hides at the narrowest breakpoint. The skip link becomes visible on focus.

### Media tabs and frames

The selected media tab uses brass with charcoal text; inactive tabs use muted text and a quiet tonal hover. Tabs support arrow keys, Home and End. The frame preserves full source media; enlargement opens the selected original. A project-specific extra view is shown only when its source exists.

### Project thumbnails

Flat charcoal frames pair a cropped image with a short title band. Selection changes the border, outline and title band to brass. Hover raises the frame slightly and enlarges the image inside its clip. Only the active tab participates in sequential keyboard focus; arrow keys move between choices. Playback controls wait until the selected project's media finishes loading.

### Video dialog

A native modal dialog pairs a compact heading and close control with the real video, a contextual note when necessary, and a direct file link. Playback starts only after a visitor opens it. Closing pauses and unloads the video and returns focus to its trigger. Escape and backdrop dismissal retain native expectations.

### Annotation frame and résumé entries

The embedded Drawply workspace retains its own interface inside a white, lightly bordered frame. The parent follows trusted content-height messages and changes demo source at the mobile breakpoint. Résumé entries use typographic headings, metadata, lists and fine separators, with no decorative card grid.

The root résumé introduction uses a proper Résumé heading above supporting body text, not a small contextual label above display copy. Its body stays 20px with 1.55 leading and weight 500 at every breakpoint. A short experience phrase receives the existing word-highlight treatment. The HTML résumé and PDF remain two distinct links.

Motion comprises one entrance, short user-triggered project and media transitions, quiet hover feedback and a single résumé word-highlight passage. Respect reduced motion throughout. There is no timed project rotation.

## Do's and Don'ts

### Do:

- **Do** keep surrounding controls quieter than the artwork and footage.
- **Do** use the local dark or paper theme consistently, including visible keyboard focus.
- **Do** preserve complete screenshots and truthful distinctions between artwork, gameplay and development footage.
- **Do** keep long titles, direct media links, keyboard navigation and reduced-motion behavior usable.

### Don't:

- **Don't** apply this portfolio's charcoal-and-brass theme to the independent Drawply pages.
- **Don't** turn generated composition references into project names, screenshots, store claims or footage.
- **Don't** add automatic project rotation or competing decorative depth to the presentation.

Generated-comp inventions and the embedded demo's sample-page typography are deliberately not canonized; they are not the portfolio's product truth or design system.
