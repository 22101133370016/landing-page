"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

interface ImageData {
  id: string;
  category: string;
  url: string;
}

export default function Shoes() {
  const [uploadedImages, setUploadedImages] = useState<ImageData[]>([]);

  React.useEffect(() => {
    const imagesJson = localStorage.getItem("uploadedImages");
    if (imagesJson) {
      const images: ImageData[] = JSON.parse(imagesJson);
      const shoesImages = images.filter((img) => img.category === "Shoes");
      setUploadedImages(shoesImages);
    }
  }, []);

  return (
    <section className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-8">Shoes Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href={{ pathname: "/contact", query: { image: "/image1/shoes.jpg" } }}>
          <Image
            src="/image1/shoes.jpg"
            alt="Shoes Collection"
            width={300}
            height={300}
            className="mx-auto rounded-lg hover:scale-102 hover:shadow-md transition-transform duration-300"
          />
        </Link>
        <Link href={{ pathname: "/contact", query: { image: "/image1/shoes1.jpg" } }}>
          <Image
            src="/image1/shoes1.jpg"
            alt="Shoes Collection"
            width={300}
            height={300}
            className="mx-auto rounded-lg hover:scale-102 hover:shadow-md transition-transform duration-300"
          />
        </Link>
        <Link href={{ pathname: "/contact", query: { image: "/image1/shoes2.jpg" } }}>
          <Image
            src="/image1/shoes2.jpg"
            alt="Shoes Collection"
            width={300}
            height={300}
            className="mx-auto rounded-lg hover:scale-102 hover:shadow-md transition-transform duration-300"
          />
        </Link>

        {uploadedImages.map((img) => (
          <Link key={img.id} href={{ pathname: "/contact", query: { image: img.url } }}>
            <Image
              src={img.url}
              alt={img.category}
              width={300}
              height={300}
              className="mx-auto rounded-lg hover:scale-102 hover:shadow-md transition-transform duration-300 object-cover"
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
