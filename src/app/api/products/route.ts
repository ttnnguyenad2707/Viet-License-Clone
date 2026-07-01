import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Product from "@/models/Product";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get("category");
    const featured = searchParams.get("featured");
    const limit = searchParams.get("limit");

    const query: Record<string, unknown> = {};

    if (category) {
      query.category = category;
    }

    if (featured !== null) {
      query.isFeatured = featured === "true";
    }

    let productQuery = Product.find(query).sort({ displayOrder: 1 });

    if (limit) {
      const limitNum = parseInt(limit, 10);
      if (!isNaN(limitNum) && limitNum > 0) {
        productQuery = productQuery.limit(limitNum);
      }
    }

    const products = await productQuery;

    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    console.error("GET /api/products error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
