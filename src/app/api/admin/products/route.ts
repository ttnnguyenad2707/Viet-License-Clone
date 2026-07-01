import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Product, { IProduct } from "@/models/Product";

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

    const body = await request.json();

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
