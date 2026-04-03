'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ShoppingCart, Package } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { useAuthStore } from '@/store/auth.store';
import { useEffect, useState } from 'react';

export function Header() {
  const itemCount = useCartStore((state) => state.itemCount);
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logout = useAuthStore((state) => state.logout);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-indigo-600 font-bold text-xl group">
          <Package className="w-6 h-6 group-hover:scale-110 transition-transform" />
          <span>LuxeTech</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/products" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
            Products
          </Link>
          <Link href="/cart" className="relative group flex items-center p-2 rounded-full hover:bg-gray-50 transition-colors">
            <ShoppingCart className="w-5 h-5 text-gray-700 group-hover:text-indigo-600 transition-colors" />
            {mounted && itemCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm ring-2 ring-white transform scale-100 transition-transform hover:scale-110">
                {itemCount}
              </span>
            )}
          </Link>

          {mounted && isAuthenticated ? (
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <span className="px-3 py-1 bg-gray-100 rounded-full">Hello, {user?.name ?? 'User'}</span>
              <button
                type="button"
                onClick={handleLogout}
                className="px-3 py-1 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="px-3 py-1 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
