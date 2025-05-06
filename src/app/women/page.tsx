import Link from 'next/link';
// Removed: import Image from 'next/image';

export const metadata = {
  title: "Women's Fashion - Pambakali Outfit Store",
  description: "Explore stylish women's fashion for all ages and styles at Pambakali.",
  openGraph: {
    title: "Women's Fashion - Pambakali Outfit Store",
    description: "Explore stylish women's fashion for all ages and styles at Pambakali.",
    images: [
      {
        url: "/images/womenfashion.jpg",
        width: 1200,
        height: 630,
        alt: "Women's Fashion Collection"
      }
    ],
  },
};

import WomenImages from './WomenImages';

export default function Women() {
  return (
    <section className="p-8 bg-transparent">
      <h1 className="text-4xl font-bold text-center mb-8">Women's Fashion Collection</h1>
      <p className="text-center mb-8">Discover the latest trends in women's fashion.</p>
      <WomenImages />
      <div className="mt-10 text-center">
        <Link href="/">
          <div className="text-blue-500 underline">← Back to Home</div>
        </Link>
      </div>
    </section>
  );
}
