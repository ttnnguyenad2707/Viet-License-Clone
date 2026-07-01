# PDP Required Fields Report

## Mục đích
Báo cáo phân tích các field mà dynamic PDP hiện đang yêu cầu, so sánh với dữ liệu thực tế trong `src/data/products.json`, và liệt kê rủi ro null/undefined.

Căn cứ đọc:
- `src/app/san-pham/[slug]/page.tsx`
- `src/components/pdp/PDPPriceCTA.tsx`
- `src/components/pdp/PDPImageGallery.tsx`
- `src/components/pdp/PDPBadges.tsx`
- `src/components/pdp/PDPProductInfo.tsx`
- `src/components/pdp/PDPDescriptionSections.tsx`
- `src/components/pdp/PDPSupport.tsx`
- `src/components/pdp/PDPFAQ.tsx`
- `src/components/pdp/PDPRelatedProducts.tsx`
- `src/types/product.ts`
- `src/data/products.json`

## 1. Field bắt buộc cho PDP

Dựa trên code PDP hiện tại, các field sau được sử dụng trực tiếp hoặc gián tiếp:

| Field | Nơi dùng | Ghi chú |
|-------|----------|---------|
| `slug` | `page.tsx`, `product-utils.ts` | Dùng để lookup và routing `/san-pham/[slug]` |
| `name` | `page.tsx` | Tiêu đề PDP `<h1>` |
| `category` | `page.tsx` | Breadcrumb category |
| `subcategory` | `page.tsx` | Breadcrumb subcategory |
| `shortDescription` | `page.tsx` | Mô tả ngắn |
| `price.retailLabel` | `page.tsx`, `PDPPriceCTA.tsx` | Hiển thị giá lẻ |
| `price.bulk` | `PDPPriceCTA.tsx` | Kiểm tra `price.bulk != null` |
| `price.bulkLabel` | `PDPPriceCTA.tsx` | Hiển thị giá sỉ |
| `price.bulkNote` | `PDPPriceCTA.tsx` | Ghi chú giá sỉ |
| `price.largeQtyNote` | `PDPPriceCTA.tsx` | Ghi chú số lượng lớn |
| `badges` | `PDPBadges.tsx` | Danh sách badge |
| `images` | `PDPImageGallery.tsx` | Gallery ảnh chính |
| `warranty.duration` | `PDPSupport.tsx` | Hiển thị bảo hành |
| `warranty.transferable` | `PDPSupport.tsx` | Hiển thị chuyển máy |
| `warranty.transferNote` | `PDPSupport.tsx` | Ghi chú chuyển máy |
| `support.details` | `PDPSupport.tsx` | Chi tiết hỗ trợ |
| `support.channels` | `PDPSupport.tsx` | Kênh hỗ trợ |
| `highlights` | `page.tsx` | Danh sách điểm nổi bật |
| `descriptionSections` | `page.tsx` | Các section mô tả |
| `specifications` | `page.tsx` | Bảng thông số kỹ thuật |
| `faqs` | `PDPFAQ.tsx` | FAQ accordion |
| `relatedProductSlugs` | `page.tsx`, `product-utils.ts` | Sản phẩm liên quan |
| `seo.title` | `page.tsx` | SEO title |
| `seo.description` | `page.tsx` | SEO description |
| `seo.keywords` | `page.tsx` | SEO keywords |
| `cta.primary` | `PDPPriceCTA.tsx` | CTA chính |
| `cta.primary.label` | `PDPPriceCTA.tsx` | Label CTA chính |
| `cta.primary.href` | `PDPPriceCTA.tsx` | Link CTA chính |
| `cta.primary.channel` | `PDPPriceCTA.tsx` | Channel CTA chính |
| `cta.secondary` | `PDPPriceCTA.tsx` | CTA phụ |
| `cta.secondary.label` | `PDPPriceCTA.tsx` | Label CTA phụ |
| `cta.secondary.href` | `PDPPriceCTA.tsx` | Link CTA phụ |
| `cta.trustBadges` | `PDPPriceCTA.tsx` | Trust badges |

## 2. Field optional / có fallback trong PDP

| Field | Xử lý trong code | Fallback an toàn đề xuất |
|-------|------------------|--------------------------|
| `badges` | `PDPBadges` return null nếu rỗng | `[]` |
| `images` | `PDPImageGallery` return null nếu rỗng | `[]` |
| `shortDescription` | render có điều kiện | `""` |
| `highlights` | render có điều kiện | `[]` |
| `descriptionSections` | render có điều kiện | `[]` |
| `specifications` | render có điều kiện | `[]` |
| `faqs` | render có điều kiện | `[]` |
| `warranty` | render có điều kiện | `null` / `undefined` |
| `support` | render có điều kiện | `null` / `undefined` |
| `cta` | render có điều kiện | `null` / `undefined` |
| `cta.trustBadges` | render có điều kiện | `[]` |
| `relatedProductSlugs` | `product-utils.ts` đã có guard | `[]` |
| `price.bulk` | render có điều kiện | `null` |
| `price.largeQtyNote` | render có điều kiện | `""` |

## 3. Product nào đang thiếu field nào

Dựa trên dữ liệu hiện có trong `src/data/products.json`:
- 2 sản phẩm đầu (`windows-10-11-home-pro-fpp-usb-fullbox`, `office-2021-pro-plus-fullbox`) có dữ liệu đầy đủ theo schema PDP, không thiếu field quan trọng.
- Các sản phẩm còn lại đang thiếu nhóm field cấu trúc PDP và có nguy cơ lỗi nếu được render trực tiếp.

Cụ thể từng sản phẩm:

### windows-10-11-home-pro-dvd-fullbox
- Thiếu: `price`, `currency`, `badges`, `images`, `thumbnail`, `licenseType`, `activationType`, `deliveryType`, `warranty`, `support`, `suitableFor`, `highlights`, `descriptionSections`, `specifications`, `faqs`, `relatedProductSlugs`, `seo`, `cta`
- Thiếu: `shortDescription`, `displayOrder`
- `displayOrder`: `null`

### windows-10-11-home-pro-fpp-no-box
- Thiếu: `price`, `currency`, `badges`, `images`, `thumbnail`, `licenseType`, `activationType`, `deliveryType`, `warranty`, `support`, `suitableFor`, `highlights`, `descriptionSections`, `specifications`, `faqs`, `relatedProductSlugs`, `seo`, `cta`
- Thiếu: `shortDescription`, `displayOrder`
- `displayOrder`: `null`

### windows-server-2016-2019
- Thiếu: `price`, `currency`, `badges`, `images`, `thumbnail`, `licenseType`, `activationType`, `deliveryType`, `warranty`, `support`, `suitableFor`, `highlights`, `descriptionSections`, `specifications`, `faqs`, `relatedProductSlugs`, `seo`, `cta`
- Thiếu: `shortDescription`, `displayOrder`
- `displayOrder`: `null`

### sql-server-2019-2022
- Thiếu: `price`, `currency`, `badges`, `images`, `thumbnail`, `licenseType`, `activationType`, `deliveryType`, `warranty`, `support`, `suitableFor`, `highlights`, `descriptionSections`, `specifications`, `faqs`, `relatedProductSlugs`, `seo`, `cta`
- Thiếu: `shortDescription`, `displayOrder`
- `displayOrder`: `null`

### office-2021-pro-plus-bind-account-fullbox
- Thiếu: `price`, `currency`, `badges`, `images`, `thumbnail`, `licenseType`, `activationType`, `deliveryType`, `warranty`, `support`, `suitableFor`, `highlights`, `descriptionSections`, `specifications`, `faqs`, `relatedProductSlugs`, `seo`, `cta`
- Thiếu: `shortDescription`, `displayOrder`
- `displayOrder`: `null`

### office-2021-pro-plus-no-box
- Thiếu: `price`, `currency`, `badges`, `images`, `thumbnail`, `licenseType`, `activationType`, `deliveryType`, `warranty`, `support`, `suitableFor`, `highlights`, `descriptionSections`, `specifications`, `faqs`, `relatedProductSlugs`, `seo`, `cta`
- Thiếu: `shortDescription`, `displayOrder`
- `displayOrder`: `null`

### office-2021-pro-plus-bind-account-no-box
- Thiếu: `price`, `currency`, `badges`, `images`, `thumbnail`, `licenseType`, `activationType`, `deliveryType`, `warranty`, `support`, `suitableFor`, `highlights`, `descriptionSections`, `specifications`, `faqs`, `relatedProductSlugs`, `seo`, `cta`
- Thiếu: `shortDescription`, `displayOrder`
- `displayOrder`: `null`

### office-2019-pro-plus-fullbox
- Thiếu: `price`, `currency`, `badges`, `images`, `thumbnail`, `licenseType`, `activationType`, `deliveryType`, `warranty`, `support`, `suitableFor`, `highlights`, `descriptionSections`, `specifications`, `faqs`, `relatedProductSlugs`, `seo`, `cta`
- Thiếu: `shortDescription`, `displayOrder`
- `displayOrder`: `null`

### office-2019-pro-plus-no-box
- Thiếu: `price`, `currency`, `badges`, `images`, `thumbnail`, `licenseType`, `activationType`, `deliveryType`, `warranty`, `support`, `suitableFor`, `highlights`, `descriptionSections`, `specifications`, `faqs`, `relatedProductSlugs`, `seo`, `cta`
- Thiếu: `shortDescription`, `displayOrder`
- `displayOrder`: `null`

### office-2019-pro-plus-bind-account-fullbox
- Thiếu: `price`, `currency`, `badges`, `images`, `thumbnail`, `licenseType`, `activationType`, `deliveryType`, `warranty`, `support`, `suitableFor`, `highlights`, `descriptionSections`, `specifications`, `faqs`, `relatedProductSlugs`, `seo`, `cta`
- Thiếu: `shortDescription`, `displayOrder`
- `displayOrder`: `null`

### office-2019-pro-plus-bind-account-no-box
- Thiếu: `price`, `currency`, `badges`, `images`, `thumbnail`, `licenseType`, `activationType`, `deliveryType`, `warranty`, `support`, `suitableFor`, `highlights`, `descriptionSections`, `specifications`, `faqs`, `relatedProductSlugs`, `seo`, `cta`
- Thiếu: `shortDescription`, `displayOrder`
- `displayOrder`: `null`

### microsoft-365-business-basic
- Thiếu: `price`, `currency`, `badges`, `images`, `thumbnail`, `licenseType`, `activationType`, `deliveryType`, `warranty`, `support`, `suitableFor`, `highlights`, `descriptionSections`, `specifications`, `faqs`, `relatedProductSlugs`, `seo`, `cta`
- Thiếu: `shortDescription`, `displayOrder`
- `displayOrder`: `null`

### microsoft-365-business-standard
- Thiếu: `price`, `currency`, `badges`, `images`, `thumbnail`, `licenseType`, `activationType`, `deliveryType`, `warranty`, `support`, `suitableFor`, `highlights`, `descriptionSections`, `specifications`, `faqs`, `relatedProductSlugs`, `seo`, `cta`
- Thiếu: `shortDescription`, `displayOrder`
- `displayOrder`: `null`

### microsoft-365-business-premium
- Thiếu: `price`, `currency`, `badges`, `images`, `thumbnail`, `licenseType`, `activationType`, `deliveryType`, `warranty`, `support`, `suitableFor`, `highlights`, `descriptionSections`, `specifications`, `faqs`, `relatedProductSlugs`, `seo`, `cta`
- Thiếu: `shortDescription`, `displayOrder`
- `displayOrder`: `null`

## 4. Field có nguy cơ gây lỗi null/undefined

| Field / nhóm | Rủi ro | Hậu quả |
|--------------|--------|---------|
| `price` | Nhiều product dùng shape cũ `retailLabel/retailValue/bulkLabel/bulkValue`, PDP đang đọc `price.retailLabel`, `price.bulk`, `price.bulkLabel`, `price.bulkNote`, `price.largeQtyNote` | Render lỗi chính tả, rỗng, hoặc `undefined` |
| `displayOrder` | Tất cả product đều là `null` | Sort không ổn định nếu thêm sản phẩm mới |
| `badges` | Thiếu ở 11/13 product | `PDPBadges` không lỗi nếu `[]`, nhưng UI mất badge |
| `images` | Thiếu ở 11/13 product | `PDPImageGallery` có fallback, nhưng không có gallery |
| `thumbnail` | Thiếu ở 11/13 product | Ảnh đại diện PDP có thể rỗng nếu homepage/PDP tái dùng |
| `category` / `subcategory` | Thiếu ở 11/13 product | Breadcrumb PDP có thể rỗng |
| `shortDescription` | Thiếu ở 11/13 product | Mô tả ngắn PDP rỗng |
| `highlights` | Thiếu ở 11/13 product | Mất section điểm nổi bật |
| `descriptionSections` | Thiếu ở 11/13 product | Mất phần mô tả chi tiết |
| `specifications` | Thiếu ở 11/13 product | Mất bảng thông số |
| `faqs` | Thiếu ở 11/13 product | Mất FAQ |
| `relatedProductSlugs` | Thiếu ở 11/13 product | `getRelatedProducts` trả `[]`, section liên quan rỗng |
| `seo` | Thiếu ở 11/13 product | SEO metadata rỗng hoặc fallback generic |
| `cta` | Thiếu ở 11/13 product | Mất button chốt đơn / gọi hotline |
| `warranty` | Thiếu ở 11/13 product | Mất section bảo hành |
| `support` | Thiếu ở 11/13 product | Mất section hỗ trợ |
| `licenseType` / `activationType` | Thiếu ở 11/13 product | Không lỗi ngay, nhưng mất thông tin cấu trúc nếu sau này render ra PDP |

## 5. Đề xuất default value an toàn

Đề xuất theo nhóm:

| Field | Default an toàn | Lý do |
|-------|------------------|--------|
| `displayOrder` | `Number.MAX_SAFE_INTEGER` | Giữ sản phẩm thiếu thứ tự ở cuối danh sách |
| `badges` | `[]` | Tránh lỗi map và giữ UI không vỡ |
| `images` | `[]` | `PDPImageGallery` đã có fallback UI "Không có ảnh" |
| `thumbnail` | `""` | Tránh `Image` nhận `undefined` |
| `shortDescription` | `""` | Tránh `undefined` trong JSX |
| `category` | `"Uncategorized"` | Breadcrumb luôn có nhãn |
| `subcategory` | `"General"` | Breadcrumb luôn có nhãn phụ |
| `price.retailLabel` | `"Liên hệ"` | Tránh blank khi thiếu giá lẻ |
| `price.retailValue` | `""` | Giữ layout, không hiện sai giá |
| `price.bulkLabel` | `""` | Tránh hiển thị nhãn sỉ thiếu giá trị |
| `price.bulkNote` | `""` | Tránh lỗi render |
| `price.largeQtyNote` | `""` | Tránh lỗi render |
| `highlights` | `[]` | Tránh lỗi map và giữ layout |
| `descriptionSections` | `[]` | Tránh lỗi map |
| `specifications` | `[]` | Tránh lỗi map |
| `faqs` | `[]` | Tránh lỗi map |
| `relatedProductSlugs` | `[]` | `product-utils.ts` đã xử lý, giữ ổn định |
| `seo.title` | `product.name` | Tránh SEO rỗng |
| `seo.description` | `product.shortDescription` | Tránh SEO rỗng |
| `seo.keywords` | `""` | Tránh SEO thiếu |
| `cta` | `null` | Giữ nguyên vì đã có guard render |
| `warranty` | `null` | Giữ nguyên vì đã có guard render |
| `support` | `null` | Giữ nguyên vì đã có guard render |
| `licenseType` | `""` | Tránh undefined nếu sau này hiển thị |
| `activationType` | `""` | Tránh undefined nếu sau này hiển thị |

## 6. Kết luận ngắn
- 2 sản phẩm hiện có dữ liệu đầy đủ cho PDP.
- 11 sản phẩm còn lại đang ở dạng “list/card-ready”, chưa đủ dữ liệu cho dynamic PDP.
- Field rủi ro cao nhất là `price`, `displayOrder`, `badges`, `images`, `thumbnail`, `seo`, `cta`, `descriptionSections`, `specifications`.
- Không nên mở routing `/san-pham/[slug]` đại trà cho 11 sản phẩm trên cho đến khi bổ sung dữ liệu PDP hoặc thêm fallback an toàn.
