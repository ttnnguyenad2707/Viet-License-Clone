# ContactChannels Specification

## Overview
- **Target file:** `src/components/ContactChannels.tsx`
- **Screenshot:** `docs/design-references/vietlicense.org/desktop-full-2026-06-29T09-40-51.png`
- **Interaction model:** static layout with link CTAs

## DOM Structure
- `section.contact-channels`
  - `div.wrap`
    - `div.contact-panel.fade-up.in`
      - `div.contact-copy`
        - `p.eyebrow`
        - `h2`
        - `p`
      - `div.contact-options`
        - `a.contact-option.facebook`
        - `a.contact-option.zalo`
        - `a.contact-option.phone`

## Computed Styles
### Panel
- background: linear-gradient(135deg, rgb(248, 251, 253) 0%, rgb(234, 242, 248) 100%)

### Option
- background: rgb(255, 255, 255)
- border: 0.8px solid rgb(227, 232, 236)
- border-radius: 1rem
- box-shadow: rgba(10, 24, 38, 0.42) 0px 16px 34px -28px

## States & Behaviors
- synthetic hover did not reveal visual state changes
- contact options are external links

## Assets
- Icons: `FacebookIcon`, `PhoneIcon`

## Text Content (verbatim)
- eyebrow: Mua hàng & tư vấn
- heading: Liên hệ trực tiếp
- body: Chọn kênh bạn đang dùng. Việt License kiểm tra đúng phiên bản, tình trạng hàng và chứng từ trước khi chốt đơn.
- options:
  - Facebook Fanpage / Việt License - Oliu Group
  - Zalo / Thành Nguyễn - VietLicense
  - 0382 520 281 / Gọi hotline

## Responsive Behavior
- **Desktop (1440px):** horizontal option cards
- **Mobile:** expect stacked layout
