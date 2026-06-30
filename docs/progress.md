# Clone Progress

## Completed Pages

| Route | URL | Status |
|-------|-----|--------|
| `/` | https://vietlicense.org | In progress — components building |
| `/privacy` | https://vietlicense.org/privacy | ✅ Done |
| `/tos` | https://vietlicense.org/tos | ✅ Done |
| `/kiem-tra-rui-ro-ban-quyen-windows` | https://vietlicense.org/kiem-tra-rui-ro-ban-quyen-windows | ✅ Done |
| `/san-pham/[slug]` | https://vietlicense.org/san-pham/windows-10-11-home-pro-fpp-usb-fullbox | ⚙️ Data schema done, UI pending |

## Data Files

| File | Status |
|------|--------|
| `src/data/products.json` | ✅ Schema defined, 2 sample products |
| `docs/product-data-schema.md` | ✅ Documentation complete |

## Product Detail Page (PDP)

### Completed
- Schema design: `src/data/products.json` with 2 sample products
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
| 1 | `/` (homepage) | In progress |
| 2 | `/san-pham/[slug]` (PDP) | Schema done |
| 3 | `/kiem-tra-rui-ro-ban-quyen-windows` | Done |
| 4 | `/privacy` | Done |
| 5 | `/tos` | Done |

## Build Status

```
npm run build: ✅ Passing (as of last check)
```
