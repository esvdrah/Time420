# Design System: Time 420
**Version:** 1.0 — Dark Mode Edition

---

## 1. Visual Theme & Atmosphere

Time 420 embodies a **Deep Cosmic Forest** — the sensation of standing in a dense, ancient forest at 4:20 AM, where bioluminescent emerald light filters through absolute darkness. The interface is **nocturnal and atmospheric**, prioritizing depth and mood over brightness and busyness.

The overall tone is **premium lifestyle with a quiet confidence**. It does not shout; it glows. The design philosophy is *restraint amplified by precision*: deep black-green backgrounds serve as negative space that makes the luminescent emerald accents feel electric by contrast. Every surface has a slight organic quality — backgrounds are not pure black but carry a faint forest-green tint, reinforcing the natural, botanical character of the brand.

**Key Characteristics:**
- Ink-deep backgrounds with subtle green tinting — never pure black, never grey
- Luminescent emerald (#34d399) as the singular accent, used sparingly for maximum impact
- Typographic hierarchy driven by geometric display headers against humanist body text
- Micro-surfaces (cards, containers) elevated just enough from the base to feel tactile
- Glassmorphism used exclusively in the sticky navigation — translucent, blurred, anchored
- Atmospheric depth created through radial glow orbs and grain texture in the hero, not through shadows on content
- Whisper-soft borders that define space without adding visual noise

---

## 2. Color Palette & Roles

### Foundation — The Forest Floor
- **Void Forest Black** (`#070c09`) — Primary background. The deepest layer of the experience. Not pure black — carries a perceptible green undertone that anchors the botanical identity.
- **Shadowed Understory** (`#0f1a12`) — Surface color for sections, cards, and alternating backgrounds. One step above Void Forest Black, creating the illusion of depth without harsh contrast.
- **Moonlit Canopy** (`#162119`) — Elevated surface for interactive cards and hover states. The third layer in the depth hierarchy — used when a surface needs to feel "raised."
- **Veil Overlay** (`rgba(7, 12, 9, 0.85)`) — Header backdrop for glassmorphism. The forest seen through frosted glass.

### Accent — The Bioluminescent Glow
- **Luminescent Emerald** (`#34d399`) — The sole chromatic accent in the system. Used for: active nav links, check icons, badge text, gradient text endpoints, badge dots, focus rings. Should never be used for large background fills — its power comes from scarcity.
- **Deep Forest Ember** (`#059669`) — Darker sibling of Luminescent Emerald. Used for: gradient text midpoints, hover backgrounds on the language switcher, accent-dim contexts where the full brightness would overwhelm.
- **Emerald Mist** (`rgba(52, 211, 153, 0.08)`) — The most subtle accent fill. Used as default background for badge pills, check icon containers, email link buttons. Almost invisible, but provides a sense of warmth.
- **Emerald Haze** (`rgba(52, 211, 153, 0.14)`) — Hover background for accent-colored interactive elements (email links, language switcher). More present than Mist but still translucent.
- **Emerald Whisper Border** (`rgba(52, 211, 153, 0.25)`) — Default border for accent-colored interactive elements. Creates containment without weight.
- **Emerald Bloom Border** (`rgba(52, 211, 153, 0.5)`) — Hover-state border for accent interactive elements. More vivid on hover to reinforce interaction feedback.
- **Emerald Aurora Glow** (`0 0 20px rgba(52, 211, 153, 0.1)`) — Box-shadow glow on hover for email link pills. Evokes bioluminescence — the element appears to emit light.
- **Emerald Radial Glow** (`rgba(52, 211, 153, 0.18)`) — Used in hero section for the atmospheric ambient orb. Larger, softer, more diffused than the Aurora Glow.

### Text — The Typographic Forest
- **Frost White** (`#f0fdf4`) — Primary text. Not pure white — carries the faintest green warmth. Used for all body copy, headings, and primary readable content.
- **Soft Sage** (`#86efac`) — Secondary text. Used for hero subtitles and gradient text starting points. Feels like Luminescent Emerald desaturated by moonlight.
- **Muted Moss** (`#4b7c61`) — Tertiary text for body paragraphs, muted descriptions, and compliance text. Readable but recessive — supports without competing.
- **Shadow Fern** (`#2d5040`) — The most muted text tier. Used for copyright lines, timestamps, and decorative metadata. Barely visible against the darkest backgrounds — intentional.

### Structural — The Skeleton
- **Deep Root Border** (`#1f3a2a`) — Default border color for cards, dividers, section separators. Structural but silent.
- **Raised Root Border** (`#2a4f38`) — Slightly brighter border used on elevated surfaces and on hover states of structural borders.

---

## 3. Typography Rules

### Display Family: Syne
**Character:** Geometric, angular, architectural. Syne's letterforms have a slight rigidity that evokes precision instruments and Swiss design — it feels technical yet elegant. Perfect for a timer app.

- **H1 / Hero Headlines:** Weight 800, size `clamp(3rem, 9vw, 5rem)`, letter-spacing `-0.03em`. Rendered as gradient text (Frost White → Luminescent Emerald → Deep Forest Ember). The tight tracking creates density that contrasts with surrounding negative space.
- **H2 / Section Headers:** Weight 700, size `clamp(1.4rem, 4vw, 1.9rem)` or `clamp(1.75rem, 5vw, 2.5rem)` for page-level headers, letter-spacing `-0.02em`. Solid Frost White — gradient treatment reserved for H1 only.
- **Subtitle / Hero Subhead:** Weight 500, Syne, size `clamp(1.05rem, 3vw, 1.35rem)`, letter-spacing `-0.01em`, color Soft Sage. Bridges the gap between the massive H1 and the body paragraph below it.
- **Section Labels:** Weight 600, DM Sans, size `0.7rem`, letter-spacing `0.1em`, ALL CAPS, color Luminescent Emerald. Used as eyebrow text above section H2s. Creates rhythm by punctuating the vertical scroll.
- **FAQ / FAQ Question (dt):** Weight 700, Syne, `0.95rem`, letter-spacing `-0.01em`, Frost White.
- **Component Labels (badge, button text):** Weight 600-700, Syne, `0.72-0.85rem`, letter-spacing `0.08em`, ALL CAPS.

### Body Family: DM Sans
**Character:** Humanist geometric sans-serif with optical size axis. Warm, readable, highly legible at small sizes. Its slightly wider letterforms and open apertures create comfort in long-form text.

- **Body Copy:** Weight 400, size `0.925-0.975rem`, line-height `1.75-1.8`. Color Muted Moss for supporting content, Frost White for primary.
- **Navigation Links:** Weight 500, `0.875rem`, letter-spacing `0.01em`, color Muted Moss default.
- **FAQ Answers (dd):** Weight 400, `0.875rem`, line-height `1.75`, Muted Moss.
- **Small Meta (copyright, dates):** Weight 400, `0.75-0.8rem`, Shadow Fern.

### Hierarchy Principle
The contrast between Syne's geometric rigidity (headers) and DM Sans's humanist warmth (body) creates the essential tension in the design — **precision meets approachability**. Never use DM Sans for section headings or Syne for multi-line body paragraphs.

---

## 4. Component Stylings

### Navigation Header
- **Container:** Full-width, sticky top. Void Forest Black at 85% opacity + `backdrop-filter: blur(16px)` — the Veil Overlay effect. Bottom border: Deep Root Border (1px). Glassmorphism reinforces that the nav floats above content.
- **Logo:** Syne 700, Frost White. SVG clock icon with Luminescent Emerald elements on Emerald Mist background. No hover background — opacity subtlety only.
- **Nav Links:** DM Sans 500, `0.875rem`, default Muted Moss. On hover/active: Frost White text + Moonlit Canopy background, `border-radius: var(--radius-sm)` (6px). Active: Luminescent Emerald text + Emerald Mist background.
- **Language Switcher:** Compact outlined pill. Default: Luminescent Emerald border + text (using `var(--border-accent)` border, `var(--accent)` text). Hover: Emerald Haze background + Deep Forest Ember border. `border-radius: var(--radius-sm)` (6px). Consistent with nav link geometry.
- **Hamburger (mobile):** 3 bars, 22px wide, 2px height, Deep Root Border → Raised Root Border radius. Animated bars on open state. Menu drop: Shadowed Understory background, full-width.
- **Keyboard Focus Ring:** 2px solid Luminescent Emerald outline, 3px offset, `border-radius: var(--radius-sm)`. Applied universally via `:focus-visible` pseudo-class. Never suppressed.

### Hero Section
- **Background:** Void Forest Black. Two radial gradient orbs (primary: `var(--accent-glow)` 500px centered top; secondary: `var(--accent-pale)` 300px bottom-right) + grain noise SVG texture at 40% opacity + subtle CSS dot pattern for spatial depth.
- **Badge Pill:** Emerald Mist background, Deep Root Border border, Luminescent Emerald text, `border-radius: var(--radius-pill)` (999px). Contains an animated pulsing dot (keyframe: scale 1→0.85, opacity 1→0.5, 2s infinite).
- **H1:** Gradient text — `linear-gradient(135deg, #f0fdf4 0%, #34d399 60%, #059669 100%)`. The gradient suggests light moving across emerald leaves.
- **Body Text:** Muted Moss, `max-width: 560px`, centered. Generous `line-height: 1.75`.

### Feature Cards
- **Container:** Shadowed Understory (`var(--bg-elevated)`) background, Deep Root Border (1px), `border-radius: var(--radius-md)` (10px). On hover: Raised Root Border border + Shadowed Understory background shift.
- **Check Icon:** Square badge `22×22px`, Emerald Mist background, `rgba(52,211,153,0.3)` border → use `var(--border-accent-dim)`, `border-radius: var(--radius-xs)` (4px — intentionally more square than cards for geometric contrast). Color: Luminescent Emerald SVG checkmark.
- **Text:** DM Sans 400, `0.925rem`, Frost White. Line-height `1.5`.
- **Grid:** `grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))` — naturally responsive without breakpoint management.

### Compliance Container
- **Shape:** Shadowed Understory background, Deep Root Border (1px), `border-radius: var(--radius-lg)` (14px). More rounded than feature cards — containers that hold descriptive text feel "softer."
- **Internal layout:** Flex row — emoji icon left, content right. `gap: 1.25rem`.
- **Label:** Syne 700, `0.75rem`, ALL CAPS, `letter-spacing: 0.08em`, Luminescent Emerald.

### Email Link Pills
- **Shape:** Inline-flex, `border-radius: var(--radius-md)` (10px — updated from 8px for consistency with card system). Default: Emerald Mist background (`var(--accent-pale)`), Emerald Whisper Border (`var(--border-accent)`).
- **Hover:** Emerald Haze background (`var(--accent-hover)`), Emerald Bloom Border (`var(--border-accent-hov)`), Emerald Aurora Glow box-shadow (`var(--shadow-glow)`).
- **Icon:** 16×16px SVG envelope, left of text. Reinforces the mail affordance.
- **Typography:** DM Sans 600, `0.925rem`, Luminescent Emerald.

### FAQ Items
- **Container:** Shadowed Understory background, Deep Root Border (1px), `border-radius: var(--radius-lg)` (12px — note: this is between `var(--radius-md)` and `var(--radius-lg)`; target is `var(--radius-lg)` for alignment).
- **Question Badge:** `20×20px` circle, Emerald Mist + Emerald Whisper Border, `border-radius: 50%`. Contains "?" in Luminescent Emerald.
- **Question Text (dt):** Syne 700, Frost White.
- **Answer (dd):** DM Sans 400, Muted Moss, `padding-left: 2rem` to optically align below the question text past the badge.

### Page Headers (Legal / Support Pages)
- **Pattern:** Section label (eyebrow) → H1 gradient text → optional date/effective meta. Bottom border: Deep Root Border (1px) divider.
- **H1:** Same gradient treatment as hero but smaller: `clamp(1.75rem, 5vw, 2.5rem)`, Syne 800, letter-spacing `-0.03em`.
- **Effective date:** Shadow Fern, `0.8rem`, DM Sans 400, letter-spacing `0.01em`.

### Sections (Body Content)
- **Dividers between sections:** `border-top: 1px solid var(--border)` with `padding-top: 2rem`. No decorative elements — the border and whitespace do the work.
- **Section H2 (legal pages):** Syne 700, `0.95rem`, Luminescent Emerald, letter-spacing `0.01em`. Using Accent as section header color reinforces navigation — readers can scan emerald anchors.
- **Body paragraphs:** DM Sans 400, `0.925rem`, Muted Moss, `line-height: 1.8`.

---

## 5. Layout Principles

### Container System
- **Content Width:** `max-width: 720px` for editorial/text content (pages, articles). `max-width: 1000px` for navigational chrome (header, footer). This narrower content column creates a focused reading experience and amplifies the surrounding negative space.
- **Horizontal Padding:** `1.5rem` (24px) on all containers. Consistent edge rhythm regardless of viewport.
- **Vertical Page Padding:** `4rem 0 5rem` — generous top + slightly more bottom for visual anchoring.

### Radius Scale
A five-step geometric system mapped to element size and purpose:

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-xs` | `4px` | Micro elements: check icon badge, hamburger bar rounding |
| `--radius-sm` | `6px` | Interactive links: nav links, buttons, focus rings, language switcher |
| `--radius-md` | `10px` | Component cards: feature items, email link pills |
| `--radius-lg` | `14px` | Container cards: compliance box, FAQ items, compliance section |
| `--radius-pill` | `999px` | Badge pills: hero badge, any pill-shaped label |

### Elevation & Depth
Three-layer system from darkest to lightest:
1. **Base layer** — `var(--bg-base)` (`#070c09`) — page background, hero section
2. **Surface layer** — `var(--bg-surface)` (`#0f1a12`) — alternating sections (features, footer)
3. **Elevated layer** — `var(--bg-elevated)` (`#162119`) — cards, hover states, interactive containers

Depth is communicated entirely through background color steps and border presence — **no drop shadows on resting content**. Shadows appear only as glows on accent-colored hover states (`var(--shadow-glow)`).

### Spacing
- **Section padding:** `4–5rem 0` (64–80px). Breathing room is generous — never cramped.
- **Component gap:** `0.75–1rem` between sibling items within a list or grid.
- **Internal padding:** `1–1.35rem 1.1–1.5rem` for cards and containers.
- **Footer margin-top:** `5rem` — the footer is always well-separated from the last content section.

### Responsive Strategy
- **Single breakpoint at `640px`** — desktop-first → mobile collapse.
- Navigation collapses to hamburger; nav links become a full-width stacked menu in Shadowed Understory.
- Feature grid collapses naturally via `auto-fill` minmax — no explicit breakpoint needed.
- All type sizes use `clamp()` for fluid scaling between mobile and desktop.

### Animation Principles
- **Universal easing:** `var(--ease)` — `cubic-bezier(0.25, 0.46, 0.45, 0.94)` — a smooth deceleration curve. Applied to all `transition` declarations. No linear or raw `ease` easing.
- **Duration range:** `0.15s` (micro: hover color changes) → `0.2s` (standard: background/border) → `0.3s` (larger: hamburger bar transforms).
- **Keyframe animations:** Only the badge dot pulse (2s infinite, `ease-in-out`). Minimal — the interface does not animate unprompted.
- **No entrance animations** — the page appears instantly. Motion is reserved exclusively for interaction responses.

---

## 6. Accessibility Commitments

- **Focus visibility:** All interactive elements display a `2px solid var(--accent)` outline with `3px offset` on `:focus-visible`. Styled to match the brand — never suppressed, never the browser default blue.
- **Color contrast:** Luminescent Emerald (`#34d399`) on Void Forest Black (`#070c09`) achieves approximately 8.2:1 contrast ratio — exceeds WCAG AAA (7:1) requirement.
- **Touch targets:** All interactive elements maintain minimum `44×44px` touch target through padding.
- **Semantic HTML:** `<article>`, `<section>`, `<header>`, `<nav>`, `<dl>/<dt>/<dd>` used throughout. ARIA labels on icon-only buttons.
- **Motion preference:** The `ease-in-out` badge dot animation respects the minimal animation philosophy; a future improvement should wrap it in `@media (prefers-reduced-motion: no-preference)`.

---

## 7. Design System Prompting Language

When extending Time420 with new screens or components, use this vocabulary:

### Atmosphere Descriptors
- *"Deep cosmic forest"* — the overall mood
- *"Bioluminescent emerald glow"* — the accent treatment
- *"Ink-deep botanical darkness"* — the background character
- *"Frost White text on Void Forest Black"* — the primary text pairing

### Component Prompts
- *"A card with Moonlit Canopy background, Deep Root Border, and generously rounded corners (`var(--radius-lg)`) that lifts with a Raised Root Border on hover"*
- *"A pill badge in Emerald Mist with Luminescent Emerald text and a pulsing dot indicator"*
- *"An email link pill: Emerald Mist background, Emerald Whisper Border, transitions to Emerald Haze with an Aurora Glow box-shadow on hover"*
- *"Section eyebrow: 0.7rem DM Sans 600 ALL CAPS in Luminescent Emerald, 0.1em letter-spacing"*
- *"Gradient headline: Syne 800, tight -0.03em tracking, linear-gradient from Frost White to Luminescent Emerald to Deep Forest Ember at 135deg"*

### Anti-Patterns to Avoid
- ❌ Pure black (`#000`) or pure white (`#fff`) as backgrounds or text — always use tinted tokens
- ❌ Any color not in the palette (especially legacy `#2d6a4f` — it is outside the token system)
- ❌ Border-radius values not from the 5-step scale
- ❌ Transitions without `var(--ease)` easing function
- ❌ Gradient text on anything smaller than H1 — reserve for maximum impact
- ❌ Luminescent Emerald as a large background fill — accent power comes from scarcity
- ❌ Suppressing `:focus-visible` — the emerald focus ring is on-brand and required
