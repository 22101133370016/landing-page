"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

interface ImageData {
  id: string;
  category: string;
  url: string;
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

  return (
    <section className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Suits Collection</h1>
      <p className="text-center mb-8">Discover our premium collection of suits for every occasion.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href={{ pathname: "/contact", query: { image: "/image1/suit1.jpg" } }}>
          <Image
            src="/image1/suit1.jpg"
            alt="Suits Collection"
            width={600}
            height={400}
            className="mx-auto rounded hover:scale-105 hover:shadow-lg transition-transform duration-300"
          />
        </Link>
        <Link href={{ pathname: "/contact", query: { image: "/image1/suit.jpg" } }}>
          <Image
            src="/image1/suit.jpg"
            alt="Suits Image"
            width={600}
            height={400}
            className="mx-auto rounded mt-6 hover:scale-105 hover:shadow-lg transition-transform duration-300"
          />
        </Link>
        <Link href={{ pathname: "/contact", query: { image: "/image1/suit2.jpg" } }}>
          <Image
            src="/image1/suit2.jpg"
            alt="Suits Image 2"
            width={600}
            height={400}
            className="mx-auto rounded mt-6 hover:scale-105 hover:shadow-lg transition-transform duration-300"
          />
        </Link>
        <Link href={{ pathname: "/contact", query: { image: "/image1/suits1.jpg" } }}>
          <Image
            src="/image1/suits1.jpg"
            alt="Suits Image 3"
            width={600}
            height={400}
            className="mx-auto rounded mt-6 hover:scale-105 hover:shadow-lg transition-transform duration-300"
          />
        </Link>

        {uploadedImages.map((img) => (
          <Link key={img.id} href={{ pathname: "/contact", query: { image: img.url } }}>
            <Image
              src={img.url}
              alt={img.category}
              width={600}
              height={400}
              className="mx-auto rounded mt-6 hover:scale-105 hover:shadow-lg transition-transform duration-300 object-cover"
            />
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
