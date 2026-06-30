export type BadgeVariant = "default" | "primary" | "success" | "warning" | "danger";

export type ContactChannel = "zalo" | "facebook" | "phone" | "email";

export interface ProductBadge {
  label: string;
  variant: BadgeVariant;
}

export interface ProductImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface PriceInfo {
  retail: number | null;
  retailLabel: string;
  bulk: number | null;
  bulkLabel: string;
  bulkMinQty: number;
  bulkNote: string;
  vatNote: string;
  largeQtyNote: string;
}

export interface DeliveryType {
  form: string;
  physicalItems: string[];
  digitalItems: string[];
  notes: string[];
}

export interface WarrantyInfo {
  duration: string;
  transferable: boolean;
  transferNote: string;
}

export interface SupportInfo {
  installGuide: boolean;
  activationHelp: boolean;
  upgradeConsult: boolean;
  channels: string[];
  details: string[];
}

export interface Highlight {
  icon: string;
  text: string;
}

export interface DescriptionSection {
  title: string;
  content: string;
  bullets?: string[];
  specTable?: SpecRow[];
}

export interface SpecRow {
  label: string;
  value: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface ProductSEO {
  title: string;
  description: string;
  keywords: string;
}

export interface CTAContact {
  channel: ContactChannel;
  name: string;
  href: string;
}

export interface CTAButton {
  label: string;
  href: string;
  channel: ContactChannel;
}

export interface ProductCTA {
  primary: CTAButton;
  secondary: CTAButton;
  contacts: CTAContact[];
  trustBadges: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  subcategory: string;
  shortDescription: string;
  price: PriceInfo;
  currency: string;
  badges: ProductBadge[];
  images: ProductImage[];
  thumbnail: string;
  licenseType: string;
  activationType: string;
  deliveryType: DeliveryType;
  warranty: WarrantyInfo;
  support: SupportInfo;
  suitableFor: string[];
  highlights: Highlight[];
  descriptionSections: DescriptionSection[];
  specifications: SpecRow[];
  faqs: ProductFAQ[];
  relatedProductSlugs: string[];
  seo: ProductSEO;
  cta: ProductCTA;
}
