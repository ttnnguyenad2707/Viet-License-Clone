"use client";

import { useEffect, useState, useCallback } from "react";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductTable } from "@/components/admin/ProductTable";
import { IProduct } from "@/models/Product";

export default function AdminProductsPage() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("/api/admin/products");
      const data = await res.json();

      if (data.success) {
        setProducts(data.data);
      } else {
        setError(data.error || "Failed to fetch products");
      }
    } catch {
      setError("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="container mx-auto py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Products</h1>
        <Button>
          <Link href="/admin/products/new">
            <Plus className="mr-2 size-4" />
            Add Product
          </Link>
        </Button>
      </div>

      {error && (
        <div className="mb-4 rounded-lg border border-destructive/50 bg-destructive/10 px-4 py-3 text-destructive">
          {error}
        </div>
      )}

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
      ) : (
        <ProductTable products={products} onRefresh={fetchProducts} />
      )}
    </div>
  );
}
