import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ProductService } from '@/services/product.service';
import { AddToCartButton } from '@/components/AddToCartButton';

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = await ProductService.getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="grid md:grid-cols-2 gap-12 lg:gap-16 py-8 md:py-16">
      <div className="relative aspect-square md:aspect-auto md:h-[600px] w-full rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm">
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col">
        <div className="mb-8">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-3xl font-bold text-indigo-600 mb-6">${product.price.toFixed(2)}</p>
          <div className="prose prose-lg text-gray-600">
            <p>{product.description}</p>
          </div>
        </div>

        <div className="mt-auto pt-8 border-t border-gray-100">
          <AddToCartButton product={product} />

          <div className="mt-8 space-y-4 text-sm text-gray-500">
            <div className="flex pb-4 border-b border-gray-100">
              <span className="font-semibold text-gray-900 w-32">Shipping</span>
              <span>Free shipping on all orders</span>
            </div>
            <div className="flex pb-4 border-b border-gray-100">
              <span className="font-semibold text-gray-900 w-32">Returns</span>
              <span>30 days return policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
