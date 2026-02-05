import { z } from "zod";

export const OrderSchema = z.object({
  name: z.string().min(1, "Tu nombre es obligatorio"),
  total: z.number().min(1, "Hay errores en tu pedido"),
  order: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      price: z.number(),
      quantity: z.number().min(1),
      subtotal: z.number(),
    }),
  ),
});

export const SearchSchema = z.object({
  search: z
    .string()
    .trim()
    .min(1, "El término de búsqueda no puede estar vacío"),
});
