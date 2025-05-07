import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { title: 'Suits', image: '/images/soot4.jpg' },
  { title: 'T-Shirts', image: '/images/tshirts.jpg' },
  { title: 'Jeans', image: '/images/jeans.jpg' },
  { title: 'Shirts', image: '/images/shirts.jpg' },
  { title: 'Shoes', image: '/images/shoes.jpg' },
  { title: 'Women Fashion', image: '/images/womenfashion.jpg' },
];

export const metadata = {
  title: "Pambakali Outfit Store - Premium Fashion for Everyone",
  description: "Discover the best in fashion: suits, t-shirts, jeans, shirts, shoes, and women&apos;s clothing.",
  openGraph: {
    title: "Pambakali Outfit Store - Premium Fashion for Everyone",
    description: "Discover the best in fashion: suits, t-shirts, jeans, shirts, shoes, and women&apos;s clothing.",
    images: [
      {
        url: "/images/womenfashion.jpg",
        width: 1200,
        height: 630,
        alt: "Pambakali Outfit Store"
      }
    ],
  },
};

export default function Home() {
  return (
    <div id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-800 text-white py-20 text-center rounded-lg shadow-lg relative overflow-hidden">
        <style>{`
          .star {
            position: absolute;
            background: white;
            border-radius: 50%;
            opacity: 0.8;
            animation: star-rise 3s linear infinite;
          }
          @keyframes star-rise {
            0% {
              transform: translateY(100%) scale(0.5);
              opacity: 0.8;
            }
            100% {
              transform: translateY(-100%) scale(1);
              opacity: 0;
            }
          }
          .marquee {
            display: inline-block;
            white-space: nowrap;
            color: #FFD700;
            font-weight: 900;
            font-size: 3.75rem; /* text-6xl */
            animation: marquee 10s linear infinite;
          }
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .contact-marquee {
            display: inline-block;
            white-space: nowrap;
            color: #FFD700;
            font-weight: 700;
            font-size: 1.25rem; /* text-xl */
            animation: marquee 30s linear infinite;
          }
          .contact-marquee div {
            display: block;
            margin: 0.25rem 0;
          }
        `}</style>

        {[...Array(20)].map((_, i) => {
          const size = Math.random() * 3 + 1;
          const left = Math.random() * 100;
          const delay = Math.random() * 3;
          return (
            <span
              key={i}
              className="star"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                bottom: 0,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}

        <h2 className="mb-6 leading-tight relative z-10">
          <span className="marquee">Welcome to Pambakali Outfit Store</span>
        </h2>
        <p className="text-2xl mb-8 max-w-3xl mx-auto leading-relaxed relative z-10">
          Discover the best in fashion: suits, t-shirts, jeans, shirts, shoes, and women&apos;s clothing.
        </p>
        <button className="bg-yellow-500 text-white px-8 py-4 rounded-full text-xl hover:bg-yellow-600 transition-shadow shadow-md hover:shadow-xl relative z-10">
          Shop Now
        </button>
      </section>

      {/* Categories Section */}
      <section id="shop" className="py-20">
        <h3 className="text-4xl font-semibold text-center mb-16 text-gray-900">
          Shop by Categories
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category) => {
            const folderMap: Record<string, string> = {
              'Suits': 'suits',
              'T-Shirts': 'tshirts',
              'Jeans': 'jeans',
              'Shirts': 'shirts',
              'Shoes': 'shoes',
              'Women Fashion': 'women'
            };
            const href = '/' + (folderMap[category.title] || category.title.toLowerCase().replace(/\s+/g, '-'));
            return (
              <Link
                key={category.title}
                href={href}
                className="block relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative w-full aspect-[4/3]">
                  <Image 
                    src={category.image} 
                    alt={category.title} 
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    priority={category.title === 'Suits'} // Prioritize loading the first image
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-xl">
                  <h4 className="text-3xl font-semibold text-white">{category.title}</h4>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-200 py-20 text-center rounded-lg shadow-inner max-w-4xl mx-auto">
        <h3 className="text-4xl font-semibold mb-6">About Us</h3>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Pambakali Outfit Store offers premium quality clothing for all occasions. We focus on style, comfort, and affordable fashion for everyone.
        </p>
      </section>

      {/* Upload Image Button Section at Bottom */}
      <section className="text-center my-12">
        <Link href="/uploadimage">
          <button className="bg-yellow-500 text-white px-8 py-4 rounded-full text-xl hover:bg-yellow-600 transition-shadow shadow-md hover:shadow-xl">
            Upload Image
          </button>
        </Link>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 text-center max-w-3xl mx-auto">
        <h3 className="text-4xl font-semibold mb-6">Contact Us</h3>
        <p className="mb-4 leading-relaxed">
          <span className="contact-marquee">
            <div>Phone: 0740107651</div>
            <div>Phone: 0629746975</div>
            <div>Email: gealex108@gmail.com</div>
          </span>
        </p>
        <button className="bg-yellow-500 text-white px-8 py-4 rounded-full text-xl hover:bg-yellow-600 transition-shadow shadow-md hover:shadow-xl">
          Contact Us
        </button>
      </section>
    </div>
  );
}
