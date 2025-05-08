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

export default function Tshirts() {
  const [uploadedImages, setUploadedImages] = useState<ImageData[]>([]);

  React.useEffect(() => {
    const imagesJson = localStorage.getItem("uploadedImages");
    if (imagesJson) {
      const images: ImageData[] = JSON.parse(imagesJson);
      const tshirtImages = images.filter((img) => img.category === "Tshirt");
      setUploadedImages(tshirtImages);
    }
  }, []);

  // Define prices for static images
  const staticProducts = [
    { url: "/image1/tshirts.jpg", price: 29.99 },
    { url: "/image1/tshirts1.jpg", price: 34.99 },
    { url: "/image1/tshirts1.jpg", price: 34.99 },
  ];

  return (
    <section className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-8">T-Shirts Collection</h1>
      <p className="text-center mb-8">Explore stylish T-Shirts for all ages and genders at Pambakali.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {staticProducts.map((product) => (
          <Link
            key={product.url}
            href={{ pathname: "/contact", query: { image: product.url, price: product.price.toString() } }}
          >
            <div>
              <Image
                src={product.url}
                alt="T-Shirt"
                width={400}
                height={300}
                className="mx-auto rounded mb-6 hover:scale-105 hover:shadow-lg transition-transform duration-300"
              />
              <p className="text-center font-semibold">${product.price.toFixed(2)}</p>
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
                width={400}
                height={300}
                className="mx-auto rounded mb-6 hover:scale-105 hover:shadow-lg transition-transform duration-300 object-cover"
              />
              <p className="text-center font-semibold">${img.price ? img.price.toFixed(2) : "N/A"}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-10">
        <Link href="/" className="text-blue-500 underline">
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}
