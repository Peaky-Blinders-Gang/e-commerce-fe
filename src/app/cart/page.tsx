'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { CartItem } from '@/components/CartItem';
import { AuthService } from '@/services/auth.service';
import { useEffect } from 'react';

export default function CartPage() {
  const { items, cartTotal } = useCartStore();
  const router = useRouter();

  useEffect(() => {
    if (!AuthService.isAuthenticated()) {
      router.replace('/login');
    }
  }, [router]);

  if (!AuthService.isAuthenticated()) {
    return null;
  }

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col justify-center items-center text-center px-4">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-gray-400">
          <ShoppingBag className="w-12 h-12" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
        <p className="text-lg text-gray-500 mb-8 max-w-md">
          Looks like you have not added anything to your cart yet. Browse our products to find your next tech gear.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="py-8">
      <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-10">Shopping Cart</h1>
      
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 sticky top-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-medium text-gray-900">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span className="font-medium text-gray-900">Calculated at checkout</span>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-6 mb-8">
              <div className="flex justify-between">
                <span className="text-xl font-bold text-gray-900">Total</span>
                <span className="text-2xl font-black text-indigo-600">${cartTotal.toFixed(2)}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="flex items-center justify-center w-full py-4 px-6 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-colors group"
            >
              Proceed to Checkout
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
