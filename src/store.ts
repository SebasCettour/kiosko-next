import { create } from "zustand";
import { OrderItem } from "./types";
import { Product } from "@prisma/client";
import { it } from "node:test";

interface Store {
  order: OrderItem[];
  addToOrder: (product: Product) => void;
  removeFromCart: (itemId: string) => void;
}

export const useStore = create<Store>((set, get) => ({
  order: [],
  addToOrder: (product) => {
    const { categoryId, imageUrl, ...data } = product;
    let items : OrderItem[] = []

    if(get().order.find(item => item.id === data.id)){
        items = get().order.map(item =>
            item.id === data.id ? {
                ...item,
                quantity: item.quantity + 1,
                subtotal: (item.price + 1) * item.quantity + 1,
            } : item
        );

    }else{
      items = [
        ...get().order,
        { ...data, quantity: 1, subtotal: 1 * product.price },
      ];
    }

    set(() => ({
      order: items,
    }));
  },
  removeFromCart: (itemId) => {
    console.log("Removing from cart:", itemId);
    // Implementation for removing from cart goes here
  },
}));
