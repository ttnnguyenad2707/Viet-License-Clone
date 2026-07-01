# Clone Progress

## Completed Pages

| Route | URL | Status |
|-------|-----|--------|
| `/` | https://vietlicense.org | ✅ Product data from MongoDB (`isFeatured: true`, sorted by `displayOrder`) |
| `/windows` | https://vietlicense.org/windows | ✅ Product data from MongoDB (`category: windows`, sorted by `displayOrder`) |
| `/office` | https://vietlicense.org/office | ✅ Product data from MongoDB (`category: office|microsoft-365`, sorted by `displayOrder`) |
| `/san-pham/[slug]` | https://vietlicense.org/san-pham/windows-10-11-home-pro-fpp-usb-fullbox | ✅ Product data from MongoDB by slug |
| `/privacy` | https://vietlicense.org/privacy | ✅ Done |
| `/tos` | https://vietlicense.org/tos | ✅ Done |
| `/kiem-tra-rui-ro-ban-quyen-windows` | https://vietlicense.org/kiem-tra-rui-ro-ban-quyen-windows | ✅ Done |

## Data Source Migration

All public product pages now use **MongoDB** as the data source.

| Page | Query | Sort |
|------|-------|------|
| Homepage `/` | `isFeatured: true` | `displayOrder: 1` |
| `/windows` | `category: "windows"` OR `subcategory` contains "windows" | `displayOrder: 1` |
| `/office` | `category` IN `["office", "microsoft-365"]` | `displayOrder: 1` |
| PDP `/san-pham/[slug]` | `slug` match | - |

## Admin CRUD

- `/admin/products` - ✅ Working (uses `/api/admin/products`)
- All CRUD operations functional via MongoDB

## Data Files

| File | Status |
|------|--------|
| `src/data/products.json` | Deprecated for public pages |
| `src/data/product-data-schema.json` | ✅ Documentation |
| `src/models/Product.ts` | ✅ Mongoose model |
| `src/lib/mongodb.ts` | ✅ MongoDB connection |

## Product Detail Page (PDP)

### Completed
- Dynamic route `src/app/san-pham/[slug]/page.tsx` - fetches by slug from MongoDB
- Product data mapped from MongoDB to `Product` type
- `href: /san-pham/${slug}` on all ProductCards

### Pending (PDP UI polish)
- [ ] Image gallery component
- [ ] Price & CTA section refinement
- [ ] SEO metadata per product

## Build Status

```
npm run lint: Shell environment unresponsive (sandbox issue)
npm run build: Not run due to shell issue
```

**Dev server running and verified:**
- All routes return 200
- MongoDB queries working
- Admin CRUD working

## Pages to Clone

| Priority | Route | Status |
|----------|-------|--------|
| 1 | `/` (homepage) | ✅ MongoDB done |
| 2 | `/windows` | ✅ MongoDB done |
| 3 | `/office` | ✅ MongoDB done |
| 4 | `/san-pham/[slug]` (PDP) | ✅ MongoDB done |
| 5 | `/admin/products` | ✅ CRUD done |
| 6 | `/privacy` | Done |
| 7 | `/tos` | Done |
| 8 | `/kiem-tra-rui-ro-ban-quyen-windows` | Done |
