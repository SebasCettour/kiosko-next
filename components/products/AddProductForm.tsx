"use client";

import { ProductSchema } from "@/src/schema";
import { toast } from "react-toastify";

export default async function AddProductForm({
  children,
}: {
  children: React.ReactNode;
}) {
  const handleSubmit = async (formData: FormData) => {
    const data = {
      name: formData.get("name"),
      price: formData.get("price"),
      categoryId: formData.get("categoryId"),
    };
    const result = ProductSchema.safeParse(data);
    if (!result.success) {
      result.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }
  };

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
      <form className="space-y-5" action={handleSubmit}>
        {children}
        <input
          type="submit"
          value="Crear Producto"
          className="
        bg-indigo-600 
        hover:bg-indigo-700 
        transition-shadow
        text-white
        font-semibold
        w-full
        cursor-pointer
        px-5
        rounded-md
        py-3
        mb-5"
        ></input>
      </form>
    </div>
  );
}
