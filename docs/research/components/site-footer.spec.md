# SiteFooter Specification

## Overview
- **Target file:** `src/components/SiteFooter.tsx`
- **Screenshot:** `docs/design-references/vietlicense.org/desktop-full-2026-06-29T09-40-51.png`
- **Interaction model:** static layout with links

## DOM Structure
- `footer.footer`
  - `div.wrap`
    - `div.foot-grid`
      - brand block
        - `a.brand` -> `img.brand-logo`
        - `p.fdesc`
      - product links block
        - `h5`
        - `ul` -> `li` -> `a`
      - support links block
        - `h5`
        - `ul` -> `li` -> `a`
      - contact/social block
        - `h5`
        - contact rows with icons/links
    - bottom legal row
      - `a` privacy
      - `a` terms

## Computed Styles
### Grid
- multi-column footer grid on desktop
- link color: rgb(74, 82, 92)

## States & Behaviors
- link hover not visibly changed in synthetic hover sweep
- all links are external or hash anchors

## Assets
- Logo: `public/images/logo-trimmed.png`
- Icons: `FacebookIcon`, `ZaloIcon` placeholder if needed

## Text Content (verbatim)
- description: Windows, Office và Microsoft 365 chính hãng, hỗ trợ nhanh qua Zalo. Xuất VAT đầy đủ, license rõ ràng, tư vấn đúng nhu cầu.
- Sản phẩm: Windows, Office, So sánh giá, Doanh nghiệp
- Hỗ trợ: Câu hỏi thường gặp, Tư vấn qua Zalo, Fanpage Facebook, Liên hệ qua Messenger
- Liên hệ: Fanpage: Việt License, Zalo: Thành Nguyễn - VietLicense, Hotline: 0382 520 281
- legal: Chính sách bảo mật, Điều khoản sử dụng

## Responsive Behavior
- **Desktop (1440px):** multi-column grid
- **Mobile:** expect stacked columns
