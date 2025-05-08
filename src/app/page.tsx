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
    <div id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white text-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 via-amber-100 to-yellow-100 text-gray-900 py-24 text-center rounded-lg shadow-md relative overflow-hidden">
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
            color: #6b4c3b; /* warm brown */
            font-weight: 900;
            font-size: 1.75rem; /* updated font size */
            background-color: transparent; /* removed background color */
            animation: marquee 10s linear infinite;
            animation-iteration-count: infinite;
          }
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .contact-marquee {
            display: inline-block;
            white-space: nowrap;
            color: #6b4c3b; /* warm brown */
            font-weight: 700;
            font-size: 1.25rem; /* text-xl */
            animation: marquee 15s linear infinite;
            animation-iteration-count: infinite;
          }
          .contact-marquee div {
            display: block;
            margin: 0.25rem 0;
          }
          .category-title {
            text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
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
        <h2 className="mb-8 leading-tight relative z-10 text-5xl sm:text-6xl font-extrabold tracking-tight">
          <span className="marquee">welcome to Pambakali Outfit Store we care our customer</span>
        </h2>
        <p className="text-3xl mb-12 max-w-3xl mx-auto leading-relaxed relative z-10">
          Discover the best in fashion: suits, t-shirts, jeans, shirts, shoes, and women&apos;s clothing.
        </p>
        <Link href="#shop" scroll={true} legacyBehavior>
          <a className="bg-white text-amber-700 font-semibold px-10 py-5 rounded-full text-2xl hover:bg-amber-100 transition-shadow shadow-lg hover:shadow-2xl relative z-10 inline-block">
            Shop Now
          </a>
        </Link>
      </section>

      {/* Categories Section */}
      <section id="shop" className="py-24 bg-amber-50 rounded-lg shadow-inner mb-20">
        <h3 className="text-5xl font-extrabold text-center mb-20 text-amber-700">
          Shop by Categories
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
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
                className="block relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
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
                <div className="absolute inset-0 flex items-center justify-center rounded-2xl">
                  <h4 className="text-4xl font-extrabold text-white category-title">{category.title}</h4>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-24 text-center rounded-2xl shadow-inner max-w-4xl mx-auto">
        <h3 className="text-5xl font-extrabold mb-8">About Us</h3>
        <p className="text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Pambakali Outfit Store offers premium quality clothing for all occasions. We focus on style, comfort, and affordable fashion for everyone.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 text-center max-w-3xl mx-auto rounded-2xl shadow-inner" style={{ backgroundColor: 'wheat' }}>
        <h3 className="text-5xl font-extrabold mb-8">Contact Us</h3>
        <button className="bg-amber-700 text-white font-semibold px-10 py-4 rounded-full text-2xl hover:bg-amber-800 transition-shadow shadow-lg hover:shadow-2xl mb-6">
          Contact Us
        </button>
        <p className="leading-relaxed text-lg contact-marquee max-w-md mx-auto">
          <div>Phone: 0740107651</div>
          <div>Phone: 0629746975</div>
          <div>Email: gealex108@gmail.com</div>
        </p>
      </section>
    </div>
  );
}
