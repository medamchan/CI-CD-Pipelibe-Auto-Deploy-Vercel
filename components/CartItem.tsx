"use client";
import { CartItem as Item } from "@/types";
import { useCartStore } from "@/lib/cartStore";

export default function CartItem({ item }: { item: Item }) {
  const { increaseQty, decreaseQty, removeFromCart } = useCartStore();

  return (
    <div className="flex justify-between items-center border-b py-3">
      <div>
        <h3 className="font-semibold">{item.name}</h3>
        <p>${item.price} × {item.quantity}</p>
      </div>

      <div className="flex gap-2">
        <button onClick={() => decreaseQty(item.id)}>-</button>
        <button onClick={() => increaseQty(item.id)}>+</button>
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-600"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
