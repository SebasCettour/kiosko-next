"use server";

import { OrderSchema } from "@/src/schema";

export async function createOrder(data: unknown) {
  const result = OrderSchema.safeParse(data);
  if (!result.success) {
    return { errors: result.error.issues };
  }

  try {
    // TODO: Add your order creation logic here
    return { success: true };
  } catch (error) {
    return { errors: ["An unexpected error occurred."] };
  }
}
