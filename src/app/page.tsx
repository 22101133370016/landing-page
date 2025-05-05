import Link from 'next/link';

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
  description: "Discover the best in fashion: suits, t-shirts, jeans, shirts, shoes, and women’s clothing.",
  openGraph: {
    title: "Pambakali Outfit Store - Premium Fashion for Everyone",
    description: "Discover the best in fashion: suits, t-shirts, jeans, shirts, shoes, and women’s clothing.",
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
    <div id="home">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-800 text-white py-20 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">Welcome to Pambakali Outfit Store</h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-8">
          Discover the best in fashion: suits, t-shirts, jeans, shirts, shoes, and women’s clothing.
        </p>
        <button className="bg-yellow-500 text-white px-6 py-3 rounded-full text-lg hover:bg-yellow-600 transition">
          Shop Now
        </button>
      </section>

      {/* Categories Section */}
      <section id="shop" className="container mx-auto px-6 py-20">
        <h3 className="text-3xl sm:text-4xl font-semibold text-center mb-16 text-gray-900">
          Shop by Categories
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="block relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img src={category.image} alt={category.title} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h4 className="text-2xl font-semibold text-white">{category.title}</h4>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-200 py-20 text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold mb-6">About Us</h3>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Pambakali Outfit Store offers premium quality clothing for all occasions. We focus on style, comfort, and affordable fashion for everyone.
        </p>
      </section>

      {/* Upload Image Button Section at Bottom */}
      <section className="text-center my-12">
        <Link href="/uploadimage">
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-full text-lg hover:bg-yellow-600 transition">
            Upload Image
          </button>
        </Link>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold mb-6">Contact Us</h3>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">
          Have questions or need assistance? We’re here to help!
        </p>
        <button className="bg-yellow-500 text-white px-6 py-3 rounded-full text-lg hover:bg-yellow-600 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
