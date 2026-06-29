import Link from "next/link";
import { FacebookIcon, PhoneIcon } from "./icons";
import type { ContactOption } from "@/types/vietlicense";

type ContactChannelsProps = {
  options: ContactOption[];
};

const iconByType = {
  facebook: FacebookIcon,
  zalo: PhoneIcon,
  phone: PhoneIcon,
};

export function ContactChannels({ options }: ContactChannelsProps) {
  return (
    <section className="contact-channels py-10">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="contact-panel rounded-3xl bg-gradient-to-br from-[#f8fbfd] to-[#eaf2f8] p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="contact-copy max-w-xl">
              <p className="eyebrow mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Mua hàng & tư vấn</p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">Liên hệ trực tiếp</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Chọn kênh bạn đang dùng. Việt License kiểm tra đúng phiên bản, tình trạng hàng và chứng từ trước khi chốt đơn.
              </p>
            </div>

            <div className="contact-options grid w-full grid-cols-1 gap-4 md:w-auto md:grid-cols-3">
              {options.map((option) => {
                const Icon = iconByType[option.icon];
                return (
                  <Link
                    key={option.title}
                    href={option.href || "#"}
                    className="contact-option flex items-center gap-4 rounded-2xl border border-border bg-white p-5 transition-colors"
                    target={option.href?.startsWith("http") ? "_blank" : undefined}
                    rel={option.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <span className="contact-icon flex h-10 w-10 items-center justify-center rounded-full bg-[#0e1014] text-white">
                      {Icon && <Icon className="h-5 w-5" />}
                    </span>
                    <span>
                      <b className="block text-sm font-semibold text-foreground">{option.title}</b>
                      <small className="text-xs text-muted-foreground">{option.subtitle}</small>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
