import { OrderWithProducts } from "@/src/types";

type LatestOrderItemProps = {
  order: OrderWithProducts;
};
export default function LatestOrderItem({ order }: LatestOrderItemProps) {
  return (
    <div className="bg-white shadow p-5 space-y-5 rounded-lg">
      <p className="text-2x font-bold text-slate-600">Cliente: {order.name}</p>
      <ul
        className="divide-y divide-gray-200 border-t border-gray-200
      text-sm text-gray-500
      "
        role="list"
      >
        {order.orderProducts.map((product) => (
          <li key={product.id} className="py-6 block">
            <span>{product.quantity}x</span>
            <p>{product.product.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
