import Image from "next/image";
import Link from "next/link";
import type { EvidenceAction } from "@/types/vietlicense";

type EvidenceSectionProps = {
  actions: EvidenceAction[];
};

export function EvidenceSection({ actions }: EvidenceSectionProps) {
  return (
    <section className="sec evidence relative py-16">
      <div className="absolute inset-0" style={{ background: "linear-gradient(rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0) 56%)" }} />
      <div className="evidence-inner relative mx-auto max-w-[1440px] px-4">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="evidence-content">
            <p className="eyebrow mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Minh bạch sau mua</p>
            <h2 className="display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Chứng từ, hóa đơn và license rõ ràng</h2>
            <p className="lead mt-3 text-sm text-muted-foreground md:text-base">
              Khách nhận được hóa đơn VAT khi yêu cầu, thông tin license, hướng dẫn kích hoạt và có thể kiểm tra hồ sơ đối tác trên Microsoft Marketplace.
            </p>

            <div className="evidence-actions mt-6 flex flex-wrap gap-3">
              {actions.map((action) => (
                <Link
                  key={action.text}
                  href={action.href}
                  className={`btn btn-${action.variant}`}
                  target={action.href.startsWith("http") ? "_blank" : undefined}
                  rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {action.text}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-border bg-white">
              <Image src="/images/optimized/microsoft-marketplace-partner-800.jpg" alt="Hồ sơ OLIU GROUP COMPANY LIMITED trên Microsoft Marketplace" fill className="object-cover" />
            </div>
            <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-border bg-white">
              <Image src="/images/optimized/vat-invoice-sample-800.jpg" alt="Mẫu hóa đơn VAT đã che thông tin nhạy cảm" fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-foreground">
                  Mẫu minh họa đã che thông tin nhạy cảm.
                </span>
              </div>
            </div>
            <div className="relative h-16 w-full overflow-hidden rounded-2xl border border-border bg-white md:col-span-2">
              <Image src="/images/logo-icon.png" alt="Việt License" width={32} height={32} className="absolute left-4 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
