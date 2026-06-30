import Link from "next/link";

type PDPSectionProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
};

export function PDPSection({
  title,
  children,
  className = "",
  fullWidth = false,
}: PDPSectionProps) {
  return (
    <section className={`py-12 ${className}`}>
      <div className={fullWidth ? "" : "mx-auto max-w-[1440px] px-4"}>
        {title && (
          <div className="mb-8">
            <h2 className="display text-2xl font-semibold tracking-tight text-foreground">
              {title}
            </h2>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
