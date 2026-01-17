"use client";
import React, { useMemo } from "react";
import { useStore } from "@/src/store";
import ProductDetails from "./ProductDetails";

export default function OrdenSummary() {
  const order = useStore((state) => state.order);
  const total = useMemo(
    () =>
      order.reduce(
        (total, item) => total + Number(item.price) * item.quantity,
        0
      ),
    [order]
  );
  return (
    <aside className="bg-white border rounded-xl shadow-lg p-6 max-w-md w-full mx-auto lg:h-screen lg:overflow-y-auto flex-shrink-0">
      <h3 className="text-3xl font-extrabold mb-6 text-center text-amber-600">
        Resumen del Pedido
      </h3>
      {order.length === 0 ? (
        <p className="text-center my-10 text-gray-500">
          No hay elementos en el pedido
        </p>
      ) : (
        <div className="flex flex-col gap-4">
          {order.map((item) => (
            <ProductDetails key={item.id} item={item} />
          ))}
          <hr className="my-6" />
          <p className="text-2xl text-center">
            Total a pagar:{" "}
            <span className="font-extrabold text-amber-600">
              ${total.toFixed(2)}
            </span>
          </p>
        </div>
      )}
    </aside>
  );
}
