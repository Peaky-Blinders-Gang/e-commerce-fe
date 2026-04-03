import { ProductList } from '@/components/ProductList';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center py-20 px-4 rounded-3xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Next-Gen <span className="text-indigo-600">Tech Gear</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Discover premium gadgets designed for developers, creators, and enthusiasts. Elevate your workspace today.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
        >
          Shop All Products
        </Link>
      </section>

      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Featured Products</h2>
          <Link href="/products" className="text-indigo-600 font-medium hover:text-indigo-700 hover:underline">
            View all &rarr;
          </Link>
        </div>
        <ProductList />
      </section>
    </div>
  );
}
