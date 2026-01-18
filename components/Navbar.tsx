"use client";
import Link from "next/link";
import { useCartStore } from "@/lib/cartStore";

export default function Navbar() {
  const items = useCartStore((state) => state.items);

  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between">
      <Link href="/" className="font-bold text-xl">
        GroceryMart
      </Link>

      <div className="space-x-4">
        <Link href="/cart">Cart ({items.length})</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}
