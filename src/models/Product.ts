import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProduct extends Document {
  id: string;
  slug: string;
  name: string;
  category: string;
  subcategory: string;
  shortDescription: string;
  price: {
    retail: number | null;
    retailLabel: string;
    bulk: number | null;
    bulkLabel: string;
    bulkMinQty: number | null;
    bulkNote: string;
    vatNote: string;
    largeQtyNote: string;
  };
  originalPrice: number | null;
  currency: string;
  badges: Array<{ label: string; variant: string }>;
  images: Array<{ src: string; alt: string; caption: string }>;
  thumbnail: string;
  imageAssets: Array<{
    url: string;
    publicId: string;
    width: number;
    height: number;
    format: string;
    alt: string;
  }>;
  cloudinaryImages: string[];
  licenseType: string;
  activationType: string;
  deliveryType: {
    form: string;
    physicalItems: string[];
    digitalItems: string[];
    notes: string[];
  };
  warranty: {
    duration: string;
    transferable: boolean | null;
    transferNote: string;
  };
  support: {
    installGuide: boolean | null;
    activationHelp: boolean | null;
    upgradeConsult: boolean | null;
    channels: string[];
    details: string[];
  };
  suitableFor: string[];
  highlights: Array<{ icon: string; text: string }>;
  descriptionSections: Array<{
    title: string;
    content: string;
    bullets?: string[];
    specTable?: Array<{ label: string; value: string }>;
  }>;
  specifications: Array<{ label: string; value: string }>;
  faqs: Array<{ question: string; answer: string }>;
  relatedProductSlugs: string[];
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  cta: {
    primary: { label: string; href: string; channel: string };
    secondary: { label: string; href: string; channel: string };
    contacts: Array<{ channel: string; name: string; href: string }>;
    trustBadges: string[];
  };
  isFeatured: boolean;
  displayOrder: number | null;
  listTitle: string;
  listDescription: string;
  cardBadges: string[];
}

const ProductSchema = new Schema<IProduct>(
  {
    id: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true },
    category: { type: String, required: true, index: true },
    subcategory: { type: String, default: "" },
    shortDescription: { type: String, default: "" },
    price: {
      retail: { type: Schema.Types.Mixed, default: null },
      retailLabel: { type: String, default: "" },
      bulk: { type: Schema.Types.Mixed, default: null },
      bulkLabel: { type: String, default: "" },
      bulkMinQty: { type: Schema.Types.Mixed, default: null },
      bulkNote: { type: String, default: "" },
      vatNote: { type: String, default: "" },
      largeQtyNote: { type: String, default: "" },
    },
    originalPrice: { type: Schema.Types.Mixed, default: null },
    currency: { type: String, default: "" },
    badges: [
      {
        label: { type: String, default: "" },
        variant: { type: String, default: "" },
      },
    ],
    images: [
      {
        src: { type: String, default: "" },
        alt: { type: String, default: "" },
        caption: { type: String, default: "" },
      },
    ],
    thumbnail: { type: String, default: "" },
    cloudinaryImages: [{ type: String }],
    imageAssets: [
      {
        url: { type: String, required: true },
        publicId: { type: String, default: "" },
        width: { type: Number, default: 0 },
        height: { type: Number, default: 0 },
        format: { type: String, default: "" },
        alt: { type: String, default: "" },
      },
    ],
    licenseType: { type: String, default: "" },
    activationType: { type: String, default: "" },
    deliveryType: {
      form: { type: String, default: "" },
      physicalItems: [{ type: String }],
      digitalItems: [{ type: String }],
      notes: [{ type: String }],
    },
    warranty: {
      duration: { type: String, default: "" },
      transferable: { type: Schema.Types.Mixed, default: null },
      transferNote: { type: String, default: "" },
    },
    support: {
      installGuide: { type: Schema.Types.Mixed, default: null },
      activationHelp: { type: Schema.Types.Mixed, default: null },
      upgradeConsult: { type: Schema.Types.Mixed, default: null },
      channels: [{ type: String }],
      details: [{ type: String }],
    },
    suitableFor: [{ type: String }],
    highlights: [
      {
        icon: { type: String, default: "" },
        text: { type: String, default: "" },
      },
    ],
    descriptionSections: [
      {
        title: { type: String, default: "" },
        content: { type: String, default: "" },
        bullets: [{ type: String }],
        specTable: [
          {
            label: { type: String, default: "" },
            value: { type: String, default: "" },
          },
        ],
      },
    ],
    specifications: [
      {
        label: { type: String, default: "" },
        value: { type: String, default: "" },
      },
    ],
    faqs: [
      {
        question: { type: String, default: "" },
        answer: { type: String, default: "" },
      },
    ],
    relatedProductSlugs: [{ type: String }],
    seo: {
      title: { type: String, default: "" },
      description: { type: String, default: "" },
      keywords: { type: String, default: "" },
    },
    cta: {
      primary: {
        label: { type: String, default: "" },
        href: { type: String, default: "" },
        channel: { type: String, default: "" },
      },
      secondary: {
        label: { type: String, default: "" },
        href: { type: String, default: "" },
        channel: { type: String, default: "" },
      },
      contacts: [
        {
          channel: { type: String, default: "" },
          name: { type: String, default: "" },
          href: { type: String, default: "" },
        },
      ],
      trustBadges: [{ type: String }],
    },
    isFeatured: { type: Boolean, default: false },
    displayOrder: { type: Schema.Types.Mixed, default: null },
    listTitle: { type: String, default: "" },
    listDescription: { type: String, default: "" },
    cardBadges: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);

export default Product;
