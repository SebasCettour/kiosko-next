"use server";

import { prisma } from "@/src/lib/prisma";

export async function completeOrder(formData: FormData) {
  const orderId = formData.get("order_id");

  if (typeof orderId !== "string") {
    throw new Error("Invalid order ID");
  }

  try {
    await prisma.order.updateMany({
      where: {
        id: +orderId,
      },
      data: { status: true, readyAt: new Date(Date.now()) },
    });
  } catch (error) {
    console.error("Error completing order:", error);
    throw error;
  }
}
