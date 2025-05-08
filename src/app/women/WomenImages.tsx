"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface ImageData {
  id: string;
  category: string;
  url: string;
}

export default function WomenImages() {
  const [uploadedImages, setUploadedImages] = useState<ImageData[]>([]);

  useEffect(() => {
    const imagesJson = localStorage.getItem("uploadedImages");
    if (imagesJson) {
      const images: ImageData[] = JSON.parse(imagesJson);
      const womenImages = images.filter((img) => img.category === "Women Fashion");
      setUploadedImages(womenImages);
    }
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-transparent p-6">
      {/* Static Images */}
      <Link href={{ pathname: "/contact", query: { image: "/image1/women.jpg" } }}>
        <div className="block transform transition-transform duration-300 hover:scale-102 hover:shadow-md cursor-pointer rounded-lg overflow-hidden">
          <Image
            src="/image1/women.jpg"
            alt="Women's Fashion 1"
            width={300}
            height={300}
            className="mx-auto rounded-lg"
            priority
          />
        </div>
      </Link>
      <Link href={{ pathname: "/contact", query: { image: "/image1/women1.jpg" } }}>
        <div className="block transform transition-transform duration-300 hover:scale-102 hover:shadow-md cursor-pointer rounded-lg overflow-hidden">
          <Image
            src="/image1/women1.jpg"
            alt="Women's Fashion 2"
            width={300}
            height={300}
            className="mx-auto rounded-lg"
            priority
          />
        </div>
      </Link>
      <Link href={{ pathname: "/contact", query: { image: "/image1/womens.jpg" } }}>
        <div className="block transform transition-transform duration-300 hover:scale-102 hover:shadow-md cursor-pointer rounded-lg overflow-hidden">
          <Image
            src="/image1/womens.jpg"
            alt="Women's Fashion 3"
            width={300}
            height={300}
            className="mx-auto rounded-lg"
            priority
          />
        </div>
      </Link>

      {/* Dynamic Images from localStorage */}
      {uploadedImages.map((img) => (
        <Link key={img.id} href={{ pathname: "/contact", query: { image: img.url } }}>
          <div className="block transform transition-transform duration-300 hover:scale-102 hover:shadow-md cursor-pointer rounded-lg overflow-hidden">
            <Image
              src={img.url}
              alt={img.category}
              width={300}
              height={300}
              className="mx-auto rounded-lg object-cover"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
