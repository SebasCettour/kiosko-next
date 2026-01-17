import { create } from "zustand";
import { OrderItem } from "./types";
import { Product } from "@prisma/client";

interface Store {
  order: OrderItem[];
  addToOrder: (product: Product) => void;
  removeFromCart: (itemId: string) => void;
}

export const useStore = create<Store>((set) => ({
  order: [],
  addToOrder: (product) => {
    const { categoryId, imageUrl, ...data } = product;
    set((state) => ({
      order: [
        ...state.order,
        { ...data, quantity: 1, subtotal: 1 * product.price },
      ],
    }));
  },
  removeFromCart: (itemId) => {
    console.log("Removing from cart:", itemId);
    // Implementation for removing from cart goes here
  },
}));
