# CTABand Specification

## Overview
- **Target file:** `src/components/CTABand.tsx`
- **Screenshot:** `docs/design-references/vietlicense.org/desktop-full-2026-06-29T09-40-51.png`
- **Interaction model:** static CTA block

## DOM Structure
- `section.sec`
  - `div.wrap`
    - `div.ctaband.fade-up.in`
      - `h2.display`
      - `p`
      - `a.btn.btn-zalo`

## Computed Styles
### Band
- background: linear-gradient(120deg, rgb(14, 16, 20), rgb(27, 35, 48))

### Button
- padding: 13px 22px
- border-radius: 999px
- background: rgb(0, 104, 255)
- color: white

## States & Behaviors
- `fade-up in` class indicates entrance animation
- no state changes observed beyond default

## Assets
- Icons: none required

## Text Content (verbatim)
- heading: Chưa chắc Windows đang dùng có rủi ro bản quyền không?
- body: Trả lời vài câu hỏi để nhận đánh giá sơ bộ về license Windows. Không upload file, không thu dữ liệu cá nhân.
- CTA: Kiểm tra rủi ro Windows

## Responsive Behavior
- **Desktop (1440px):** centered dark band
- **Mobile:** expect full-width stacked layout
