# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Screenshot:** `docs/design-references/vietlicense.org/desktop-full-2026-06-29T09-40-51.png`
- **Interaction model:** static layout with animated/fade-in cues

## DOM Structure
- `section.hero`
  - `div.wrap.hero-inner`
    - `p.eyebrow`
    - `h1.display` with `span.grad`
    - `div.hero-contact-row`
      - `a.hero-contact-card.facebook`
      - `a.hero-contact-card.catalog`
    - `div.hero-scroll-cue` with arrow/scroll indicator
  - floating image cluster outside text flow
    - `img.hero-box` repeated for product visuals

## Computed Styles
### Section
- section bounds at desktop: top ~74.8px, width 1424.8px, height ~930.7px
- background: radial-gradient(120% 120% at 50% -10%, rgb(245, 248, 250) 0%, rgb(238, 242, 245) 45%, rgb(228, 235, 240) 100%)

### Heading
- eyebrow: uppercase small text, muted foreground
- h1: large display text, dark foreground
- grad span: gradient text using `linear-gradient(100deg, rgb(0, 104, 255) 0%, rgb(58, 160, 255) 45%, rgb(0, 194, 255) 100%)`

### Contact cards
- display: flex
- padding: 13px 20px
- border-radius: 999px
- facebook card bg: rgb(14, 16, 20), color: rgb(255, 255, 255), box-shadow: rgba(0, 0, 0, 0.5) 0px 12px 24px -12px
- catalog card bg: rgb(255, 255, 255), color: rgb(14, 16, 20), box-shadow: none

### Scroll cue
- background: rgb(255, 255, 255)
- color: rgb(14, 16, 20)

## States & Behaviors
- fade-up/in classes present on hero elements; exact animation timing not yet extracted from computed styles
- hover sweep found no visual state change on sampled hero elements via synthetic mouseover/mouseout

## Assets
- Hero images: `public/images/hero/hero-windows-10-11.png`, `hero-office-365.png`, `hero-office-2021-pro-plus.png`, `hero-office-2019-pro-plus.png`, `hero-windows-server-2019.png`, `hero-sql-server-2022.png`
- Icons: `FacebookIcon`, `InfoIcon`, `ArrowUpIcon`

## Text Content (verbatim)
- eyebrow: Bản quyền Microsoft chính hãng
- h1: Windows, Office & Microsoft 365 chính hãng
- subline: Chưa rõ chọn bản nào? Nhắn cấu hình máy qua Zalo, tư vấn đúng phiên bản trong 5 phút.
- buttons: Tư vấn inbox, Xem sản phẩm

## Responsive Behavior
- **Desktop (1440px):** two-column-ish layout with left text block and right floating image cluster
- **Mobile:** not yet captured; expect stacked layout and possibly repositioned floating images
