import Link from "next/link";

export function BusinessVATSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Kiểm tra hóa đơn VAT XML
            </p>
            <h2 className="display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Khách có thể tự đối chiếu hóa đơn trên Cổng hóa đơn điện tử
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Sau khi chuyển khoản thành công và thông tin xuất hóa đơn hợp lệ, Việt License/Oliu Group gửi hóa đơn VAT điện tử về email nhận hóa đơn. Khách có thể tải file XML của hóa đơn và kiểm tra trên Cổng hóa đơn điện tử của Cục Thuế.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="https://hoadon.gov.vn"
                className="btn btn-dark btn-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nhận hóa đơn qua email
              </Link>
              <Link href="https://hoadon.gov.vn" className="btn btn-light btn-sm" target="_blank" rel="noopener noreferrer">
                Tải file XML
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-muted/60 p-6">
            <p className="text-sm font-semibold text-foreground">Cổng hóa đơn điện tử của Cục Thuế</p>
            <p className="mt-2 text-xs text-muted-foreground">
              Upload tại mục Đọc hóa đơn XML trên Cổng hóa đơn điện tử.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              Kế toán nội bộ vẫn nên lưu hồ sơ theo quy trình chứng từ của doanh nghiệp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
