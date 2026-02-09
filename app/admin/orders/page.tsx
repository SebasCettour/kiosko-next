"use client";
import useSwr from "swr";
import OrderCard from "@/components/order/OrderCard";
import Heading from "@/components/ui/Heading";
import { OrderWithProducts } from "@/src/types";

export default function OrdersPage() {
  const url = "/admin/orders/api";
  const fetcher = () =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => data as OrderWithProducts[]);
  const { data, error, isLoading } = useSwr<OrderWithProducts[]>(url, fetcher, {
    refreshInterval: 60000, // Refresca cada 60 segundos
  });

  if (isLoading) return <p className="text-center">Cargando...</p>;

  if (data)
    return (
      <>
        <Heading>Administrar ordenes</Heading>

        {data.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 h-full">
            {data.map((order) => (
              <div className="h-full flex">
                <OrderCard key={order.id} order={order} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">No hay ordenes pendientes</p>
        )}
      </>
    );
}
