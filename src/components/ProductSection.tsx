"use client";

import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/types/vietlicense";

type ProductSectionProps = {
  products: Product[];
};

export function ProductSection({ products }: ProductSectionProps) {
  return (
    <section className="sec products py-16" id="products">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="sec-head flex flex-col items-center text-center">
          <p className="eyebrow mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Danh sách sản phẩm</p>
          <h2 className="display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Chọn đúng <span className="text-[#0068ff]">Windows & Office</span> cho bạn
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            Cam kết 100% chính hãng bản quyền · License rõ ràng · Microsoft 365 subscription đúng gói · Xuất VAT theo yêu cầu
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Khách hàng lấy &gt;30 bản vui lòng inbox VietLicense để được báo giá riêng.
          </p>
        </div>

        <div className="home-product-grid mt-10 grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button type="button" className="btn btn-light home-product-show-more">
            Xem thêm 12 sản phẩm
          </button>
        </div>
      </div>
    </section>
  );
}
