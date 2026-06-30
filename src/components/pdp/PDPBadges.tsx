type BadgeVariant = "default" | "primary" | "success" | "warning" | "danger";

type Badge = {
  label: string;
  variant: BadgeVariant;
};

type PDPBadgesProps = {
  badges: Badge[];
};

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-secondary text-secondary-foreground",
  primary: "bg-[#0068ff] text-white",
  success: "bg-green-100 text-green-700",
  warning: "bg-yellow-100 text-yellow-700",
  danger: "bg-red-100 text-red-700",
};

export function PDPBadges({ badges }: PDPBadgesProps) {
  if (!badges || badges.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge) => (
        <span
          key={badge.label}
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${variantClasses[badge.variant]}`}
        >
          {badge.label}
        </span>
      ))}
    </div>
  );
}
