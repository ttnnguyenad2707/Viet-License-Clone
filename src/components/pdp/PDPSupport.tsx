import type { Product } from "@/types/product";

type PDPSupportProps = {
  support: Product["support"];
  warranty: Product["warranty"];
};

export function PDPSupport({ support, warranty }: PDPSupportProps) {
  return (
    <div className="space-y-6">
      {/* Warranty card */}
      {warranty && (
        <div className="rounded-2xl border border-border bg-white p-5">
          <h3 className="mb-3 text-sm font-semibold text-foreground">
            Bảo hành &amp; Chuyển nhượng
          </h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <span className="check-icon mt-0.5 h-4 w-4 shrink-0 flex-shrink-0" />
              <span>Hạn sử dụng: <strong className="text-foreground">{warranty.duration}</strong></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="check-icon mt-0.5 h-4 w-4 shrink-0 flex-shrink-0" />
              <span>Chuyển máy: <strong className="text-foreground">{warranty.transferable ? "Có thể" : "Không"}</strong></span>
            </div>
            {warranty.transferNote && (
              <p className="pl-7 text-xs">{warranty.transferNote}</p>
            )}
          </div>
        </div>
      )}

      {/* Support card */}
      {support && (
        <div className="rounded-2xl border border-border bg-white p-5">
          <h3 className="mb-3 text-sm font-semibold text-foreground">
            Hỗ trợ sau mua
          </h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            {support.details?.map((detail, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="check-icon mt-0.5 h-4 w-4 shrink-0 flex-shrink-0" />
                <span>{detail}</span>
              </div>
            ))}
            {support.channels && support.channels.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {support.channels.map((ch) => (
                  <span
                    key={ch}
                    className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground"
                  >
                    {ch}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
