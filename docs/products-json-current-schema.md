# products.json current schema

## Cấu trúc hiện tại
- `src/data/products.json` hiện là **object**, không phải array.
- Đối tượng gốc có 1 key: `products`, là **array** chứa các sản phẩm.
- Hiện tại array này có 2 phần tử: 1 Windows, 1 Office.

## Các field đang có trong mỗi product
- `id`
- `slug`
- `name`
- `category`
- `subcategory`
- `shortDescription`
- `price.retail`
- `price.retailLabel`
- `price.bulk`
- `price.bulkLabel`
- `price.bulkMinQty`
- `price.bulkNote`
- `price.vatNote`
- `price.largeQtyNote`
- `currency`
- `badges[].label`
- `badges[].variant`
- `images[].src`
- `images[].alt`
- `images[].caption`
- `thumbnail`
- `licenseType`
- `activationType`
- `deliveryType.form`
- `deliveryType.physicalItems[]`
- `deliveryType.digitalItems[]`
- `deliveryType.notes[]`
- `warranty.duration`
- `warranty.transferable`
- `warranty.transferNote`
- `support.installGuide`
- `support.activationHelp`
- `support.upgradeConsult`
- `support.channels[]`
- `support.details[]`
- `suitableFor[]`
- `highlights[].icon`
- `highlights[].text`
- `descriptionSections[].title`
- `descriptionSections[].content`
- `descriptionSections[].bullets[]`
- `descriptionSections[].specTable[]`
- `specifications[]`
- `faqs[]`
- `relatedProductSlugs[]`
- `seo.title`
- `seo.description`
- `seo.keywords`
- `cta.primary.label`
- `cta.primary.href`
- `cta.primary.channel`
- `cta.secondary.label`
- `cta.secondary.href`
- `cta.secondary.channel`
- `cta.contacts[]`
- `cta.trustBadges[]`

## Field đang được PDP dynamic sử dụng
Dựa trên `src/app/san-pham/[slug]/page.tsx` và các component PDP hiện có:
- `product.images`
- `product.badges`
- `product.name`
- `product.shortDescription`
- `product.price.retailLabel`
- `product.price.bulkLabel`
- `product.price.bulkNote`
- `product.price.largeQtyNote`
- `product.warranty.duration`
- `product.warranty.transferable`
- `product.warranty.transferNote`
- `product.highlights`
- `product.deliveryType.notes`
- `product.descriptionSections`
- `product.specifications`
- `product.support.details`
- `product.support.channels`
- `product.faqs`
- `product.relatedProductSlugs`
- `product.category`
- `product.subcategory`
- `product.seo.title`
- `product.seo.description`
- `product.seo.keywords`
- `product.cta`
- `product.thumbnail`

## Field cần giữ nguyên để không phá PDP
Nếu bổ sung/sync data, nên giữ nguyên các field trên để PDP vẫn hoạt động:
- `slug`
- `name`
- `category`
- `subcategory`
- `shortDescription`
- `price`
- `badges`
- `images`
- `thumbnail`
- `licenseType`
- `activationType`
- `deliveryType`
- `warranty`
- `support`
- `highlights`
- `descriptionSections`
- `specifications`
- `faqs`
- `relatedProductSlugs`
- `seo`
- `cta`

## Đề xuất field bổ sung cho listing
Các trang listing hiện tại đang dùng kiểu product rút gọn trong `src/app/page.tsx`, `src/app/windows/page.tsx`, `src/app/office/page.tsx`:
- `group`
- `form`
- `availability`
- `pills`
- `includes`
- `description`
- `href`

Gợi ý bổ sung vào `products.json` để đồng bộ listing mà không phá PDP:
- `group`: `"windows" | "office"`
- `form`: mô tả hình thức bán, ví dụ `"USB · Fullbox · FPP"`
- `availability`: `"in_stock"`
- `pills[]`: các tag hiển thị trên listing, ví dụ `["Fullbox", "USB", "FPP", "Best seller"]`
- `includes[]`: 3 điểm nội dung chính hiển thị trong `ProductCard`
- `description`: mô tả ngắn dùng cho listing
- `href`: đường dẫn SEO, ví dụ `/san-pham/...`

Lưu ý:
- Các field này chỉ dùng cho listing/PDP hybrid đơn giản.
- Nếu sau này tách riêng listing data, có thể đổi thành `listing` object để tránh phình TypeScript type.
