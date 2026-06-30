import Link from "next/link";

const steps = [
  {
    step: "01",
    title: "Gửi nhu cầu qua Zalo",
    body: "Số lượng máy, mục đích sử dụng và sản phẩm quan tâm.",
  },
  {
    step: "02",
    title: "Tư vấn phương án",
    body: "Tư vấn đúng phiên bản và hình thức phù hợp nhu cầu.",
  },
  {
    step: "03",
    title: "Nhận báo giá riêng",
    body: "Báo giá minh bạch theo số lượng, có xuất VAT.",
  },
  {
    step: "04",
    title: "Chốt và hỗ trợ sau mua",
    body: "Chốt đơn qua Zalo và được hỗ trợ kích hoạt, sử dụng.",
  },
];

const sendTips = [
  "Số lượng máy hoặc người dùng cần bản quyền.",
  "Nhu cầu sử dụng: văn phòng, kỹ thuật, kế toán.",
  "Ưu tiên Windows, Office, Microsoft 365 hay cả hai.",
  "Có cần xuất hóa đơn VAT hay không.",
];

export function BusinessWorkflowSection() {
  return (
    <section id="quy-trinh" className="bg-background py-16">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="mb-12 max-w-3xl">
          <h2 className="display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Rõ ràng từ tư vấn đến báo giá
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step) => (
            <div key={step.step} className="relative">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#0068ff] text-lg font-bold text-[#0068ff]">
                {step.step}
              </div>
              <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-3xl border border-border bg-white p-8">
          <h3 className="text-base font-semibold text-foreground">Nên gửi khi nhắn Zalo</h3>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {sendTips.map((tip, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-1 h-4 w-4 shrink-0 rounded-full bg-[#0068ff]" />
                <span className="text-sm text-muted-foreground">{tip}</span>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="https://zalo.me/0382520281" className="btn btn-zalo" target="_blank" rel="noopener noreferrer">
              Gửi nhu cầu qua Zalo
            </Link>
          </div>
        </div>
        <div className="mt-8 rounded-3xl border border-border bg-white p-8">
          <h3 className="text-base font-semibold text-foreground">Cam kết</h3>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-4 w-4 shrink-0 rounded-full bg-[#0068ff]" />
              <span className="text-sm text-muted-foreground">Sản phẩm chính hãng, license rõ ràng.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 h-4 w-4 shrink-0 rounded-full bg-[#0068ff]" />
              <span className="text-sm text-muted-foreground">Thông tin sản phẩm minh bạch, tư vấn đúng nhu cầu.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 h-4 w-4 shrink-0 rounded-full bg-[#0068ff]" />
              <span className="text-sm text-muted-foreground">Xuất VAT đầy đủ phục vụ chứng từ.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 h-4 w-4 shrink-0 rounded-full bg-[#0068ff]" />
              <span className="text-sm text-muted-foreground">Chiết khấu theo số lượng cho đơn mua nhiều.</span>
            </div>
            <div className="flex items-start gap-3 md:col-span-2">
              <span className="mt-1 h-4 w-4 shrink-0 rounded-full bg-[#0068ff]" />
              <span className="text-sm text-muted-foreground">Hỗ trợ sau mua và mở rộng khi cần thêm thiết bị.</span>
            </div>
          </div>
          <div className="mt-6">
            <Link href="/" className="btn btn-dark btn-sm">
              Xem danh mục sản phẩm
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
