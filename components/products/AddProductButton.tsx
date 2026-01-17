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
      className="
            mt-5 
            w-full
            bg-amber-500
            hover:bg-amber-600
            text-white
            p-3
            uppercase
            font-bold
            cursor-pointer
            rounded
            "
      onClick={() => addToOrder(product)}
    >
      Agregar
    </button>
  );
}
