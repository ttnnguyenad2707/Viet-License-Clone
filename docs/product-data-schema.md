# Product Data Schema

## Overview

File `src/data/products.json` là nguồn dữ liệu chuẩn cho tất cả Product Detail Pages (PDP). Schema được thiết kế đủ linh hoạt cho nhiều loại sản phẩm: Windows, Office, Server, SQL, Microsoft 365.

## File Structure

```
src/data/
  products.json   ← Nguồn dữ liệu chính
```

## Top-level Structure

```json
{
  "$schema": "./product-data-schema.json",
  "products": [ ... ]
}
```

## Product Object

### Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | `string` | Unique identifier (thường = slug, dùng nội bộ) |
| `slug` | `string` | URL slug, dùng cho dynamic route `/san-pham/[slug]` |
| `name` | `string` | Tên sản phẩm hiển thị trên PDP |

### Category Fields

| Field | Type | Description |
|-------|------|-------------|
| `category` | `string` | Nhóm sản phẩm: `Windows`, `Office`, `Server`, `SQL`, `M365` |
| `subcategory` | `string` | Phân loại phụ: `Windows 10/11`, `Office 2021`, `Office 365` |

### Pricing

| Field | Type | Description |
|-------|------|-------------|
| `price.retail` | `number \| null` | Giá lẻ (VND, số nguyên không dấu phẩy) |
| `price.retailLabel` | `string` | Giá lẻ format: `"2.650.000đ"` |
| `price.bulk` | `number \| null` | Giá sỉ từ `bulkMinQty` bản |
| `price.bulkLabel` | `string` | Giá sỉ format |
| `price.bulkMinQty` | `number` | Số lượng tối thiểu để được giá sỉ |
| `price.bulkNote` | `string` | Ghi chú: `"Từ 5 bản"` |
| `price.vatNote` | `string` | Ghi chú VAT |
| `price.largeQtyNote` | `string` | Ghi chú khi mua số lượng lớn (>30) |
| `currency` | `string` | `"VND"` |

### Visual

| Field | Type | Description |
|-------|------|-------------|
| `badges[]` | `Badge[]` | Mảng badge hiển thị trên PDP |
| `images[]` | `ProductImage[]` | Mảng ảnh sản phẩm |
| `thumbnail` | `string` | Đường dẫn ảnh thumbnail |

### Badge Object

```json
{
  "label": "Best seller",
  "variant": "primary"
}
```

`variant`: `"default"` | `"primary"` | `"success"` | `"warning"` | `"danger"`

### ProductImage Object

```json
{
  "src": "/images/products/.../box-front.webp",
  "alt": "Hộp Windows 11 Pro FPP/USB thực tế",
  "caption": "Hộp Windows 11 Pro FPP/USB thực tế"
}
```

### License & Activation

| Field | Type | Description |
|-------|------|-------------|
| `licenseType` | `string` | Loại license: `FPP`, `OEM`, `Volume`, `Subscription`, `Digital License` |
| `activationType` | `string` | Cách kích hoạt: `Product Key`, `Digital Activation`, `KMS`, `Bind Account` |
| `warranty.duration` | `string` | Hạn sử dụng: `"vĩnh viễn"`, `"1 năm"`, `"theo thuê bao"` |
| `warranty.transferable` | `boolean` | Có thể chuyển máy không |
| `warranty.transferNote` | `string` | Ghi chú chuyển máy |

### Delivery

| Field | Type | Description |
|-------|------|-------------|
| `deliveryType.form` | `string` | Hình thức: `"Fullbox"`, `"No Box"`, `"USB"`, `"DVD"`, `"Digital"` |
| `deliveryType.physicalItems[]` | `string[]` | Các item vật lý trong hộp |
| `deliveryType.digitalItems[]` | `string[]` | Các item số được gửi |
| `deliveryType.notes[]` | `string[]` | Ghi chú về hình thức bàn giao |

### Support

| Field | Type | Description |
|-------|------|-------------|
| `support.installGuide` | `boolean` | Có hướng dẫn cài đặt |
| `support.activationHelp` | `boolean` | Có hỗ trợ kích hoạt |
| `support.upgradeConsult` | `boolean` | Có tư vấn nâng cấp |
| `support.channels[]` | `string[]` | Kênh hỗ trợ: `Zalo`, `Hotline`, `Facebook`, `Email` |
| `support.details[]` | `string[]` | Chi tiết hỗ trợ |

### Content

| Field | Type | Description |
|-------|------|-------------|
| `shortDescription` | `string` | Mô tả ngắn 1 dòng cho card PDP |
| `suitableFor[]` | `string[]` | Danh sách đối tượng phù hợp |
| `highlights[]` | `Highlight[]` | Danh sách điểm nổi bật |
| `descriptionSections[]` | `DescriptionSection[]` | Các vùng mô tả chi tiết |
| `specifications[]` | `SpecRow[]` | Bảng thông số kỹ thuật |
| `faqs[]` | `FAQ[]` | Danh sách câu hỏi thường gặp |

### Highlight Object

```json
{
  "icon": "check",
  "text": "Sản phẩm chính hãng Microsoft"
}
```

`icon`: tên Lucide icon (không có hậu tố `Icon`)

### DescriptionSection Object

```json
{
  "title": "Thông tin sản phẩm",
  "content": "Mô tả tự do (có thể rỗng)",
  "bullets": ["...", "..."],
  "specTable": [
    { "label": "Nhóm sản phẩm", "value": "Windows" }
  ]
}
```

Chỉ dùng `bullets` HOẶC `specTable`, không dùng cả hai cùng lúc.

### SpecRow Object

```json
{ "label": "Phiên bản", "value": "Windows 10/11 Home/Pro" }
```

### FAQ Object

```json
{
  "question": "Câu hỏi...",
  "answer": "Câu trả lời..."
}
```

### Navigation & SEO

| Field | Type | Description |
|-------|------|-------------|
| `relatedProductSlugs[]` | `string[]` | Mảng slug của sản phẩm liên quan |
| `seo.title` | `string` | SEO title |
| `seo.description` | `string` | SEO meta description |
| `seo.keywords` | `string` | SEO keywords (comma-separated) |

### CTA (Call-to-Action)

```json
{
  "cta": {
    "primary": {
      "label": "Chốt đơn qua Zalo",
      "href": "https://zalo.me/0382520281",
      "channel": "zalo"
    },
    "secondary": {
      "label": "Gọi hotline",
      "href": "tel:0382520281",
      "channel": "phone"
    },
    "contacts": [
      { "channel": "zalo", "name": "...", "href": "..." },
      { "channel": "facebook", "name": "...", "href": "..." },
      { "channel": "phone", "name": "...", "href": "..." }
    ],
    "trustBadges": [
      "Xuất hóa đơn VAT đầy đủ",
      "License rõ ràng"
    ]
  }
}
```

`channel`: `"zalo"` | `"facebook"` | `"phone"` | `"email"`

## Usage in PDP

### 1. Type Definition

Tạo `src/types/product.ts`:

```typescript
import type { Product } from "@/data/products";

export type { Product };
```

### 2. Fetching a Product

```typescript
import productsData from "@/data/products.json";

export function getProduct(slug: string): Product | undefined {
  return productsData.products.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return productsData.products.map((p) => p.slug);
}
```

### 3. Dynamic Route Params

```typescript
// app/san-pham/[slug]/page.tsx
export async function generateStaticParams() {
  return productsData.products.map((p) => ({ slug: p.slug }));
}
```

## Null/Empty Handling

| Type | Value |
|------|-------|
| String rỗng | `""` |
| Array rỗng | `[]` |
| Object rỗng | `{}` |
| Giá không áp dụng | `null` cho `price.retail` / `price.bulk` |

## Adding New Products

1. Thêm object vào mảng `products` trong `products.json`
2. Điền tất cả fields — dùng `""` hoặc `[]` cho fields không áp dụng
3. Cập nhật `relatedProductSlugs` của các sản phẩm liên quan
4. Chạy `npm run typecheck` để xác nhận không lỗi
