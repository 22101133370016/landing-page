import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Shirts - Pambakali Outfit Store",
  description: "Explore stylish Shirts for all ages and genders at Pambakali.",
  openGraph: {
    title: "Shirts - Pambakali Outfit Store",
    description: "Explore stylish Shirts for all ages and genders at Pambakali.",
    images: [
      {
        url: "/images/shirts.jpg",
        width: 1200,
        height: 630,
        alt: "Shirts Collection"
      }
    ],
  },
};

export default function Shirts() {
  return (
    <section className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Shirts Collection</h1>
      <p className="text-center mb-8">Browse our collection of stylish shirts for every occasion.</p>
      <Link href="/contact"><Image src="/image1/shirts1.jpg" alt="Shirts Collection" width={300} height={300} className="mx-auto rounded-[34px] hover:scale-105 hover:shadow-lg transition-transform duration-300" /></Link>
      <Link href="/contact"><Image src="/image1/shirts.jpg" alt="Shirts Image" width={300} height={300} className="mx-auto rounded-[34px] mt-6 hover:scale-105 hover:shadow-lg transition-transform duration-300" /></Link>
      <Link href="/contact"><Image src="/image1/shirts1.jpg" alt="Shirts Image 2" width={300} height={300} className="mx-auto rounded-[34px] mt-6 hover:scale-105 hover:shadow-lg transition-transform duration-300" /></Link>
            
      
      <div className="mt-10 text-center">
        <Link href="/" className="text-blue-500 underline">← Back to Home</Link>
      </div>
    </section>
  );
}
