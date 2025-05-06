import Image from 'next/image';
import Link from 'next/link';

export default function ShirtsPage() {
  return (
    <section className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Shirts Collection</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Product 1 */}
        <Link href="/shirts" className="block border rounded-lg shadow p-4 bg-white text-black hover:bg-gray-100 transition">
          <Image src="/image1/shirts.jpg" alt="Classic Shirt" width={500} height={300} className="rounded mb-4"/>
          <h2 className="text-2xl font-semibold">Classic Fit Shirt</h2>
          <p className="text-gray-600 mb-2">Feel the comfort. Look the part. The perfect shirt for everyday style.</p>
          <p><strong>Available Sizes:</strong> S, M, L, XL</p>
          <p><strong>Price:</strong> $34.99</p>
        </Link>

        {/* Product 2 */}
        <Link href="/shirts" className="block border rounded-lg shadow p-4 bg-white text-black hover:bg-gray-100 transition">
          <Image src="/image1/shirts1.jpg" alt="Graphic Shirt" width={500} height={300} className="rounded mb-4"/>
          <h2 className="text-2xl font-semibold">Urban Graphic Shirt</h2>
          <p className="text-gray-600 mb-2">Show off your vibe with this trendy streetwear-inspired piece.</p>
          <p><strong>Available Sizes:</strong> M, L, XL</p>
          <p><strong>Price:</strong> $39.99</p>
        </Link>

        {/* Product 3 */}
        <Link href="/shirts" className="block border rounded-lg shadow p-4 bg-white text-black hover:bg-gray-100 transition">
          <Image src="/image1/shirts2.jpg" alt="Premium Shirt" width={500} height={300} className="rounded mb-4"/>
          <h2 className="text-2xl font-semibold">Premium Shirt</h2>
          <p className="text-gray-600 mb-2">Elevate your outfit with this soft, stylish shirt.</p>
          <p><strong>Available Sizes:</strong> S, M, L</p>
          <p><strong>Price:</strong> $37.49</p>
        </Link>
      </div>

      <div className="mt-10 text-center">
        <Link href="/" className="text-blue-500 underline">← Back to Home</Link>
      </div>
    </section>
  );
}
