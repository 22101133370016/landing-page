import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pambakali Outfit Store',
  description: 'Shop the latest fashion: suits, t-shirts, jeans, shirts, shoes, and women’s fashion.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <header className="bg-black text-white">
          <nav className="container mx-auto flex justify-between items-center p-6">
            <h1 className="text-2xl font-bold">Pambakali Outfit Store</h1>
            <ul className="flex space-x-6 text-lg">
              <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
              <li><Link href="/" className="hover:text-yellow-400">Shop</Link></li>
              <li><Link href="/about" className="hover:text-yellow-400">About</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="bg-black text-white text-center py-4">
          <p>&copy; {new Date().getFullYear()} Pambakali Outfit Store. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
