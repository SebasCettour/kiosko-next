import OrderCard from "@/components/order/OrderCard";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

import { OrderWithProducts } from "@/src/types";
import { revalidatePath } from "next/cache";

async function getPendingOrders(): Promise<OrderWithProducts[]> {
  const orders = await prisma.order.findMany({
    where: {
      status: false,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });

  return orders as OrderWithProducts[];
}

async function refreshOrders() {
  "use server";
  revalidatePath("/admin/orders");
}
export default async function OrdersPage() {
  const orders = await getPendingOrders();
  return (
    <>
      <Heading>Administrar ordenes</Heading>
      <form
        action={refreshOrders}
      >
        <input
          type="submit"
          value="Actualizar ordenes"
          className="bg-amber-400 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded transition-colors duration-300 cursor-pointer mb-4"
        ></input>
      </form>

      {orders.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 h-full">
          {orders.map((order) => (
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
