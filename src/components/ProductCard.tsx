import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/vietlicense";
import { formatVND } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const pills = product.pills.slice(0, 3);

  return (
    <article className="flex w-[307px] flex-col overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
      {/* Image Section */}
      <div className="relative h-[305px] w-full overflow-hidden bg-[#eaf2f7]">
        {/* Badges - Top Left */}
        {pills.length > 0 && (
          <div className="absolute left-4 top-4 z-10 flex gap-2 flex-wrap">
            {pills.map((pill) => (
              <span
                key={pill}
                className="rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#374151] shadow-sm"
              >
                {pill}
              </span>
            ))}
          </div>
        )}
        {/* Product Image - Centered */}
        <div className="flex h-full w-full items-center justify-center p-6">
          <Image
            src={product.thumbnail}
            alt={product.name}
            width={220}
            height={220}
            className="max-h-[220px] max-w-[220px] object-contain"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        {/* Title */}
        <h3 className="text-base font-bold leading-[1.3] text-[#111827]">
          {product.name}
        </h3>

        {/* Meta - Pills style */}
        {pills.length > 0 && (
          <p className="text-xs font-semibold text-[#64748b]">
            {pills.join(" · ")}
          </p>
        )}

        {/* Description */}
        {product.description && (
          <p className="text-sm leading-[1.6] text-[#5f6b7a]">
            {product.description}
          </p>
        )}

        {/* Bullet List */}
        {product.includes.length > 0 && (
          <ul className="space-y-1.5">
            {product.includes.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-[#5f6b7a]">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#93c5fd]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Info Box */}
        <div className="flex items-center gap-2 rounded-xl border border-[#bfdbfe] bg-[#eff6ff] px-3 py-2.5 mt-auto">
          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3b82f6] text-xs font-bold text-white">
            i
          </div>
          <p className="text-xs font-medium text-[#334155]">
            License rõ ràng · Xuất VAT đầy đủ
          </p>
        </div>

        {/* Price Section */}
        <div className="mt-2 space-y-2">
          {/* Retail Label */}
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#9ca3af]">
            Giá bán lẻ
          </p>

          {/* Retail Price */}
          <p className="text-[22px] font-extrabold text-[#111827]">
            {formatVND(product.price.retailValue)}
          </p>

          {/* Bulk Price Pill */}
          {product.price.bulkLabel && product.price.bulkValue && (
            <div className="flex items-center gap-2 rounded-full border border-[#bfdbfe] bg-[#f8fafc] px-3 py-1.5 justify-between">
              <span className="text-xs font-medium text-[#5f6b7a]">
                Đơn giá từ 5 sản phẩm
              </span>
              <span className="text-xs font-bold text-[#111827]">
                {formatVND(product.price.bulkValue)}
              </span>
            </div>
          )}
          {product.price.bulkLabel && (product.price.bulkValue === null || product.price.bulkValue === undefined || product.price.bulkValue === '0') && (
            <div className="flex items-center gap-2 rounded-full border border-[#bfdbfe] bg-[#f8fafc] px-3 py-1.5 justify-between">
              <span className="text-xs font-medium text-[#5f6b7a]">
              Số lượng
              </span>
              <span className="text-xs font-bold text-[#111827]">
                {product.price.bulkLabel}
              </span>
            </div>
          )}
        </div>

        {/* Zalo Button */}
        <Link
          href={product.href}
          className="mt-3 flex h-[42px] items-center justify-center rounded-full bg-[#0877ff] text-sm font-bold text-white transition-colors hover:bg-[#0066ee]"
        >
          Chốt qua Zalo
        </Link>

        {/* View Details Link */}
        <Link
          href={product.href}
          className="mt-[14px] text-center text-[13px] font-bold text-[#374151] hover:text-[#0068ff]"
        >
          Xem chi tiết →
        </Link>
      </div>
    </article>
  );
}
