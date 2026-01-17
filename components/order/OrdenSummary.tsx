"use client";
import React, { useMemo } from "react";
import { useStore } from "@/src/store";
import ProductDetails from "./ProductDetails";

export default function OrdenSummary() {
  const order = useStore((state) => state.order);
  const total = useMemo(() => order.reduce((total, item) => total + Number(item.price) * item.quantity, 0), [order]);
  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-full p-2 mx-auto overflow-x-auto flex-shrink-0">
      <h3 className="text-2xl font-bold mb-5">Resumen del Pedido</h3>
      {order.length === 0 ? (
        <p className="text-center my-10 break-words">
          No hay elementos en el pedido
        </p>
      ) : (
        <div className="mt-5">
          {order.map((item) => (
            <ProductDetails key={item.id} item={item} />
          ))}
          <p className="text-2xl mt-20 text-center">Total a pagar: {" "}
            <span className="font-bold">
              {total.toFixed(2)}
            </span>
          </p>
        </div>
      )}
    </aside>
  );
}
