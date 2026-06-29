# Page Topology — vietlicense.org

## Visual order
1. `site-header` fixed/sticky header overlay with nav links, search button, and contact CTAs.
2. `hero` full-width hero section with headline, contact cards, and floating product image cluster.
3. `sec products` product catalog section with filter tabs and 4-column product cards.
4. `contact-channels` contact channels band with direct contact options.
5. `sec evidence` transparency/evidence section with partner/invoice imagery.
6. `sec faq` FAQ accordion.
7. `site-footer` footer with nav, support links, social links, and legal links.

## Overlays / z-index
- `site-header` sits at top with translucent white background, likely above hero content.
- `to-top` floating button in bottom-right.
- `nav-toggle` mobile menu button exists but is zero-size in desktop snapshot; expect mobile drawer behavior.

## Interaction model
- Header: static desktop, likely mobile drawer.
- Hero: time/animation driven floating product cluster and fade-up cues.
- Products: static grid with card hover states; no tab switching observed in snapshot text.
- FAQ: click-driven accordion.
- Footer: mostly static links.

## Dependencies
- Product cards depend on shared card styles and downloaded thumbnails.
- Evidence section depends on downloaded partner/invoice images.
- FAQ depends on shared accordion behavior pattern.
