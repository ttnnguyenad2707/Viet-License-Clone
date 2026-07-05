import { ArrowRightIcon } from "@/components/icons";

export function CompareBestValueEvidence() {
  return (
    <section className="bg-background py-12">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="mb-8 text-center">
          <p className="eyebrow mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Best value evidence
          </p>
          <h2 className="display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            VietLicense là mốc cân bằng
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
            Không rẻ nhất, không đắt nhất. Cân bằng giữa giá tốt, chứng từ VAT và hồ sơ Microsoft rõ ràng.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="flex flex-col items-stretch gap-4 md:flex-row md:items-center md:justify-between">
            {/* Left: Giá rất thấp */}
            <div className="relative flex-1 rounded-2xl border border-red-200 bg-red-50/50 p-6">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                <span className="text-xs font-semibold uppercase tracking-wide text-red-600">
                  Giá rất thấp
                </span>
              </div>
              <h3 className="text-lg font-semibold text-red-900">
                Key-only / Forum / Marketplace
              </h3>
              <p className="mt-2 text-sm text-red-700/80">
                Thường là key-only, forum, marketplace hoặc chưa thấy VAT/hợp đồng/bàn giao doanh nghiệp rõ trên nguồn công khai.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
                  5 nguồn
                </span>
                <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
                  Thiếu hồ sơ
                </span>
              </div>
            </div>

            {/* Connector */}
            <div className="relative flex flex-row items-center justify-center py-4 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:py-0">
              <div className="hidden md:block">
                <ArrowRightIcon className="h-8 w-8 text-muted-foreground/40" />
              </div>
              <div className="flex items-center gap-2 md:hidden">
                <div className="h-px w-8 bg-muted-foreground/30" />
                <span className="text-xs text-muted-foreground/50">so sánh</span>
                <div className="h-px w-8 bg-muted-foreground/30" />
              </div>
            </div>

            {/* Center: VietLicense - Highlighted */}
            <div className="relative flex-1 rounded-2xl border-2 border-[#0068ff] bg-white p-6 shadow-lg shadow-blue-500/10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0068ff] px-3 py-1 text-xs font-semibold text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  Đề xuất
                </span>
              </div>
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#0068ff]" />
                <span className="text-xs font-semibold uppercase tracking-wide text-[#0068ff]">
                  VietLicense
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Cân bằng giá + VAT + Hồ sơ
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Có tư vấn đúng SKU, VAT theo yêu cầu, hỗ trợ kích hoạt và hồ sơ Microsoft Marketplace rõ ràng.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                  VAT đầy đủ
                </span>
                <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                  Tư vấn SKU
                </span>
                <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                  Hỗ trợ kích hoạt
                </span>
              </div>
            </div>

            {/* Connector */}
            {/* <div className="relative hidden flex-row items-center justify-center py-4 md:flex md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:py-0">
              <ArrowRightIcon className="h-8 w-8 text-muted-foreground/40" />
            </div> */}

            {/* Right: Retail cao */}
            <div className="relative flex-1 rounded-2xl border border-gray-200 bg-gray-50/50 p-6">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-gray-400" />
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Retail cao
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-700">
                Kênh retail / Thương hiệu lớn
              </h3>
              <p className="mt-2 text-sm text-gray-600/80">
                Chứng từ hoặc thương hiệu retail rõ hơn, nhưng giá nhiều SKU cao hơn VietLicense.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                  5 nguồn
                </span>
                <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                  Giá cao
                </span>
              </div>
            </div>
          </div>

          {/* Price indicator line */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="flex flex-col items-center">
              <span className="text-xs font-semibold text-red-600">99.000đ</span>
              <span className="text-[10px] text-red-500">Thấp nhất</span>
            </div>
            <div className="relative h-1 flex-1 rounded-full bg-gradient-to-r from-red-400 via-blue-500 to-gray-400" />
            <div className="flex flex-col items-center">
              <span className="text-xs font-semibold text-gray-600">9.699.000đ</span>
              <span className="text-[10px] text-gray-500">Cao nhất</span>
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            Giá tham chiếu từ 20 nguồn công khai. Kiểm tra ngày 19/06/2026.
          </p>
        </div>
      </div>
    </section>
  );
}
