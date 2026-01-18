"use client";

import { useCartStore } from "@/lib/cartStore";
import CartItem from "@/components/CartItem";
import Link from "next/link";

export default function CartPage() {
  const items = useCartStore((state) => state.items);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) return <p>Your cart is empty</p>;

  return (
    <div className="bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <p className="font-bold mt-4">Total: ${total.toFixed(2)}</p>

      <Link
        href="/checkout"
        className="block mt-4 bg-green-600 text-white text-center py-2 rounded"
      >
        Checkout
      </Link>
    </div>
  );
}
