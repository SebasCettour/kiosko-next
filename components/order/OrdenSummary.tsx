"use client"; 
import { useStore } from "@/src/store";


export default function OrdenSummary() {
  const order = useStore((state) => state.order);
  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
      <h3 className="text-2xl font-bold mb-5">Resumen del Pedido</h3>
      {order.length === 0 ? (
        <p className="text-center my-25">No hay elementos en el pedido</p>
      ) : (
        <div className="mt-5">
          <p></p>
        </div>
      )}
    </aside>
  );
}
