# ProductSection Specification

## Overview
- **Target file:** `src/components/ProductSection.tsx`
- **Screenshot:** `docs/design-references/vietlicense.org/desktop-full-2026-06-29T09-40-51.png`
- **Interaction model:** static grid; no tab switching observed in extraction

## DOM Structure
- `section.sec.products`
  - `div.wrap`
    - `div.sec-head.center`
      - `p.eyebrow`
      - `h2.display`
      - `p.product-commitment`
      - `p.volume-catalog-note`
    - `div.grid.home-product-grid`
      - `article.card.fade-up.in` x16
        - `a.card-link`
        - `div.thumb`
          - `div.pills`
            - `span.pill` ...
            - `span.pill.best-seller` with star svg
          - `img`
        - `div.body`
          - `h3`
          - text content and prices
          - `a.btn` CTA links
    - `button.btn.btn-light.home-product-show-more`

## Computed Styles
### Grid/card
- card display: flex, flex-direction: column
- card border-radius: 18px
- card border: 0.8px solid rgb(227, 232, 236)
- card background: rgb(255, 255, 255)
- card box-shadow: rgba(20, 40, 70, 0.4) 0px 8px 24px -16px
- thumb background: linear-gradient(165deg, rgb(243, 246, 248), rgb(221, 230, 236))

### Buttons
- zalo button padding: 9px 16px; border-radius: 999px; bg: rgb(0, 104, 255); color: white
- light button padding: 13px 22px; border-radius: 999px; bg: white; border: 0.8px solid rgb(227, 232, 236)

## States & Behaviors
- cards have `fade-up in` classes; animation likely tied to IntersectionObserver or CSS animation
- hover sweep via synthetic mouseover did not show visible style changes; keep hover implementation conservative/matched to original CSS transitions

## Assets
- Thumbnails: `public/images/optimized/win11pro-720.png`, `officepro2021-720.png`, `officepro2019-720.png`, `office2024.png`
- Product shots: `public/images/products/windows-server-2019-packshot.png`, `sql-server-2022-packshot.png`
- Icons: `StarIcon`

## Text Content (verbatim)
- eyebrow: Danh sách sản phẩm
- heading: Chọn đúng Windows & Office cho bạn
- commitment: Cam kết 100% chính hãng bản quyền · License rõ ràng · Microsoft 365 subscription đúng gói · Xuất VAT theo yêu cầu
- note: Khách hàng lấy >30 bản vui lòng inbox VietLicense để được báo giá riêng.

## Responsive Behavior
- **Desktop (1440px):** 4-column card grid
- **Mobile:** expected single-column stack; exact breakpoint not yet extracted
