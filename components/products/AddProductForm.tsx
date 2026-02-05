import ProductForm from "./ProductForm";
import { prisma } from "@/src/lib/prisma";

export default async function AddProductForm() {
  const categories = await prisma.category.findMany();
  return (
    <div
      className="
    bg-white 
    mt-10 
    px-5 
    py-10 
    rounded-md 
    shadow-md 
    max-w-3xl
    mx-auto"
    >
      <ProductForm categories={categories} />
    </div>
  );
}
