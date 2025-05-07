import Image from 'next/image';
import Link from 'next/link';

export default function ShirtsPage() {
  return (
    <section className="p-12 bg-gray-50 min-h-screen">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-900">Shirts Collection</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {/* Product 1 */}
        <Link href="/shirts" className="block border rounded-3xl shadow-lg p-6 bg-white text-black hover:bg-yellow-50 transition duration-300">
          <Image src="/image1/shirts.jpg" alt="Classic Shirt" width={500} height={300} className="rounded-xl mb-6 shadow-md"/>
          <h2 className="text-3xl font-semibold mb-2">Classic Fit Shirt</h2>
          <p className="text-gray-700 mb-4">Feel the comfort. Look the part. The perfect shirt for everyday style.</p>
          <p><strong>Available Sizes:</strong> S, M, L, XL</p>
          <p><strong>Price:</strong> $34.99</p>
        </Link>

        {/* Product 2 */}
        <Link href="/shirts" className="block border rounded-3xl shadow-lg p-6 bg-white text-black hover:bg-yellow-50 transition duration-300">
          <Image src="/image1/shirts1.jpg" alt="Graphic Shirt" width={500} height={300} className="rounded-xl mb-6 shadow-md"/>
          <h2 className="text-3xl font-semibold mb-2">Urban Graphic Shirt</h2>
          <p className="text-gray-700 mb-4">Show off your vibe with this trendy streetwear-inspired piece.</p>
          <p><strong>Available Sizes:</strong> M, L, XL</p>
          <p><strong>Price:</strong> $39.99</p>
        </Link>

        {/* Product 3 */}
        <Link href="/shirts" className="block border rounded-3xl shadow-lg p-6 bg-white text-black hover:bg-yellow-50 transition duration-300">
          <Image src="/image1/shirts2.jpg" alt="Premium Shirt" width={500} height={300} className="rounded-xl mb-6 shadow-md"/>
          <h2 className="text-3xl font-semibold mb-2">Premium Shirt</h2>
          <p className="text-gray-700 mb-4">Elevate your outfit with this soft, stylish shirt.</p>
          <p><strong>Available Sizes:</strong> S, M, L</p>
          <p><strong>Price:</strong> $37.49</p>
        </Link>
      </div>

      <div className="mt-16 text-center">
        <Link href="/" className="text-yellow-600 hover:text-yellow-800 underline font-semibold">← Back to Home</Link>
      </div>
    </section>
  );
}
