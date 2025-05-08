"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

interface ImageData {
  id: string;
  category: string;
  url: string;
  price: number;
}

export default function Suits() {
  const [uploadedImages, setUploadedImages] = useState<ImageData[]>([]);

  React.useEffect(() => {
    const imagesJson = localStorage.getItem("uploadedImages");
    if (imagesJson) {
      const images: ImageData[] = JSON.parse(imagesJson);
      const suitImages = images.filter((img) => img.category === "Suit");
      setUploadedImages(suitImages);
    }
  }, []);

  // Define prices for static images
  const staticProducts = [
    { url: "/image1/suit1.jpg", price: 199.99 },
    { url: "/image1/suit.jpg", price: 249.99 },
    { url: "/image1/suit2.jpg", price: 179.99 },
    { url: "/image1/suits1.jpg", price: 299.99 },
  ];

  return (
    <section className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Suits Collection</h1>
      <p className="text-center mb-8">Discover our premium collection of suits for every occasion.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {staticProducts.map((product) => (
          <Link
            key={product.url}
            href={{ pathname: "/contact", query: { image: product.url, price: product.price.toString() } }}
          >
            <div>
              <Image
                src={product.url}
                alt="Suits Collection"
                width={600}
                height={400}
                className="mx-auto rounded hover:scale-105 hover:shadow-lg transition-transform duration-300"
              />
              <p className="text-center mt-2 font-semibold">${product.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}

        {uploadedImages.map((img) => (
          <Link
            key={img.id}
            href={{ pathname: "/contact", query: { image: img.url, price: img.price ? img.price.toString() : "0" } }}
          >
            <div>
              <Image
                src={img.url}
                alt={img.category}
                width={600}
                height={400}
                className="mx-auto rounded mt-6 hover:scale-105 hover:shadow-lg transition-transform duration-300 object-cover"
              />
              <p className="text-center mt-2 font-semibold">${img.price ? img.price.toFixed(2) : "N/A"}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link href="/" className="text-blue-500 underline">
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}
