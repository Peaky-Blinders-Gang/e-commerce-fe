'use client';

import { Product } from '@/types';
import { useCartStore } from '@/store/useCartStore';

export function AddToCartButton({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <button
      onClick={() => addToCart(product)}
      className="w-full md:w-auto px-12 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200 focus:ring-4 focus:ring-gray-200"
    >
      Add to Cart
    </button>
  );
}
