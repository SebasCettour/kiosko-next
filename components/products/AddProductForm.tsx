"use client";

import { createProduct } from "@/actions/create-product-action";
import { ProductSchema } from "@/src/schema";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function AddProductForm({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const data = {
      name: formData.get("name"),
      price: formData.get("price"),
      categoryId: formData.get("categoryId"),
      imageUrl: formData.get("imageUrl"),
    };

    const result = ProductSchema.safeParse(data);

    if (!result.success) {
      result.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }

    const response = await createProduct(result.data);

    if (response?.errors) {
      response.errors.forEach((error: any) => {
        toast.error(error.message);
      });
      return;
    }

    toast.success("Producto creado correctamente");
    router.push("/admin/products");
  };

  return (
    <div
      className="
        w-full
        max-w-3xl
        mx-auto
        bg-white
        rounded-xl
        border
        border-gray-200
        p-6
        md:p-10
      "
    >
      <form className="space-y-6" action={handleSubmit}>
        {children}

        <button
          type="submit"
          className="
            w-full
            rounded-md
            bg-indigo-600
            py-3
            text-sm
            md:text-base
            font-semibold
            text-white
            hover:bg-indigo-700
            transition
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-500
            focus:ring-offset-2
          "
        >
          Crear producto
        </button>
      </form>
    </div>
  );
}
