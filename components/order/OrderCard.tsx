import { completeOrder } from "@/actions/complete-order-action";
import { OrderWithProducts } from "@/src/types";
import { format } from "path";

type OrderCardProps = {
  order: OrderWithProducts;
};

export default function OrderCard({ order }: OrderCardProps) {
  function formatCurrency(totalPrice: number): React.ReactNode {
    return totalPrice.toLocaleString("es-MX", {
      style: "currency",
      currency: "MXN",
      minimumFractionDigits: 2,
    });
  }

  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6  lg:mt-0 lg:p-8 space-y-4 h-full flex flex-col"
    >
      <p className="text-lg font-medium text-gray-900">
        Cliente: {order.name}{" "}
      </p>
      <p className="text-base font-medium text-gray-900">
        Productos Ordenados:
      </p>
      <dl className="mt-6 space-y-4">
        {order.orderProducts.map(({ product, quantity }) => (
          <div
            key={product.id}
            className="flex items-center gap-2 border-t border-gray-200 pt-4"
          >
            <span className="text-sm text-gray-700">(x{quantity})</span>
            <span className="text-sm text-gray-700">{product.name}</span>
          </div>
        ))}
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="text-sm font-medium text-gray-900">Total a Pagar:</dt>
          <dd className="text-sm font-medium text-gray-900">
            {formatCurrency(order.totalPrice)}
          </dd>
        </div>
      </dl>

      <form action={completeOrder}>
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-2 px-2 py-1.5 text-xs md:text-sm uppercase font-semibold cursor-pointer whitespace-normal break-words text-center rounded"
        >
          Orden Completada
        </button>
      </form>
    </section>
  );
}
