import { useStore } from "@/src/store";
import { OrderItem } from "@/src/types";
import {
  MinusIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

type ProductDetailsProps = {
  item: OrderItem;
  showToast: (msg: string) => void;
};

export default function ProductDetails({
  item,
  showToast,
}: ProductDetailsProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 300);
    return () => clearTimeout(timeout);
  }, [item.quantity]);

  const increaseQuantity = useStore((state) => state.increaseQuantity);
  const decreaseQuantity = useStore((state) => state.decreaseQuantity);
  const removeFromCart = useStore((state) => state.removeFromCart);

  const handleIncrease = () => {
    increaseQuantity(item.id);
    showToast("Producto actualizado");
  };

  const handleDecrease = () => {
    decreaseQuantity(String(item.id));
    showToast("Producto actualizado");
  };

  const handleRemove = () => {
    removeFromCart(String(item.id));
    showToast("Producto eliminado");
  };

  return (
    <div
      className={`
        border
        border-gray-200
        rounded-md
        bg-white
        p-4
        flex
        flex-col
        gap-2
        transition
        ${animate ? "ring-2 ring-amber-400" : ""}
      `}
    >
      {/* Header */}
      <div className="flex justify-between items-start gap-2">
        <p className="text-sm md:text-base font-semibold text-gray-800 break-words">
          {item.name}
        </p>
        <button
          type="button"
          onClick={handleRemove}
          title="Eliminar"
          className="text-red-500 hover:text-red-700 transition"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>

      {/* Precio unitario */}
      <p className="text-sm md:text-base font-bold text-amber-600">
        ${Number(item.price).toFixed(2)}
      </p>

      {/* Controles */}
      <div className="flex items-center justify-between gap-4 mt-1">
        <div className="flex items-center gap-2 bg-gray-100 rounded-md px-2 py-1">
          <button
            type="button"
            onClick={handleDecrease}
            title="Disminuir"
            className="p-1 rounded hover:bg-gray-200 transition"
          >
            <MinusIcon className="h-4 w-4" />
          </button>

          <span className="text-sm font-bold w-6 text-center">
            {item.quantity}
          </span>

          <button
            type="button"
            onClick={handleIncrease}
            title="Aumentar"
            className="p-1 rounded hover:bg-gray-200 transition"
          >
            <PlusIcon className="h-4 w-4" />
          </button>
        </div>

        {/* Subtotal */}
        <p className="text-sm md:text-base font-semibold text-gray-700">
          Subtotal{" "}
          <span className="font-bold text-amber-600">
            ${(Number(item.price) * item.quantity).toFixed(2)}
          </span>
        </p>
      </div>
    </div>
  );
}
