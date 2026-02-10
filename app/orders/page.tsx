"use client";
import useSWR from "swr";
import Logo from "@/components/ui/Logo";
import { OrderWithProducts } from "@/src/types";
import LatestOrderItem from "@/components/order/LatetstOrderItem";

export default function OrdersPage() {
  const url = "/orders/api";
  const fetcher = () =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => data as OrderWithProducts[]);
  const { data, error, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
    refreshInterval: 60000,
  });

  if (isLoading) return <p className="text-center">Cargando...</p>;

  if (data)
    return (
      <>
        <h1 className=" text-center mt-20 text-6xl font-black">
          Ordenes listas
        </h1>

        <Logo />
        {data.length ? (
          <div className="flex flex-col gap-4 mt-10">
            {data.map((order) => (
              <LatestOrderItem key={order.id} order={order} />
            ))}
          </div>
        ) : (
          <p className="text-center my-10">No hay órdenes listas.</p>
        )}
      </>
    );
}
