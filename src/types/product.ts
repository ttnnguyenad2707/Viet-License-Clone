export interface ProductPrice {
  retail: number | null;
  retailLabel: string;
  bulk: number | null;
  bulkLabel: string;
  bulkMinQty: number | null;
  bulkNote: string;
  vatNote: string;
  largeQtyNote: string;
}

export interface ProductBadge {
  label: string;
  variant: string;
}

export interface ProductImage {
  src: string;
  alt: string;
  caption: string;
}

export interface DeliveryType {
  form: string;
  physicalItems: string[];
  digitalItems: string[];
  notes: string[];
}

export interface Warranty {
  duration: string;
  transferable: boolean | null;
  transferNote: string;
}

export interface Support {
  installGuide: boolean | null;
  activationHelp: boolean | null;
  upgradeConsult: boolean | null;
  channels: string[];
  details: string[];
}

export interface Highlight {
  icon: string;
  text: string;
}

export interface SpecTableItem {
  label: string;
  value: string;
}

export interface DescriptionSection {
  title: string;
  content: string;
  bullets?: string[];
  specTable?: SpecTableItem[];
}

export interface Specification {
  label: string;
  value: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Seo {
  title: string;
  description: string;
  keywords: string;
}

export interface CtaButton {
  label: string;
  href: string;
  channel: string;
}

export interface CtaContact {
  channel: string;
  name: string;
  href: string;
}

export interface Cta {
  primary: CtaButton;
  secondary: CtaButton;
  contacts: CtaContact[];
  trustBadges: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  subcategory: string;
  shortDescription: string;
  price: ProductPrice;
  originalPrice: number | null;
  currency: string;
  badges: ProductBadge[];
  images: ProductImage[];
  thumbnail: string;
  licenseType: string;
  activationType: string;
  deliveryType: DeliveryType;
  warranty: Warranty;
  support: Support;
  suitableFor: string[];
  highlights: Highlight[];
  descriptionSections: DescriptionSection[];
  specifications: Specification[];
  faqs: Faq[];
  relatedProductSlugs: string[];
  seo: Seo;
  cta: Cta;
  isFeatured: boolean;
  displayOrder: number | null;
  listTitle: string;
  listDescription: string;
  cardBadges: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
