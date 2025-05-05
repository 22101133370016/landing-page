import Shirts from '@/app/shirts/page';
import Image from 'next/image1';
import Link from 'next/link';

export default function T-Shirts() {
  return (
    <section className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8">jeans Collection</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Product 1 */}
        <Link href="/tshirts" className="block border rounded-lg shadow p-4 bg-white text-black hover:bg-gray-100 transition">
          <Image src="/image1/tshirts.jpg" alt="Classic Tee" width={500} height={300} className="rounded mb-4"/>
          <h2 className="text-2xl font-semibold">Classic Fit Tee</h2>
          <p className="text-gray-600 mb-2">Feel the comfort. Look the part. The perfect tee for everyday style.</p>
          <p><strong>Available Sizes:</strong> S, M, L, XL</p>
          <p><strong>Price:</strong> $24.99</p>
        </Link>

        {/* Product 2 */}
        <Link href="/tshirts" className="block border rounded-lg shadow p-4 bg-white text-black hover:bg-gray-100 transition">
          <Image src="/image1/tshirts1.jpg" alt="Graphic Tee" width={500} height={300} className="rounded mb-4"/>
          <h2 className="text-2xl font-semibold">Urban Graphic Tee</h2>
          <p className="text-gray-600 mb-2">Show off your vibe with this trendy streetwear-inspired piece.</p>
          <p><strong>Available Sizes:</strong> M, L, XL</p>
          <p><strong>Price:</strong> $29.99</p>
        </Link>

        {/* Product 3 */}
        <Link href="/tshirts" className="block border rounded-lg shadow p-4 bg-white text-black hover:bg-gray-100 transition">
          <Image src="/image1/tshirts.jpg" alt="V-Neck Tee" width={500} height={300} className="rounded mb-4"/>
          <h2 className="text-2xl font-semibold">Premium V-Neck</h2>
          <p className="text-gray-600 mb-2">Elevate your outfit with this soft, stylish v-neck tee.</p>
          <p><strong>Available Sizes:</strong> S, M, L</p>
          <p><strong>Price:</strong> $27.49</p>
        </Link>
      </div>

      <div className="mt-10 text-center">
        <Link href="/" className="text-blue-500 underline">← Back to Home</Link>
      </div>
    </section>
  );
}
