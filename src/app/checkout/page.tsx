'use client';

import { useCartStore } from '@/store/useCartStore';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CheckCircle } from 'lucide-react';
import { AuthService } from '@/services/auth.service';
import { useState, useEffect } from 'react';

export default function CheckoutPage() {
  const { cartTotal, clearCart } = useCartStore();
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!AuthService.isAuthenticated()) {
      router.replace('/login');
    }
  }, [router]);

  if (!AuthService.isAuthenticated()) {
    return null;
  }

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    clearCart();
  };

  if (success) {
    return (
      <div className="min-h-[50vh] flex flex-col justify-center items-center text-center px-4 py-20">
        <CheckCircle className="w-20 h-20 text-green-500 mb-6" />
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Order Confirmed!</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-md">
          Thank you for your purchase. We have received your order and will process it immediately.
        </p>
        <Link
          href="/"
          className="px-8 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-12">
      <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-10 text-center">Checkout</h1>

      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Details</h2>
        
        <form onSubmit={handleCheckout} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
              <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
              <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-colors" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-colors" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Card Details</label>
            <div className="p-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-500 text-center">
              Stripe / Payment Gateway Element would be embedded here
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6 mt-8">
            <button
              type="submit"
              className="w-full py-4 bg-indigo-600 text-white font-bold text-lg rounded-full hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 focus:ring-4 focus:ring-indigo-100"
            >
              Pay ${cartTotal.toFixed(2)}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
