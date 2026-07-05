export interface Product {
  slug: string;
  name: string;
  group: string;
  form: string;
  availability: "in_stock" | string;
  thumbnail: string;
  pills: string[];
  price: {
    retailLabel: string;
    retailValue: string;
    bulkLabel?: string;
    bulkValue?: string;
  };
  includes: string[];
  description: string;
  href: string;
}

export interface ContactOption {
  title: string;
  subtitle: string;
  href: string | null;
  icon: "facebook" | "zalo" | "phone";
}

export interface EvidenceAction {
  text: string;
  href: string;
  variant: "dark" | "zalo";
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CompareSource {
  id: string;
  initials: string;
  name: string;
  category: "very-low" | "vat-bulk" | "retail";
  categoryLabel: string;
  productName: string;
  summary: string;
  evidenceLabel: string;
  evidenceText: string;
  note: string;
  href: string;
  imageAlt: string;
}

export interface CompareRow {
  image: string;
  sku: string;
  competitor: string;
  theirPrice: string;
  vietLicensePrice: string;
  skuNote: string;
  signal: string;
  position: string;
}

export interface CompareGroup {
  heading: string;
  subheading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface CompareConclusionRow {
  choice: string;
  price: string;
  vatNote: string;
  conclusion: string;
}
