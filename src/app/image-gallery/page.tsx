"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface ImageData {
  id: string;
  category: string;
  url: string;
}

const categories = ["All", "Jeans", "Shirts", "Shoes", "Suits", "Tshirts", "Women"];

export default function ImageGalleryPage() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    const imagesJson = localStorage.getItem("uploadedImages");
    if (imagesJson) {
      setImages(JSON.parse(imagesJson));
    }
  }, []);

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Image Gallery</h1>

      <div className="mb-6">
        <label htmlFor="categoryFilter" className="mr-4 font-medium">
          Filter by Category:
        </label>
        <select
          id="categoryFilter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {filteredImages.length === 0 ? (
        <p>No images found for the selected category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredImages.map((img) => (
            <div key={img.id} className="border rounded-md overflow-hidden shadow-md">
              <div className="relative w-full h-48">
                {img.url.startsWith("data:") ? (
                  <Image 
                    src={img.url} 
                    alt={img.category} 
                    fill
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <Image 
                    src={img.url} 
                    alt={img.category} 
                    fill
                    style={{ objectFit: "cover" }}
                  />
                )}
              </div>
              <div className="p-2 text-center font-semibold">{img.category}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}