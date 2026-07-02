import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";
import { IProduct } from "@/models/Product";

import { PDPBreadcrumb } from "@/components/pdp/PDPBrearcrumb";
import { PDPBadges } from "@/components/pdp/PDPBadges";
import { PDPPriceCTA } from "@/components/pdp/PDPPriceCTA";
import { PDPImageGallery } from "@/components/pdp/PDPImageGallery";
import { PDPProductInfo } from "@/components/pdp/PDPProductInfo";
  import { PDPDescriptionSections } from "@/components/pdp/PDPDescriptionSections";
  import { PDPSupport } from "@/components/pdp/PDPSupport";
import { PDPFAQ } from "@/components/pdp/PDPFAQ";
import { PDPRelatedProducts } from "@/components/pdp/PDPRelatedProducts";
import { PDPContactBand } from "@/components/pdp/PDPContactBand";
import { PDPSection } from "@/components/pdp/PDPSection";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

async function getProduct(slug: string): Promise<IProduct | null> {
  await connectDB();
  return Product.findOne({ slug }).lean() as Promise<IProduct | null>;
}

async function getRelatedProducts(slugs: string[]): Promise<IProduct[]> {
  if (!slugs || slugs.length === 0) return [];
  await connectDB();
  return Product.find({ slug: { $in: slugs } }).lean() as Promise<IProduct[]>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return { title: "Sản phẩm không tìm thấy" };

  return {
    title: product.seo.title,
    description: product.seo.description,
    keywords: product.seo.keywords,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();

  const relatedProducts = await getRelatedProducts(product.relatedProductSlugs);

  const breadcrumbItems = [
    { label: product.category, href: `/${product.category.toLowerCase()}` },
    { label: product.subcategory, href: `/${product.category.toLowerCase()}` },
  ];

  return (
    <>

      <main className="min-h-screen pt-[74.8px]">
        {/* Product hero */}
        <section className="bg-white py-8">
          <div className="mx-auto max-w-[1440px] px-4">
            <PDPBreadcrumb items={breadcrumbItems} />

            <div className="mt-6 grid gap-8 lg:grid-cols-2">
              {/* Left: Images */}
              <PDPSection fullWidth={false}>
                <PDPImageGallery images={product.images} />
              </PDPSection>

              {/* Right: Info */}
              <div className="space-y-6">
                <PDPBadges badges={product.badges} />

                <h1 className="display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  {product.name}
                </h1>

                {product.shortDescription && (
                  <p className="text-sm text-muted-foreground">
                    {product.shortDescription}
                  </p>
                )}

                <PDPPriceCTA product={product} />

                {/* Highlights */}
                {product.highlights && product.highlights.length > 0 && (
                  <div className="rounded-2xl border border-border bg-secondary/50 p-4">
                    <ul className="space-y-2">
                      {product.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <span className="check-icon mt-0.5 h-4 w-4 shrink-0 flex-shrink-0" />
                          <span>{h.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Delivery notes */}
                {product.deliveryType?.notes && product.deliveryType.notes.length > 0 && (
                  <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                    <p className="text-sm text-amber-800">
                      <strong>Lưu ý: </strong>
                      {product.deliveryType.notes[0]}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Product info table + support */}
        <section className="bg-background py-12">
          <div className="mx-auto max-w-[1440px] px-4">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Main content: description sections + specs */}
              <div className="lg:col-span-2 space-y-8">
                {/* Description sections */}
                <div className="rounded-2xl border border-border bg-white p-6">
                  <PDPDescriptionSections sections={product.descriptionSections} />
                </div>

                {/* Spec table */}
                {product.specifications && product.specifications.length > 0 && (
                  <div className="rounded-2xl border border-border bg-white overflow-hidden">
                    <div className="bg-secondary px-5 py-3 border-b border-border">
                      <p className="text-sm font-semibold text-foreground">Thông số kỹ thuật</p>
                    </div>
                    <table className="w-full text-sm">
                      <tbody>
                        {product.specifications.map((row, idx) => (
                          <tr
                            key={row.label}
                            className={idx !== product.specifications.length - 1 ? "border-b border-border" : ""}
                          >
                            <td className="px-5 py-3 align-top text-muted-foreground whitespace-nowrap w-1/2">
                              {row.label}
                            </td>
                            <td className="px-5 py-3 align-top text-foreground font-medium">
                              {row.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* Sidebar: Support + Warranty */}
              <div>
                <PDPSupport support={product.support} warranty={product.warranty} />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <PDPFAQ faqs={product.faqs} />

        {/* Contact band */}
        <PDPContactBand />

        {/* Related products */}
        <PDPRelatedProducts products={relatedProducts} />
      </main>

    </>
  );
}
