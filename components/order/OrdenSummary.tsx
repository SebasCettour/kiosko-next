"use client";
import React, { useMemo, useState } from "react";
import { useStore } from "@/src/store";
import ProductDetails from "./ProductDetails";
import Toast from "../ui/Toast";
import Spinner from "../ui/Spinner";
import { createOrder } from "@/actions/create-order-action";
import { OrderSchema } from "@/src/schema";

export default function OrdenSummary() {
  const order = useStore((state) => state.order);
  const clearOrder = useStore((state) => state.clearOrder);
  const [toast, setToast] = useState({ show: false, message: "" });
  const [loading, setLoading] = useState(false);

  const showToast = (message: string) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: "" }), 1500);
  };

  const total = useMemo(
    () =>
      order.reduce(
        (total, item) => total + Number(item.price) * item.quantity,
        0
      ),
    [order]
  );

  const handleCreateOrder = async (formData: FormData) => {
    setLoading(true);

    const data = {
      name: formData.get("name"),
      total,
      order,
    };

    if (!data.name || String(data.name).trim() === "") {
      showToast("Por favor ingresa tu nombre");
      setLoading(false);
      return;
    }

    const result = OrderSchema.safeParse(data);
    if (!result.success) {
      showToast("Datos inválidos");
      setLoading(false);
      return;
    }

    const response = await createOrder(data);
    if (response?.errors) {
      showToast("Hubo un error al crear el pedido");
      setLoading(false);
      return;
    }

    showToast("Pedido creado exitosamente");
    clearOrder();
    setLoading(false);
  };

  return (
    <aside
      className="
        w-full
        h-full
        bg-white
        p-6
        flex
        flex-col
        lg:border-l
        lg:border-slate-500
        lg:pl-8
      "
    >
      <Toast message={toast.message} show={toast.show} />

      <h3 className="text-2xl md:text-3xl font-extrabold mb-6 text-center text-amber-600">
        Resumen del Pedido
      </h3>

      {order.length === 0 ? (
        <p className="text-center my-10 text-gray-500 flex-1 flex items-center justify-center">
          No hay elementos en el pedido
        </p>
      ) : (
        <div className="flex flex-col gap-4 flex-1">
          <div className="flex flex-col gap-4 overflow-y-auto pr-1">
            {order.map((item) => (
              <ProductDetails
                key={item.id}
                item={item}
                showToast={showToast}
              />
            ))}
          </div>

          <hr className="my-4" />

          <p className="text-xl md:text-2xl text-center">
            Total a pagar{" "}
            <span className="font-extrabold text-amber-600">
              ${total.toFixed(2)}
            </span>
          </p>

          <form className="w-full mt-4 space-y-4" action={handleCreateOrder}>
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
                focus:ring-amber-500
              "
            />

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                py-2
                rounded
                uppercase
                font-bold
                bg-black
                text-white
                hover:bg-amber-600
                flex
                items-center
                justify-center
                gap-2
                disabled:opacity-60
              "
            >
              {loading && <Spinner size={20} color="#fff" />}
              {loading ? "Procesando..." : "Confirmar Pedido"}
            </button>
          </form>
        </div>
      )}
    </aside>
  );
}
