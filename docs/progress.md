# Clone Progress

## Completed Pages

| Route | URL | Status |
|-------|-----|--------|
| `/` | https://vietlicense.org | ✅ Product data synced from `src/data/products.json` |
| `/privacy` | https://vietlicense.org/privacy | ✅ Done |
| `/tos` | https://vietlicense.org/tos | ✅ Done |
| `/kiem-tra-rui-ro-ban-quyen-windows` | https://vietlicense.org/kiem-tra-rui-ro-ban-quyen-windows | ✅ Done |
| `/san-pham/[slug]` | https://vietlicense.org/san-pham/windows-10-11-home-pro-fpp-usb-fullbox | ⚙️ Data schema done, UI pending |

## Data Files

| File | Status |
|------|--------|
| `src/data/products.json` | ✅ Single source of truth for product data |
| `docs/product-data-schema.md` | ✅ Documentation complete |

## Product Data Sync

- Removed hardcoded product arrays from `/`, `/windows`, `/office`.
- Homepage now renders featured products from `src/data/products.json`, sorted by `displayOrder`.
- `/windows` renders Windows-related products from `src/data/products.json`, sorted by `displayOrder`.
- `/office` renders Office/Microsoft 365 products from `src/data/products.json`, sorted by `displayOrder`.
- PDP continues to use `src/data/product-utils.ts` with `generateStaticParams` for all slugs.
- Product links route to `/san-pham/[slug]`.

## Product Detail Page (PDP)

### Completed
- Schema design: `src/data/products.json` with sample products
  - `windows-10-11-home-pro-fpp-usb-fullbox`
  - `office-2021-pro-plus-fullbox`
- Schema docs: `docs/product-data-schema.md`

### Pending (PDP UI)
- [ ] Dynamic route `src/app/san-pham/[slug]/page.tsx`
- [ ] `generateStaticParams` for all slugs
- [ ] PDP layout: breadcrumb, product hero
- [ ] Image gallery component
- [ ] Price & CTA section
- [ ] Product info table
- [ ] Description sections renderer
- [ ] Related products section
- [ ] FAQ accordion
- [ ] SEO metadata per product

## Pages to Clone

| Priority | Route | Status |
|----------|-------|--------|
| 1 | `/` (homepage) | ✅ Data sync complete |
| 2 | `/san-pham/[slug]` (PDP) | Schema done |
| 3 | `/kiem-tra-rui-ro-ban-quyen-windows` | Done |
| 4 | `/privacy` | Done |
| 5 | `/tos` | Done |

## Build Status

```
npm run lint/build: pending manual run in local shell
```
