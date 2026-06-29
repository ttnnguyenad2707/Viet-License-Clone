# EvidenceSection Specification

## Overview
- **Target file:** `src/components/EvidenceSection.tsx`
- **Screenshot:** `docs/design-references/vietlicense.org/desktop-full-2026-06-29T09-40-51.png`
- **Interaction model:** static layout with CTAs

## DOM Structure
- `section.sec.evidence`
  - `div.wrap`
    - `div.evidence-inner`
      - `div.evidence-content.fade-up.in`
        - `p.eyebrow`
        - `h2.display`
        - `p.lead`
        - `div.evidence-actions`
          - `a.btn.btn-dark`
          - `a.btn.btn-zalo`
      - `div.evidence-media` or stacked media blocks
        - image: Microsoft Marketplace partner screenshot
        - image: VAT invoice sample screenshot

## Computed Styles
### Section
- background overlay: linear-gradient(rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0) 56%)

### Actions
- dark button: padding 13px 22px, border-radius 999px, bg rgb(14, 16, 20), color white
- zalo button: padding 13px 22px, border-radius 999px, bg rgb(0, 104, 255), color white

## States & Behaviors
- `fade-up in` classes indicate entrance animation; exact timing not extracted
- no click-driven state change observed

## Assets
- `public/images/optimized/microsoft-marketplace-partner-800.jpg`
- `public/images/optimized/vat-invoice-sample-800.jpg`
- `public/images/logo-icon.png`

## Text Content (verbatim)
- eyebrow: Minh bạch sau mua
- heading: Chứng từ, hóa đơn và license rõ ràng
- lead: Khách nhận được hóa đơn VAT khi yêu cầu, thông tin license, hướng dẫn kích hoạt và có thể kiểm tra hồ sơ đối tác trên Microsoft Marketplace.
- actions:
  - Xem hồ sơ Microsoft Marketplace
  - Yêu cầu mẫu chứng từ qua Zalo

## Responsive Behavior
- **Desktop (1440px):** side-by-side content/media likely
- **Mobile:** expect stacked layout
