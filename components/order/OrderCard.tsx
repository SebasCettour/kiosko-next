import { completeOrder } from "@/actions/complete-order-action";
import { OrderWithProducts } from "@/src/types";

type OrderCardProps = {
  order: OrderWithProducts;
};

export default function OrderCard({ order }: OrderCardProps) {
  function formatCurrency(totalPrice: number) {
    return totalPrice.toLocaleString("es-MX", {
      style: "currency",
      currency: "MXN",
      minimumFractionDigits: 2,
    });
  }

  return (
    <section
      aria-labelledby="summary-heading"
      className="
        rounded-xl
        bg-gray-50
        p-4
        sm:p-6
        h-full
        flex
        flex-col
        gap-4
      "
    >
      {/* Cliente */}
      <p className="text-base md:text-lg font-semibold text-gray-900">
        Cliente: <span className="font-normal">{order.name}</span>
      </p>

      <p className="text-sm md:text-base font-medium text-gray-900">
        Productos ordenados
      </p>

      {/* Lista de productos */}
      <dl className="flex-1 overflow-y-auto space-y-4 pr-1">
        {order.orderProducts.map(({ product, quantity }) => (
          <div
            key={product.id}
            className="flex items-start gap-2 border-t border-gray-200 pt-3"
          >
            <span className="text-xs md:text-sm text-gray-600 whitespace-nowrap">
              x{quantity}
            </span>
            <span className="text-sm md:text-base text-gray-700 break-words">
              {product.name}
            </span>
          </div>
        ))}

        {/* Total */}
        <div className="flex items-center justify-between border-t border-gray-300 pt-4">
          <dt className="text-sm md:text-base font-semibold text-gray-900">
            Total a pagar
          </dt>
          <dd className="text-sm md:text-base font-bold text-gray-900">
            {formatCurrency(order.totalPrice)}
          </dd>
        </div>
      </dl>

      {/* Acción */}
      <form action={completeOrder} className="pt-2">
        <input type="hidden" name="order_id" value={order.id} />
        <button
          type="submit"
          className="
            w-full
            rounded-md
            bg-indigo-600
            py-2.5
            text-sm
            md:text-base
            font-semibold
            uppercase
            text-white
            hover:bg-indigo-800
            transition-colors
          "
        >
          Orden completada
        </button>
      </form>
    </section>
  );
}
