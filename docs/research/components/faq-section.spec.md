# FAQSection Specification

## Overview
- **Target file:** `src/components/FAQSection.tsx`
- **Screenshot:** `docs/design-references/vietlicense.org/desktop-full-2026-06-29T09-40-51.png`
- **Interaction model:** click-driven accordion

## DOM Structure
- `section.sec.faq`
  - `div.wrap`
    - `div.sec-head.center`
      - `p.eyebrow`
      - `h2.display`
    - `div.faq`
      - `div.faq-item.open`
        - `button.faq-q`
          - question text
          - `svg.chev`
        - `div.faq-a`
          - `div` answer content
      - `div.faq-item`
        - repeated structure for additional questions

## Computed Styles
### Item
- open item border-bottom: 0.8px solid rgb(227, 232, 236)

### Button
- likely full-width row with chevron icon; exact padding/font not fully extracted

## States & Behaviors
- first item is open by default with `max-height: 240px`
- chevron indicates expand/collapse state
- interaction is click-driven accordion
- transition behavior not fully extracted; default to max-height transition if needed

## Assets
- Icons: `ChevronDownIcon`

## Text Content (verbatim)
- eyebrow: Câu hỏi thường gặp
- heading: Giải đáp trước khi mua
- questions:
  - Key và license có rõ ràng không?
  - Có thể kiểm tra hồ sơ đối tác Microsoft không?
  - Vì sao doanh nghiệp nên mua bản quyền chính hãng?
- answers extracted from snapshot text

## Responsive Behavior
- **Desktop (1440px):** centered single-column accordion
- **Mobile:** expect full-width accordion rows
