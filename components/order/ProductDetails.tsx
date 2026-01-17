import { useStore } from "@/src/store";
import { OrderItem } from "@/src/types";
import { MinusIcon, PlusIcon, XCircleIcon } from "@heroicons/react/24/outline";

type ProductDetailsProps = {
  item: OrderItem;
};

export default function ProductDetails({ item }: ProductDetailsProps) {
  const increaseQuantity = useStore((state) => state.increaseQuantity);
  const decreaseQuantity = useStore((state) => state.decreaseQuantity);
  const removeFromCart = useStore((state) => state.removeFromCart);
  return (
    <div className="bg-white border rounded-lg shadow-md p-5 flex flex-col gap-3">
      <div className="flex justify-between items-start">
        <p className="text-lg font-bold text-gray-800">{item.name}</p>
        <button
          type="button"
          onClick={() => removeFromCart(String(item.id))}
          className="hover:scale-110 transition-transform"
          title="Eliminar"
        >
          <XCircleIcon className="text-red-500 h-7 w-7" />
        </button>
      </div>
      <p className="text-xl text-amber-500 font-extrabold">
        ${Number(item.price).toFixed(2)}
      </p>
      <div className="flex items-center gap-4 px-4 py-2 bg-gray-100 rounded-lg w-fit mx-auto">
        <button
          type="button"
          onClick={() => decreaseQuantity(String(item.id))}
          className="p-1 rounded hover:bg-gray-200 transition"
          title="Disminuir"
        >
          <MinusIcon className="h-6 w-6" />
        </button>
        <span className="text-lg font-bold w-8 text-center">
          {item.quantity}
        </span>
        <button
          type="button"
          onClick={() => increaseQuantity(item.id)}
          className="p-1 rounded hover:bg-gray-200 transition"
          title="Aumentar"
        >
          <PlusIcon className="h-6 w-6" />
        </button>
      </div>
      <p className="text-lg font-bold text-gray-700 text-right">
        Subtotal:{" "}
        <span className="text-amber-600">
          ${" "}
          {(Number(item.price) * item.quantity).toFixed(2)}
        </span>
      </p>
    </div>
  );
}
