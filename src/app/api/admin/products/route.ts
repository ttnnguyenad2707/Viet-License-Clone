import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Product from "@/models/Product";

function normalizeProductBody(body: unknown): Record<string, unknown> {
  const data = (body as Record<string, unknown>) || {};
  const imageAssets = Array.isArray(data.imageAssets)
    ? data.imageAssets
        .filter((item): item is Record<string, unknown> => !!item && typeof item === "object")
        .filter((item) => {
          const url = typeof item.url === "string" ? item.url.trim() : "";
          return Boolean(url);
        })
        .map((item) => ({
          url: typeof item.url === "string" ? item.url.trim() : item.url,
          publicId: typeof item.publicId === "string" ? item.publicId.trim() : item.publicId,
          width: typeof item.width === "number" ? item.width : Number(item.width) || 0,
          height: typeof item.height === "number" ? item.height : Number(item.height) || 0,
          format: typeof item.format === "string" ? item.format.trim() : item.format,
          alt: typeof item.alt === "string" ? item.alt.trim() : item.alt,
        }))
    : [];

  return {
    ...data,
    imageAssets,
  };
}

export async function GET() {
  try {
    await connectDB();

    const products = await Product.find()
      .select("-__v")
      .sort({ displayOrder: 1, createdAt: -1 });

    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    console.error("GET /api/admin/products error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = normalizeProductBody(await request.json());

    if (!body.slug) {
      return NextResponse.json(
        { success: false, error: "Slug is required" },
        { status: 400 }
      );
    }

    const existing = await Product.findOne({ slug: body.slug });
    if (existing) {
      return NextResponse.json(
        { success: false, error: "Slug already exists" },
        { status: 409 }
      );
    }

    const product = await Product.create(body);

    return NextResponse.json(
      { success: true, data: product },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/admin/products error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
