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
    console.log("Adding to cart:", product);
    // Implementation for adding to cart goes here
  },
  removeFromCart: (itemId) => {
    console.log("Removing from cart:", itemId);
    // Implementation for removing from cart goes here
  }
}))
