"use client"; 
import { useStore } from "@/src/store";


export default function OrdenSummary() {
  const order = useStore((state) => state.order);
  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-full p-2 mx-auto overflow-x-auto flex-shrink-0">
      <h3 className="text-2xl font-bold mb-5">Resumen del Pedido</h3>
      {order.length === 0 ? (
        <p className="text-center my-10 break-words">No hay elementos en el pedido</p>
      ) : (
        <div className="mt-5">
          <p></p>
        </div>
      )}
    </aside>
  );
}
