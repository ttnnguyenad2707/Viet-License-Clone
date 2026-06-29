# SiteHeader Specification

## Overview
- **Target file:** `src/components/SiteHeader.tsx`
- **Screenshot:** `docs/design-references/vietlicense.org/desktop-full-2026-06-29T09-40-51.png`
- **Interaction model:** static desktop layout; nav-toggle exists but computed desktop state is `display: none`

## DOM Structure
- `header.site-header` sticky container
  - `div.wrap`
    - `nav.nav`
      - `a.brand` -> `img.brand-logo`
      - `button.nav-toggle`
      - `div.nav-left`
        - `a.navlink` x5
      - `div.nav-right`
        - `a.navlink`
        - `a.btn.btn-dark.btn-sm`

## Computed Styles
### Container
- position: sticky
- top: 0px
- background: rgba(255, 255, 255, 0.92)
- backdrop-filter: saturate(1.4) blur(10px)
- z-index: 50
- height: 74.8px

### Brand
- image src: `/assets/img/logo-trimmed.png`
- approximate width: 116.6px
- approximate height: 46px

### Nav link
- color: rgb(74, 82, 92)
- font: Inter
- cursor: pointer

### Right CTA
- padding: 9px 16px
- border-radius: 999px
- background: rgb(14, 16, 20)
- color: rgb(255, 255, 255)

## States & Behaviors
### Mobile menu
- nav-toggle computed desktop: display none, width auto, height auto
- mobile behavior not extracted; defer to later responsive pass if needed

## Assets
- Logo: `public/images/logo-trimmed.png`

## Text Content (verbatim)
- Trang chủ
- Windows
- Office
- So sánh giá
- Doanh nghiệp
- FAQ
- Tư vấn qua Zalo

## Responsive Behavior
- **Desktop (1440px):** horizontal nav, visible right CTA, logo left-aligned
- **Tablet/Mobile:** not yet verified; expect drawer/menu button behavior from `nav-toggle`
