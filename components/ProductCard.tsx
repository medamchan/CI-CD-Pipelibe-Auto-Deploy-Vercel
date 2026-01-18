import Link from "next/link";
import { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold text-lg">{product.name}</h2>
      <p className="text-green-600 font-semibold">${product.price}</p>

      <Link
        href={`/products/${product.id}`}
        className="block mt-2 bg-green-500 text-white text-center py-1 rounded"
      >
        View Details
      </Link>
    </div>
  );
}
