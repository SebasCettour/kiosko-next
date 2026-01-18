"use client";
import React, { useMemo, useState } from "react";
import { useStore } from "@/src/store";
import ProductDetails from "./ProductDetails";
import Toast from "../ui/Toast";
import { createOrder } from "@/actions/create-order-action";
import { OrderSchema } from "@/src/schema";
import { da } from "zod/locales";

export default function OrdenSummary() {
  const order = useStore((state) => state.order);
  const [toast, setToast] = useState({ show: false, message: "" });

  // Función para mostrar el toast
  const showToast = (message: string) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: "" }), 1500);
  };

  const total = useMemo(
    () =>
      order.reduce(
        (total, item) => total + Number(item.price) * item.quantity,
        0,
      ),
    [order],
  );

  const handleCreateOrder = async (formData: FormData) => {
    const data = {
      name: formData.get("name"),
    };

    if (!data.name || String(data.name).trim() === "") {
      showToast("Por favor ingresa tu nombre");
      return;
    }

    const result = OrderSchema.safeParse(data);

    const response = await createOrder(data);
    if (response?.errors) {
      showToast("Hubo un error al crear el pedido");
      return;
    }
  };

  return (
    <aside className="bg-white border rounded-xl shadow-lg p-6 max-w-md w-full mx-auto lg:h-screen lg:overflow-y-auto flex-shrink-0">
      <Toast message={toast.message} show={toast.show} />
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
            <ProductDetails key={item.id} item={item} showToast={showToast} />
          ))}
          <hr className="my-6" />
          <p className="text-2xl text-center">
            Total a pagar:{" "}
            <span className="font-extrabold text-amber-600">
              ${total.toFixed(2)}
            </span>
          </p>
          <form className="w-full mt-10 space-y-5" action={handleCreateOrder}>
            <input
              type="text"
              placeholder="Tu nombre"
              name="name"
              className="
            
            
            bg-gray-100 
            w-full 
            px-4 
            py-2 
            rounded-md
            border 
            border-gray-300 
            focus:outline-none 
            focus:ring-2 
            focus:ring-amber-500 focus:border-transparent"
            />

            <input
              type="submit"
              className="py-2
            rounded
            uppercase
            text-white
            bg-black
            w-full
            font-bold
            hover:bg-amber-600
            text-center
            cursor-pointer
            "
              value="Confirmar Pedido"
            />
          </form>
        </div>
      )}
    </aside>
  );
}
