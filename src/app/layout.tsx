import './globals.css';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';

export const metadata: Metadata = {
  title: 'Pambakali Outfit Store',
  description: 'Shop the latest fashion: suits, t-shirts, jeans, shirts, shoes, and women’s fashion.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <header>
          <Navbar />
        </header>

        <main>{children}</main>

        <footer className="bg-black text-white text-center py-4">
          <p>&copy; {new Date().getFullYear()} Pambakali Outfit Store. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
