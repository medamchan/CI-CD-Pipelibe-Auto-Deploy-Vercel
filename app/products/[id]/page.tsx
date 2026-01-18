"use client";

import { products } from "@/lib/data";
import { useCartStore } from "@/lib/cartStore";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  const addToCart = useCartStore((state) => state.addToCart);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-green-600 text-xl">${product.price}</p>
      <p>Stock: {product.stock}</p>

      <button
        onClick={() =>
          addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
          })
        }
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
