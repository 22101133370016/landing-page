import Image from 'next/image';
import Link from 'next/link';

export default function suits() {
  return (
    <section className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8">suits Collection</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Product 1 */}
        <div className="border rounded-lg shadow p-4 bg-white text-black">
          <Image src="/product/tshirt1.jpg" alt="Classic Tee" width={500} height={300} className="rounded mb-4"/>
          <h2 className="text-2xl font-semibold">Classic Fit Tee</h2>
          <p className="text-gray-600 mb-2">Feel the comfort. Look the part. The perfect tee for everyday style.</p>
          <p><strong>Available Sizes:</strong> S, M, L, XL</p>
          <p><strong>Price:</strong> $24.99</p>
        </div>

        {/* Product 2 */}
        <div className="border rounded-lg shadow p-4 bg-white text-black">
          <Image src="/products/tshirt2.jpg" alt="Graphic Tee" width={500} height={300} className="rounded mb-4"/>
          <h2 className="text-2xl font-semibold">Urban Graphic Tee</h2>
          <p className="text-gray-600 mb-2">Show off your vibe with this trendy streetwear-inspired piece.</p>
          <p><strong>Available Sizes:</strong> M, L, XL</p>
          <p><strong>Price:</strong> $29.99</p>
        </div>

        {/* Product 3 */}
        <div className="border rounded-lg shadow p-4 bg-white text-black">
          <Image src="/products/tshirt3.jpg" alt="V-Neck Tee" width={500} height={300} className="rounded mb-4"/>
          <h2 className="text-2xl font-semibold">Premium V-Neck</h2>
          <p className="text-gray-600 mb-2">Elevate your outfit with this soft, stylish v-neck tee.</p>
          <p><strong>Available Sizes:</strong> S, M, L</p>
          <p><strong>Price:</strong> $27.49</p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link href="/" className="text-blue-500 underline">← Back to Home</Link>
      </div>
    </section>
  );
}
