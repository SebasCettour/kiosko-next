import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

async function getPendingOrders() {
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
  return orders;
}
export default async function OrdersPage() {
  const orders = await getPendingOrders();
  return (
    <>
      <Heading>Administrar ordenes</Heading>
    </>
  );
}
