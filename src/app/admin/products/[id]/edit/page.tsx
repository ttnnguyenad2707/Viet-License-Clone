"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ProductForm } from "@/components/admin/ProductForm";
import { IProduct } from "@/models/Product";

export default function EditProductPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Partial<IProduct> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const productId = params.id as string;

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`/api/admin/products/${productId}`);
        const data = await res.json();

        if (data.success) {
          setProduct(data.data);
        } else {
          setError(data.error || "Failed to fetch product");
        }
      } catch {
        setError("Failed to fetch product");
      } finally {
        setLoading(false);
      }
    }

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <div className="flex items-center justify-center py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Edit Product</h1>
        </div>
        <div className="rounded-lg border border-destructive/50 bg-destructive/10 px-4 py-3 text-destructive">
          {error}
        </div>
        <button
          onClick={() => router.push("/admin/products")}
          className="mt-4 text-sm text-primary hover:underline"
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Edit Product</h1>
      </div>
      {product && (
        <ProductForm mode="edit" product={product} productId={productId} />
      )}
    </div>
  );
}
