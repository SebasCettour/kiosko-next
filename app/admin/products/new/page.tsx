import AddProductForm from "@/components/products/AddProductForm";
import ProductForm from "@/components/products/ProductForm";
import Heading from "@/components/ui/Heading";
import React from "react";
import { categories } from "@/prisma/data/categories";

export default function NewProductPage() {
  return (
    <>
      <Heading>Nuevo Producto</Heading>
      <AddProductForm>
        <ProductForm categories={categories.map((cat, idx) => ({ id: idx + 1, name: cat.name }))} />
      </AddProductForm>
    </>
  );
}
