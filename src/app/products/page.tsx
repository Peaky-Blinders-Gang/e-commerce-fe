import { ProductList } from '@/components/ProductList';

export const metadata = {
  title: 'Products | LuxeTech',
  description: 'Browse our collection of premium tech gadgets',
};

export default function ProductsPage() {
  return (
    <div className="py-8">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">All Products</h1>
        <p className="text-gray-600 text-lg">
          Explore our carefully curated selection of high-end technology products meant to level up your workflow.
        </p>
      </div>
      
      <ProductList />
    </div>
  );
}
