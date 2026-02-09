"use client";
import { Product } from "@prisma/client";
import { useStore } from "@/src/store";

type AddProductButtonProps = {
  product: Product;
};

export default function AddProductButton({ product }: AddProductButtonProps) {
  const addToOrder = useStore((state) => state.addToOrder);

  return (
    <button
      type="button"
      onClick={() => addToOrder(product)}
      className="
        w-full
        mt-3
        rounded
        bg-amber-500
        px-3
        py-1.5
        text-xs
        font-medium
        text-white
        hover:bg-amber-600
        transition-colors
        focus:outline-none
        focus:ring-1
        focus:ring-amber-500
        active:scale-[0.97]
      "
    >
      Agregar
    </button>
  );
}
