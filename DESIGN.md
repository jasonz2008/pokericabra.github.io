---
name: Jason Zhong — Visual Product Portfolio
description: A white and silver portfolio with flat navigation, a dark teal AI workspace and a piano-black résumé.
colors:
  canvas: "#f5f5f7"
  surface: "#fff"
  ink: "#1d1d1f"
  muted: "#6e6e73"
  blue: "#0071e3"
  line: "#e5e5ea"
  positive: "#18734b"
  negative: "#b33e4e"
  series-blue: "#3975ed"
  series-violet: "#a16ae8"
  series-gold: "#d69635"
  piano-black: "#09090b"
  black-surface: "#111114"
  black-ink: "#eeeef2"
  black-link: "#7cb8ff"
  language-green: "#193e35"
  sector-canvas: "#142c35"
  sector-panel: "#1b353f"
  sector-muted: "#adc2c9"
  sector-accent: "#58d9bd"
  sector-line: "#36505a"
typography:
  display:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang TC', 'Microsoft JhengHei', sans-serif"
    fontSize: "clamp(40px, 4.3vw, 64px)"
    fontWeight: 700
    lineHeight: 1.14
    letterSpacing: "-.04em"
  headline:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang TC', 'Microsoft JhengHei', sans-serif"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 1.14
    letterSpacing: "-.04em"
  title:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang TC', 'Microsoft JhengHei', sans-serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.14
    letterSpacing: "-.035em"
  panel-heading:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang TC', 'Microsoft JhengHei', sans-serif"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.14
    letterSpacing: "-.035em"
  body:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang TC', 'Microsoft JhengHei', sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang TC', 'Microsoft JhengHei', sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  inset: "5px"
  control: "8px"
  image: "14px"
  compact-panel: "15px"
  panel: "20px"
spacing:
  tight: "8px"
  compact: "12px"
  inset: "16px"
  regular: "20px"
  grid: "22px"
  roomy: "24px"
  panel-inset: "26px"
  section-inset: "30px"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.surface}"
    rounded: "{rounded.control}"
    padding: "11px 19px"
  button-primary-hover:
    backgroundColor: "#0767c7"
  button-soft:
    backgroundColor: "#f0f1f5"
    textColor: "{colors.ink}"
    rounded: "7px"
    padding: "9px 14px"
  button-soft-hover:
    backgroundColor: "#e4e9f2"
  button-link:
    textColor: "{colors.blue}"
    padding: "8px 0"
  field:
    backgroundColor: "#fbfbfd"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "11px 13px"
  segment:
    textColor: "{colors.ink}"
    rounded: "{rounded.inset}"
    padding: "8px 16px"
  segment-selected:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
  project-tab:
    backgroundColor: "transparent"
    textColor: "#555964"
    typography: "{typography.label}"
    rounded: "12px"
    padding: "17px 14px 16px"
  project-tab-selected:
    backgroundColor: "#e5edf8"
    textColor: "#005fc4"
  project-tab-dark-selected:
    backgroundColor: "#252e3c"
    textColor: "#a9cfff"
  language-selected:
    backgroundColor: "{colors.language-green}"
    textColor: "{colors.surface}"
    rounded: "6px"
    padding: "8px 6px"
  sector-panel:
    backgroundColor: "{colors.sector-panel}"
    textColor: "#edf5f7"
    rounded: "10px"
    padding: "23px 22px 15px"
  resume-spec-row:
    textColor: "{colors.black-ink}"
    padding: "22px 0"
  ai-activity:
    textColor: "{colors.canvas}"
    rounded: "24px"
    padding: "40px"
  status:
    backgroundColor: "#edf3f0"
    textColor: "#496b59"
    rounded: "{rounded.inset}"
    padding: "5px 9px"
  status-flagged:
    backgroundColor: "#fff2de"
    textColor: "#8b6021"
  panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "{spacing.panel-inset}"
---

# Design System: Jason Zhong — Visual Product Portfolio

## Overview

**Creative North Star: "Interfaces First"**

Interfaces lead. A white and cool-silver frame, near-black Manrope and blue actions give real screens room to explain the work. Copy stays short, with generous images and restrained decoration, following the user's Apple reference.

The same visual materials support a spacious project gallery and a denser Market Lens workspace. A reference-inspired dark teal AI dashboard adds compact KPI and chart panels within the light shell. The résumé uses piano-black surfaces, pale Manrope and a visible silver rim around Codex totals and tools. This system belongs to this standalone portfolio directory; imagery retains each project's own art direction, and these rules do not govern the Pokericabra game.

Four top tabs read Market Lens (default), Released Mobile App, Current Project and Résumé & AI. The latest explicit instruction replaces silver-rim tab depth with flat controls in both themes. A green bordered language pill, the teal AI workspace and the retained silver Codex enclosure are intentional, scoped additions to the white/silver direction.

**Key Characteristics:**

- White and cool-silver surfaces with near-black type and blue actions.
- Large, aligned product imagery with concise supporting copy.
- A local sans-serif family and tabular financial numerals.
- Soft rectangles, fine dividers and explicit selected states.
- Flat project navigation, a sliding green language indicator and a piano-black résumé with specification rows.
- A dark teal AI workspace with prominent sector identity and compact, connected data views.

## Colors

Neutral surfaces carry the portfolio composition; blue identifies actions. Product imagery and the scoped dark teal AI workspace provide the wider colour range.

### Primary

- **Action Blue** (`blue`): links, primary buttons, checked inputs and active Market Lens navigation.
- **Language Green** (`language-green`): the language selector's persistent sliding indicator and inactive light-theme label colour.

### Secondary

- **Series Blue**, **Series Violet** and **Series Gold**: consistent index identities across sparklines, comparison charts, legends and benchmark bars.
- **Positive Green** and **Negative Rose**: signed returns and financial movement in the light workspace.
- **Sector Mint** (`sector-accent`): AI heading emphasis, basket line and chart marks; labelled segment colours remain consistent across the donut, selected company chart and legend.
- Threshold chips use a pale green calm state and a pale amber attention state, with darker readable text recorded in the component tokens.

### Neutral

- **White** (`surface`): the portfolio page and working cards.
- **Cool Silver** (`canvas`): the identity bar, footer, gallery support surface and Market Lens canvas.
- **Near Black** (`ink`): primary type, project selection and structural icon strokes.
- **Secondary Gray** (`muted`): supporting text and inactive navigation.
- **Silver Divider** (`line`): quiet table, footer and record separators.
- **Piano Black** (`piano-black`) and **Black Surface** (`black-surface`): the résumé page canvas and its header/footer surfaces.
- **Pale Résumé Ink** (`black-ink`) and **Black-surface Link Blue** (`black-link`): résumé content and actions with clear contrast against black.
- **Sector Teal** (`sector-canvas`), **Sector Panel** (`sector-panel`), **Sector Supporting Text** (`sector-muted`) and **Sector Divider** (`sector-line`): the AI dashboard's nested analytical surface, repeatable chart panels, secondary labels and separators.

**The Neutral Frame Rule.** Keep the surrounding portfolio white/silver; contain the requested dark teal palette within the AI dashboard and the green accent within the language selector.

**The Whole-page Finish Rule.** Selecting Résumé & AI changes the page, header, footer and image viewer together; preserve flat navigation, pale readable content and the silver Codex enclosure throughout the black finish.

**The Meaning Beside Colour Rule.** Pair financial colour with a signed value, index name or state label. Selection also has an underline, outline or pressed state.

## Typography

**Display and body font:** locally served variable Manrope, with the platform and Traditional Chinese fallbacks recorded in the frontmatter. There is no separate display or monospace face. Financial totals, percentages and table values use tabular numerals.

The hierarchy moves from large project display headings to workspace headlines, section titles, panel headings and regular body text. Headings use tight tracking and balanced wrapping. Supporting project copy uses short measures, typically 31–39 characters; explanatory application paragraphs cap around 48–65 characters.

The résumé keeps Manrope: its display uses clamp(52px, 6.5vw, 84px) at weight 650, section headings use 32px at 600, and specification rows pair 14px labels with 20px values and 14px notes. These component roles extend the existing hierarchy; they do not replace the shared body role.

The AI SECTOR / AI 產業 heading is the dashboard's primary heading, using clamp(36px, 4.3vw, 58px) at weight 750. Four KPI values use 32px at 650; chart headings use 19px at 650. Preserve the large identity-to-compact-data hierarchy without promoting every chart annotation size into a typography token.

The current-project revision viewer uses the neutral heading From prototype to working interface / 從原型到實際介面. Its established 36px desktop and 26px mobile size introduces the four UI cases without a negative quality assessment.

**The Two Density Modes Rule.** Use large, spacious headings around product imagery and a compact hierarchy for operating panels. Preserve the distinction when adapting to a narrow viewport.

The portfolio display changes to 47px at 820px, 37px at 600px and 33px at 360px. Workspace headlines become 28px on smaller screens. At 600px and below, explanatory dashboard and result copy uses 14px, with supporting data labels generally at 12–14px. The shared body token is not replaced by these component-specific sizes.

Mobile controls now use 44px minimum targets in the language switch, market navigation, range selector, forms and principal actions. Market form text is 16px; supporting data labels are generally 12–14px. The build retains compact snapshot annotations, AI badges and swatch labels, plus miniature SVG chart annotations. These compact annotations and control exceptions are observations, not a general readable-text floor. SVG chart label sizes are expressed in viewBox units and shrink with the rendered chart; they are not body typography tokens.

## Layout

The frame is centered and fluid. The identity bar caps at 1240px with 32px desktop side gutters; project navigation caps at 930px. The project gallery uses centered headings and generous image space, while the app shell caps at 1400px, increasing to 1460px on wide displays. Shared component gaps and insets use the frontmatter vocabulary; the implementation does not impose a strict four-pixel spacing grid.

The portfolio's first viewport contains a compact identity bar, four equal icon-and-label tabs and Market Lens Overview. Its large index graph sits immediately below the three index selectors, before the prominently dated stock heatmap. Comparable phone images in the released-app view share dimensions, top alignment and an uncropped 1080:2340 aspect ratio. They are 220px wide on desktop, with responsive widths and a narrow paired layout. Large landscape concepts retain their proportions. The current-project gallery presents two concept choices and a development-screen group, displaying one selected full-size image at a time.

Market Lens uses three index cards and a wider chart column beside a narrower insight column. At 1100px, gutters and panel padding contract. At 820px, the main chart and several analytical panels span the grid, while AI and system workspaces become single-column. At 600px, the dashboard and released-app detail stack, and side gutters narrow. At 600px and below, watchlist rows become labeled two-column records; every close, daily move, period return, signal and removal action remains visible without horizontal scrolling.

The stock heatmap uses 12 equal tiles in six columns, four below 1100px and three below 700px. Its date moves below the heading on phones. The résumé caps at 1080px; specification and career rows use a 260px label column and 50px gap, reducing to 210px/35px below 1100px and stacking below 700px. Four top tabs remain in one row on phones with wrapping labels.

The AI dashboard has a heading/date row, filter toolbar, four KPI columns, a two-column chart grid and a stock explorer beside a 295px detail panel. Below 820px, KPIs become two columns and charts stack. Below 1000px, the explorer stacks with company detail above the stock list. Below 600px, the date, search and sorting controls occupy their own rows. Pokericabra retains its original imagery and four-control evidence section above a story/image pair, stacking the pair on phones. Current Project uses the revision viewer, five-stage workflow and one consolidated product gallery; its repeated original-concepts, capability and contact-sheet sections are removed.

**The Context Before Image Rule.** Place the selected version’s explanation and design decision above its image. Use two columns on desktop and stack the text on phones; keep version thumbnails directly accessible above the context.

## Elevation & Depth

White cards against silver provide most of the depth. Soft ambient shadows lift product images, the selected segmented choice and chart tooltips. Project tabs remain flat in light and dark themes, using borders and fill for state. The dark teal dashboard separates nested panels through tone. The black Codex panel retains its visible silver gradient border and restrained ambient lift. The native image viewer has the strongest shadow and a dark translucent backdrop. Exact shadow values live in the sidecar; per-image variations are not a general elevation scale.

**The Quiet Elevation Rule.** Use tonal separation for operating panels and flat project tabs in both themes. Reserve the silver rim for the Codex enclosure and ambient lift for imagery, selected segments and temporary overlays.

Motion is sparse: smooth page scrolling, a one-second alternating loading pulse and 150ms tab colour/fill responses. The mounted language indicator slides for 240ms with cubic-bezier(.2,.75,.3,1), while text colours change over 160ms. Entering or leaving the résumé retains a 380ms native View Transition: a circular reveal from the résumé tab with cubic-bezier(.2,.65,.3,1). Unsupported browsers switch immediately. Reduced-motion preferences bypass the reveal, disable transitions including the language indicator, remove tile transforms and restore immediate scrolling.

## Shapes

Rounded rectangles recur across controls, fields, cards and image frames. Shared operating panels use the panel radius and move to the compact-panel radius on phones. Controls use the control radius, while selected segments and status chips use the smaller inset radius. Image rounding belongs to the frame and does not alter the artwork.

Thin dividers and underlines communicate structure. Flat project tabs use 12px corners; the bordered language pill has 11px outer and 6px indicator corners. Repeated sector panels use 10px corners. The Codex frame retains 24px, reducing to 20px. Small circles identify series, data points and range markers. Icons are inline outline SVGs, usually displayed at 16–19px with 1.6-unit strokes; project tabs use larger 28px outlines, reducing to 23px on phones.

## Components

### Buttons

Primary actions are blue filled rectangles with white text and a 42px minimum height on desktop; principal market actions increase to 44px on phones. Secondary actions use a quiet silver fill; related navigation uses blue text with an outline arrow. Hover changes the fill or adds an underline. Keyboard focus uses a three-pixel offset blue outline. Disabled controls reduce opacity and use an unavailable cursor. These are compact operating controls; their smaller font overrides do not define body text.

Visitor-facing download and export actions are absent throughout the portfolio, including original HTML, source records, image manifest, résumé PDF, market CSV and AI text export. The prototype is available through the embedded play control; this presentation choice does not imply that displayed browser resources cannot be saved.

### Navigation

The portfolio has four equal flat icon-and-label tabs: Market Lens (default), Released Mobile App, Current Project and Résumé & AI. Fine borders and tinted selected fills communicate state; no shadow, rim gradient or vertical movement is applied. Dark mode uses the same geometry with pale labels and a blue-gray selected fill. Arrow keys, Home and End move between projects, and the active tab participates in normal keyboard tab order. Current Project is labelled 目前項目 in Chinese, with the hero 項目前瞻 · 開發中.

Market Lens uses an internal horizontal navigation row with a blue active underline; Dashboard sits between Overview and Watchlist. At phone widths its controls have a 44px minimum height and the row scrolls horizontally to keep the selected tab visible. Project navigation and application navigation retain their different roles and selection styles.

### Language selector

A bordered pill holds EN and 繁體中文 in equal columns. A persistent dark-green indicator slides beneath the selected white label; the other label remains readable in both page themes. Its width is 160px, becoming 145px below 600px. Keyboard focus uses a contained green outline, and reduced motion makes selection immediate.

### Segmented choices

A silver rounded tray contains small rectangular choices. The selected item turns white with a slight shadow and stronger weight. The same pattern selects released-app screens and chart periods; the period control is the compact variant. Pressed state is exposed with `aria-pressed`. The current-project concept selector uses the flat underline treatment described in Product gallery.

Market Lens opens at 30D and retains 3M/6M alternatives. Keep the selected period and displayed dates explicit.

### Cards and fields

White cards contain a heading and one coherent chart, table, form or explanation. Most remain flat. Inputs, selects and textareas have a nearly white fill, fine cool-gray border and common control rounding. Visible field labels remain above the field where present; textareas resize vertically. Fields use the shared focus outline.

### Status and data

Calm and attention chips contain explicit state text. Signed returns accompany semantic colour. Repeated index colours connect each name to its sparkline, chart and comparison bar. The main chart supports pointer and arrow-key inspection, and daily-move tiles expose their exact values. Benchmark bars include a zero reference when values cross it.

The individual-stock heatmap states that tile sizes are equal, pairs each symbol with a signed return and makes the observed-close date prominent. Selection uses an outline plus an inset light rim and reveals the associated detail below.

### AI sector dashboard

Lead with AI SECTOR / AI 產業 and the completed-session date. Segment and 15D/30D controls update the connected KPI, basket-return, daily-breadth, cap-donut and leaders/laggards views. Search and sorting operate on the stock table; table rows and leader controls select company detail beside the list on desktop and above it at 1000px and below, while donut labels filter segments. Company identity leads with the ticker and name, followed by sector metadata. Retain pale focus outlines, signed values, labels and scrollable table access.

The displayed universe is the top 30 companies by market cap within Stock Analysis's AI list at retrieval, not a formal industry index or the whole market's top 30. Keep ranking-snapshot dates distinct from price dates. The basket uses equal starting allocations and completed-session prices; source and method remain available through native disclosure.

### Project evidence

Pokericabra retains its four-tab 0-to-1 section after the released-app gallery: AI workflow, visual design, information design and delivery. Each selected panel combines a short explanation, three-step sequence and relevant image. Actual released-app screens retain their proportions, with source-grounded tutorial/localization and scoring examples. Current Project presents its evidence through the revision viewer, five-stage workflow and product gallery, without a separate duplicate capability panel.

### Résumé and AI activity

Specification rows are semantic label/value pairs with optional notes, separated by fine dark dividers. Career records share their desktop columns and mobile stacking. Keep the whole page black while this tab is active; print returns to white paper with dark type.

The Codex panel is a distinct rounded black enclosure with a visible silver gradient border. It contains only two prominent token totals and a specification row for most-used tools with screenshot provenance. English values are 1.97B and 230M; Chinese values are 19.7億 and 2.3億. Other activity statistics and the former disclosure are removed. Present these values as a supplied snapshot, following PRODUCT.md.

### Image viewer

Screens and concepts open in a native modal dialog with a dark backdrop, contained image, caption and circular close control. Images preserve their proportions and fit within the viewport. Native Escape and focus behavior are retained.

### Five-stage delivery exhibit

Game heroes expose the five delivery stages as compact blue text actions. Each leads to a shared exhibit with five flat, numbered tabs; blue selection uses the existing 2px underline. The step numbers communicate actual sequence. A centered heading introduces the flow, followed by concise text and one tangible artifact: playable prototype, source excerpt, actual screenshot or dated build verification. Desktop uses two columns; below 700px it becomes a single column. The current-project workflow retains the original project-creation concept, while Pokericabra retains its separate four-proof exhibit.

The supplied HTML prototype is loaded only on explicit play, inside a portrait360×575 frame with a labeled sandboxed iframe. The same control stops it; changing stage removes it. A static capture provides the initial poster. Concepts, native captures, released artifacts and pending release statuses are labeled distinctly. Code uses monospace only for the actual source excerpt. The current project's verification panel attributes dated recorded results and does not imply public launch.

### Current-project revision viewer

Four flat case tabs cover Project setup, Clear choices, Finding features and Calendar. Each leads to a horizontal thumbnail rail and one enlarged artifact, initially showing its Final Result except Calendar, which starts with the original date grid. Blue text and an underline identify selected case and version tabs; inactive thumbnails become fully opaque on hover or selection. Clean, unannotated screenshots and labelled AI concepts remain contained in a softly rounded silver frame and open the shared image dialog. The five-stage workflow and consolidated product gallery follow the viewer.

The goal stays above the version rail. Below that rail, the selected stage explanation and My design decision appear before the image, side by side on desktop and stacked below 760px. Both texts change with the selected version. The previous/next controls also sit above the image; the source/type caption and enlargement action remain below it.

**The Version Context Rule.** Update the explanation and design decision for each selected version. Keep the case goal stable, identify requirements in the two calendar AI stages, and distinguish implemented results from concepts. Use plain English and Traditional Chinese UI language without personal quotations, review transcripts or unexplained game categories.

Use Prototype / 原型, AI prototype / AI 原型, Version Alpha / 初版 and Final Result / 最終成果 where those stages exist. The Alpha caption neutrally explains how to make the working form easier to scan. Calendar has exactly five ordered views: original date grid, AI finances, AI schedule, working finances, working schedule. The two AI stages explain the requested daily/period financial summary and phase/deadline schedule. The two results explain implementation. No extra six-week view appears in this case. Final Result does not imply public release.

Case and version tabs expose selection and support arrow keys, Home and End. Previous/next controls show the version count and disable at the ends; switching cases remembers the selected version. Both tab rails scroll horizontally on phones, and reduced motion removes thumbnail transitions.

### Product gallery

One image-led gallery consolidates the current project’s additional screens. Three flat buttons select Sales & forecasts / 銷售與預測, Project history / 項目紀錄 and In development / 開發中畫面. The development group exposes seven supplied desktop/mobile captures through a horizontally scrolling thumbnail selector, in attachment order. Blue text, a 2px underline and pressed state identify selection. Only one full-size image is shown at a time; captions distinguish AI concepts from development screens.

The gallery shares the revision viewer's centered 1240px maximum width and 32px desktop gutters, narrowing to 18px gutters below 760px. Soft silver image frames preserve intrinsic proportions and open the shared image dialog. Development thumbnails share fixed 78px desktop and 64px mobile heights. Portrait previews cap at 390px wide and remain uncropped; landscape captures use the available width. Gallery selections replace only the gallery, preserving the surrounding case study. The project-creation concept remains in the five-stage workflow instead of being repeated here.

### Persistent identity and project navigation

On screen, the page uses a viewport-height grid: identity/contact/language header, four project tabs, then a single flexible content scroll area. The first two rows stay in place. Project content and the footer scroll inside `.project-scroll`; its stable scrollbar gutter, native scrolling and scroll padding keep anchors and keyboard focus usable. Switching project resets that content area to the top. Theme and language behaviors are retained.

On short landscape viewports wider than 600px, the header is 58px high and project buttons use a compact horizontal icon/label arrangement with 48px minimum height. Print retains the normal document flow. This structure applies to every project and both languages.

### Phone interaction and data layout

The same URL, content and application state adapt through `mobile.css`; there is no separate mobile page. Preserve four project tabs, the green language slide and the piano-black résumé. Market subtabs scroll horizontally and keep the selected tab visible after fonts load. The index selectors remain adjacent to their chart.

The main price chart accepts touch inspection and exposes a native date slider at 600px and below. Its persistent value summary stays below the chart, updates the selected date and series values, and announces the selection. Mouse hover and keyboard arrows remain available on desktop. Touching the chart does not block vertical page scrolling.

**The Visible Metrics Rule.** On phones, show watchlist values as labeled records and AI stocks as a company heading plus four labeled metrics; use two metric columns at 360px and below. Retain table semantics and visually hidden column headers. The 30-company list scrolls vertically within 460px; its selected company sits above the list on compact layouts and is brought into view on selection. Search, sort and segment filters keep their original data behavior.

Project version context remains above the image. Thumbnail rails scroll; previous/next and image-close buttons have 44px touch targets. The native image dialog fits the dynamic viewport and preserves image proportions. No desktop visual-world or content change accompanies this adaptation.

## Do's and Don'ts

### Do:

- **Do** let real screenshots and clearly labelled concepts carry visual detail while keeping explanatory text brief.
- **Do** use blue for actions and preserve the neutral frame around project artwork.
- **Do** retain image proportions, equal dimensions and aligned top edges when showing comparable phone screens.
- **Do** pair data colours with labels or signed values, and align financial figures with tabular numerals.
- **Do** preserve visible keyboard focus, the native image dialog, reduced-motion support and both language options.
- **Do** keep project tabs flat in both finishes, the language indicator green and the Codex enclosure visibly silver-bordered.
- **Do** distinguish the AI dashboard's market-cap snapshot from completed-session price dates and preserve actual/concept labels in project evidence.
- **Do** show the five delivery stages as hero shortcuts and flat numbered tabs, pairing each with a real prototype, source excerpt, screenshot or dated verification record. Load the playable iframe only after explicit play; distinguish native builds from public release.
- **Do** keep the four UI cases and five-view Calendar distinct from the gallery; put version-specific context above each artifact and show one full-size gallery screen at a time.

### Don't:

- **Don't** spread the scoped green/teal controls into a replacement portfolio identity or restore the wordy folio composition.
- **Don't** restore silver-rim tab depth or the removed résumé activity statistics.
- **Don't** turn small auxiliary text or miniature chart labels into the shared readable-body standard.
- **Don't** crop or recolour product imagery to force it into the portfolio palette.
- **Don't** apply this portfolio's visual rules to the Pokericabra game itself.
- **Don't** restore visitor-facing downloads or exports, or duplicate the current-project gallery and capability explanations across multiple sections.

Base system recorded from `site.css`, `index.html`, `site.js`, `market.js`, `shared.js` and `market-model.js`, with repeated series colours in `market-data.js`; the current extension is grounded in `refinement.css`, `language-switch.css`, `ai-dashboard.js`, `resume.js`, `site.js`, `market.js` and the confirmed direction in `PRODUCT.md`. The superseded legacy folio files are outside this system. One-off illustration colours, unused custom properties, narrow chart annotations and isolated palette/type/radius variations are intentionally outside the reusable tokens. Existing sidecar tonal strips are synthesized previews; frontmatter values remain the implemented colour authority.

The current-project viewer, gallery and delivery exhibit are recorded from `indie-evolution.css`, `indie-evolution.js`, `site.js` and `project-process.js`, with artifact/status context in `PRODUCT.md` and 26 current image assets listed in `evidence/indie-ui-history.json`. Local dimensions, annotation sizes and isolated colour/type variations do not extend the shared token scales. Revision 8 reconciles the earlier preservation guidance with the consolidated gallery and portfolio-wide removal of visitor-facing downloads/exports; global tokens and language/theme behaviour are preserved.

Revision 11 records the shared-page phone adaptation from `mobile.css`, `market.js` and `ai-dashboard.js`: touch targets, date inspection, labeled financial records and compact company-detail placement. It preserves the existing visual world and shared token scales.
