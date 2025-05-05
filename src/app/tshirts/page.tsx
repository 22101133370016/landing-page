"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface ImageData {
  id: string;
  category: string;
  url: string;
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

  return (
    <section className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-8">T-Shirts Collection</h1>
      <p className="text-center mb-8">Explore stylish T-Shirts for all ages and genders at Pambakali.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href={{ pathname: "/contact", query: { image: "/image1/tshirts.jpg" } }}>
          <Image
            src="/image1/tshirts.jpg"
            alt="T-Shirt 1"
            width={400}
            height={300}
            className="mx-auto rounded mb-6 hover:scale-105 hover:shadow-lg transition-transform duration-300"
          />
        </Link>
        <Link href={{ pathname: "/contact", query: { image: "/image1/tshirts1.jpg" } }}>
          <Image
            src="/image1/tshirts1.jpg"
            alt="T-Shirt 2"
            width={400}
            height={300}
            className="mx-auto rounded mb-6 hover:scale-105 hover:shadow-lg transition-transform duration-300"
          />
        </Link>
        <Link href={{ pathname: "/contact", query: { image: "/image1/tshirts1.jpg" } }}>
          <Image
            src="/image1/tshirts1.jpg"
            alt="T-Shirt 3"
            width={400}
            height={300}
            className="mx-auto rounded mb-6 hover:scale-105 hover:shadow-lg transition-transform duration-300"
          />
        </Link>

        {uploadedImages.map((img) => (
          <Link key={img.id} href={{ pathname: "/contact", query: { image: img.url } }}>
            <Image
              src={img.url}
              alt={img.category}
              width={400}
              height={300}
              className="mx-auto rounded mb-6 hover:scale-105 hover:shadow-lg transition-transform duration-300 object-cover"
            />
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
