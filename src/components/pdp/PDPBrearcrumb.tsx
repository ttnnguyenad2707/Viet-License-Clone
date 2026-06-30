import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PDPBreadcrumbProps = {
  items: BreadcrumbItem[];
};

export function PDPBreadcrumb({ items }: PDPBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-5">
      <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
        <li>
          <Link href="/" className="hover:text-foreground transition-colors">
            Trang chủ
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            <span className="opacity-40">/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-foreground transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
