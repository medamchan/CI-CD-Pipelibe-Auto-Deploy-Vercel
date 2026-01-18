"use client";

import { useCartStore } from "@/lib/cartStore";

export default function CheckoutPage() {
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = () => {
    alert("Order placed successfully!");
    clearCart();
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold">Checkout</h1>
      <p>Total Amount: ${total.toFixed(2)}</p>

      <button
        onClick={placeOrder}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
      >
        Place Order
      </button>
    </div>
  );
}
