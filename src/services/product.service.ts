import { Product } from '../types';

// Mock Data
const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Wireless Noise-Canceling Headphones',
    slug: 'wireless-noise-canceling-headphones',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    description: 'High-quality wireless headphones with active noise cancellation and 30-hour battery life. Perfect for travel and deep work.',
  },
  {
    id: '2',
    name: 'Minimalist Mechanical Keyboard',
    slug: 'minimalist-mechanical-keyboard',
    price: 149.50,
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80',
    description: 'Compact 75% mechanical keyboard with tactile switches and customizable RGB backlight. Enhances typing experience seamlessly.',
  },
  {
    id: '3',
    name: 'Ergonomic Desk Chair',
    slug: 'ergonomic-desk-chair',
    price: 399.00,
    image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=800&q=80',
    description: 'Adjustable ergonomic chair with lumbar support, breathable mesh back, and padded armrests for all-day comfort.',
  },
  {
    id: '4',
    name: 'Smart Home Hub',
    slug: 'smart-home-hub',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&w=800&q=80',
    description: 'Control your entire home with this intuitive smart hub. Compatible with all major smart home ecosystems.',
  },
];

// Mock API Service
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const ProductService = {
  async getProducts(): Promise<Product[]> {
    // Simulate network delay
    await delay(800);
    return MOCK_PRODUCTS;
  },

  async getProductBySlug(slug: string): Promise<Product | null> {
    await delay(500);
    const product = MOCK_PRODUCTS.find(p => p.slug === slug);
    return product || null;
  }
};
