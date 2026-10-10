---
name: Drawply & Pokericabra
description: A digital studio critique sheet for visual feedback and game discovery.
colors:
  ink: "#172848"
  muted: "#53617b"
  blue: "#184beb"
  line: "#ccd6e8"
  paper: "#fff"
  wash: "#ecf1ff"
  red: "#d53936"
typography:
  display:
    fontFamily: 'Manrope, "Segoe UI", sans-serif'
    fontSize: "clamp(3.6rem,6.4vw,6rem)"
    fontWeight: 800
    lineHeight: 1.01
    letterSpacing: "-.04em"
  headline:
    fontFamily: 'Manrope, "Segoe UI", sans-serif'
    fontSize: "clamp(2.1rem,3.5vw,3.5rem)"
    lineHeight: 1.12
    letterSpacing: "-.04em"
  body:
    fontFamily: '"Segoe UI", Arial, sans-serif'
    lineHeight: 1.65
  label:
    fontFamily: '"Segoe UI", Arial, sans-serif'
    fontSize: "13px"
rounded:
  control: "10px"
  frame: "16px"
spacing:
  control-gap: "14px"
  inset: "20px"
  content-gap: "24px"
  heading-gap: "64px"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "15px 21px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "15px 21px"
  framed-surface:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.frame}"
---

# Design System: Drawply & Pokericabra

## Overview

**Creative North Star: "Digital studio critique sheet"**

The product home inherits Drawply’s established world: pale-blue paper, graphite text, cobalt controls and a vermilion editorial underline. Heavy, tightly spaced headings give the page its voice; generous whitespace and familiar utility text make the working annotation surface approachable.

Game artwork retains its own illustrated character inside quiet white frames. This document records the built root homepage and shared stylesheet, using the inherited direction (seed 27277916). It is repository documentation, excluded from public deployment.

**Key Characteristics:**

- Pale-blue introductory ground and quiet reading surfaces.
- Self-hosted Manrope headings with practical system UI text.
- A working annotation surface and an ordered visual example.
- Distinct game imagery in softly rounded frames.

## Colors

Cool paper and blue-black text provide the neutral field; cobalt carries action and vermilion supplies the editing gesture.

### Primary

- **Cobalt action** (`blue`): installation and store actions, navigation emphasis and highlighted sequence heading.

### Secondary

- **Vermilion editorial mark** (`red`): irregular headline underline and visible keyboard focus.

### Neutral

- **Graphite ink** (`ink`): principal text and outline-button labels.
- **Slate text** (`muted`): explanations, captions and secondary information.
- **Cool rule** (`line`): page boundaries, image frames and footer separation.
- **White paper** (`paper`): reading surfaces and framed content.
- **Pale-blue wash** (`wash`): introductory ground and numbered example markers.

**The Action and Annotation Rule.** Cobalt identifies actions and emphasis; vermilion identifies editorial marks and focus.

## Typography

**Display Font:** Self-hosted Manrope variable font, with Segoe UI and sans-serif fallbacks; weights 200–800 with font-display swap.

**Body Font:** Segoe UI, Arial, sans-serif.

The steep hierarchy contrasts heavy propositions with compact utility text. Tight heading tracking gives large type a compact silhouette; relaxed paragraph leading supports quick reading.

### Hierarchy

- **Display:** The hero uses the recorded display role. Below 1000px it becomes 4.2rem; below 760px it uses clamp(3.5rem,13vw,5.3rem) and a 10ch maximum width.
- **Headline:** Section headings use Manrope and balanced wrapping. The sequence heading increases weight to 800 and tightens leading to 1.08.
- **Titles:** Game names use Manrope at 28px, weight 800 and line-height 1.2. Sequence step labels use 18px system UI at weight 650.
- **Body:** Hero copy moves from 20px to 18px below 1000px. Section descriptions move from 18px to 17px on mobile; captions use 15px.
- **Label:** Small contextual copy uses the label role. Navigation uses 14px system UI at weight 600.

**The Two Roles Rule.** Manrope carries product identity and major headings; system UI type carries instructions, captions and controls.

## Layout

The container is capped at 1280px with 40px side gutters. Gutters become 24px below 1000px, 20px below 760px, and 16px below 380px.

Desktop pairs hero copy and a wider demo in a .86fr / 1.14fr grid with a 44px gap. Section headings pair in a 1.15fr / .85fr grid. The example uses three columns and the game pair uses two equal columns. All become single-column flows below 760px; actions and footer links wrap. Major desktop sections use approximately 80–88px vertical spacing; mobile sections tighten to approximately 52–54px.

The iframe follows its actual content height. The parent accepts finite heights from 180 to 900px only from the active demo window. On initial load, viewports at or below 760px select the mobile sample. Preserve content-aware sizing. Instructional images retain their full aspect ratio; game art is cropped inside consistent frames.

## Elevation & Depth

Whitespace, cool rules and tonal sections establish most separation. The demo receives a diffuse shadow (`0 20px 50px -24px #32477666`); game cards use fine borders without a competing shadow.

**The Working Surface Rule.** Reserve ambient elevation for the working annotation surface; reading sections and product frames use tonal separation and borders.

## Shapes

Buttons and instructional images share compact rounded corners. The demo and game cards use the larger frame radius. Thin blue-gray borders define white and transparent surfaces. The irregular, slightly rotated underline is a local hero signature. Numbered steps use pale-blue circles and cobalt numerals. Action arrows use line SVGs.

## Components

### Buttons

Primary actions use cobalt with white text; secondary actions use graphite text, a light outline and transparent fill. Both use the recorded control radius and padding, with a minimum height of 50px. Primary hover darkens to #1039b9; secondary hover fills with white. Links and buttons receive a 3px vermilion focus ring with 5px offset. No ornamental button motion is present.

### Navigation

The original mark and Manrope wordmark sit beside small semibold links. Hover underlines links; the installation destination stays cobalt. Mobile hides the redundant About Drawply link while retaining games and installation. Footer links wrap and policies remain grouped by product.

### Live annotation frame

A white rounded frame contains a compact title bar, the actual annotation runtime and a pale explanatory footer. The caption invites interaction. Surrounding copy states that demo marks remain local and nothing is sent to an AI. Embedded controls remain owned by the existing runtime.

### Three-image result sequence

Numbered labels lead linked images; short captions follow. The sequence moves from initial output to marked feedback to the updated result. Each image opens at full resolution. A quiet ruled note identifies the conversation as illustrative. Mobile preserves narrative order in a vertical stack.

### Game cards

Quiet white frames contain distinct artwork, product title, availability, description and store action. Artwork is 280px high on desktop, 230px below 760px and 200px below 380px. Content padding moves from 30px to 24px on mobile. Actions align at the bottom of flexible content areas. Availability uses cobalt semibold text, with truthful platform-specific wording.

### Closing action

A plain reading surface pairs a compact statement with the same primary installation button. Mobile stacks the action below the statement. Smooth anchor scrolling becomes immediate when reduced motion is requested.

## Do's and Don'ts

### Do:

- **Do** keep cobalt for actions and vermilion for editorial emphasis and visible focus.
- **Do** retain Manrope for product identity and major headings, with system UI text for instructions and controls.
- **Do** preserve complete instructional images and let the live demo follow its content height.
- **Do** keep distinct game imagery within the calm surrounding product presentation.
- **Do** preserve keyboard focus, mobile wrapping and reduced-motion scrolling.

### Don't:

- **Don't** turn the illustrative sample’s identity or typography into the product home’s design rules.
- **Don't** add decorative motion or competing shadows to the working demo.
- **Don't** replace the confirmed product identity with a personal portfolio or invented corporate identity.

The illustrative sample’s internal eyebrow and system display typography are deliberately not canonized; they belong to example content, not the product interface. No material unresolved craft defect is adopted as a system rule.
