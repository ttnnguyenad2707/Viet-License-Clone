"use client";

import { useState } from "react";
import { ExternalLink, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { IProduct } from "@/models/Product";

interface ProductTableProps {
  products: IProduct[];
  onRefresh: () => void;
}

export function ProductTable({ products, onRefresh }: ProductTableProps) {
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<IProduct | null>(null);

  async function handleDelete(product: IProduct) {
    setDeletingId(product._id.toString());
    try {
      const res = await fetch(`/api/admin/products/${product._id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        onRefresh();
      } else {
        const data = await res.json();
        alert(data.error || "Failed to delete product");
      }
    } catch {
      alert("Failed to delete product");
    } finally {
      setDeletingId(null);
      setDeleteDialogOpen(false);
      setProductToDelete(null);
    }
  }

  function openDeleteDialog(product: IProduct) {
    setProductToDelete(product);
    setDeleteDialogOpen(true);
  }

  function formatPrice(price: IProduct["price"]) {
    if (!price) return "-";
    if (price.retail !== null && price.retail !== undefined) {
      return `${price.retail.toLocaleString("vi-VN")} ${"VND"}`;
    }
    return "-";
  }

  return (
    <>
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">Name</TableHead>
              <TableHead className="w-[200px]">Slug</TableHead>
              <TableHead className="w-[150px]">Category</TableHead>
              <TableHead className="w-[120px]">Price</TableHead>
              <TableHead className="w-[80px] text-center">Featured</TableHead>
              <TableHead className="w-[80px] text-center">Order</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                  No products found
                </TableCell>
              </TableRow>
            ) : (
              products.map((product) => (
                <TableRow key={product._id.toString()}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell className="font-mono text-xs">{product.slug}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{formatPrice(product.price)}</TableCell>
                  <TableCell className="text-center">
                    {product.isFeatured ? (
                      <span className="inline-flex items-center justify-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                        Yes
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                        No
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {product.displayOrder ?? "-"}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      <a
                        href={`/san-pham/${product.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex size-7 items-center justify-center rounded-[min(var(--radius-md),12px)] hover:bg-muted hover:text-foreground"
                        title="View PDP"
                      >
                        <ExternalLink className="size-4" />
                      </a>
                      <a
                        href={`/admin/products/${product._id}/edit`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex size-7 items-center justify-center rounded-[min(var(--radius-md),12px)] hover:bg-muted hover:text-foreground"
                        title="Edit"
                      >
                        <Pencil className="size-4" />
                      </a>
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        title="Delete"
                        onClick={() => openDeleteDialog(product)}
                        disabled={deletingId === product._id.toString()}
                      >
                        <Trash2 className="size-4 text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Product</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete &quot;{productToDelete?.name}&quot;? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => productToDelete && handleDelete(productToDelete)}
              disabled={deletingId !== null}
            >
              {deletingId ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
