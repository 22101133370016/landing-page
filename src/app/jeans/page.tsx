"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface ImageData {
  id: string;
  category: string;
  url: string;
}

export default function Jeans() {
  const [uploadedImages, setUploadedImages] = useState<ImageData[]>([]);

  useEffect(() => {
    const imagesJson = localStorage.getItem("uploadedImages");
    if (imagesJson) {
      const images: ImageData[] = JSON.parse(imagesJson);
      const jeansImages = images.filter((img) => img.category === "Jeans");
      setUploadedImages(jeansImages);
    }
  }, []);

  return (
    <section className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Jeans Collection</h1>
      <p className="text-center mb-8">Find your perfect fit with our wide range of jeans.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href={{ pathname: "/contact", query: { image: "/image1/jeans1.jpg" } }}>
          <Image
            src="/image1/jeans1.jpg"
            alt="jeans Collection"
            width={300}
            height={300}
            className="mx-auto rounded-[34px] hover:scale-105 hover:shadow-lg transition-transform duration-300"
          />
        </Link>
        <Link href={{ pathname: "/contact", query: { image: "/image1/jeans.jpg" } }}>
          <Image
            src="/image1/jeans.jpg"
            alt="jeans Image"
            width={300}
            height={300}
            className="mx-auto rounded-[34px] mt-6 hover:scale-105 hover:shadow-lg transition-transform duration-300"
          />
        </Link>
        <Link href={{ pathname: "/contact", query: { image: "/image1/jeans1.jpg" } }}>
          <Image
            src="/image1/jeans1.jpg"
            alt="jeans Image 2"
            width={300}
            height={300}
            className="mx-auto rounded-[34px] mt-6 hover:scale-105 hover:shadow-lg transition-transform duration-300"
          />
        </Link>

        {uploadedImages.map((img) => (
          <Link key={img.id} href={{ pathname: "/contact", query: { image: img.url } }}>
            <Image
              src={img.url}
              alt={img.category}
              width={300}
              height={300}
              className="mx-auto rounded-[34px] mt-6 hover:scale-105 hover:shadow-lg transition-transform duration-300 object-cover"
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
