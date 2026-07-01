import { ProductForm } from "@/components/admin/ProductForm";

export default function NewProductPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">New Product</h1>
      </div>
      <ProductForm mode="create" />
    </div>
  );
}
