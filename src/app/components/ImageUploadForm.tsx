"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

interface ImageData {
  id: string;
  category: string;
  url: string;
}

const categories = ["Jeans", "Tshirt", "Suit", "Shoes", "Women Fashion"];

export default function ImageUploadForm() {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadError, setUploadError] = useState("");
  const router = useRouter();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setUploadError("");

    if (!selectedFile) {
      setUploadError("Please select an image file to upload.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const imageUrl = reader.result as string;

      const existingImagesJson = localStorage.getItem("uploadedImages");
      const existingImages: ImageData[] = existingImagesJson ? JSON.parse(existingImagesJson) : [];

      const newImage: ImageData = {
        id: Date.now().toString(),
        category: selectedCategory,
        url: imageUrl,
      };

      localStorage.setItem("uploadedImages", JSON.stringify([...existingImages, newImage]));

      // Navigate to image gallery page after upload
      router.push("/image-gallery");
    };

    reader.onerror = () => {
      setUploadError("Failed to read the image file.");
    };

    reader.readAsDataURL(selectedFile);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Upload Image by Category</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="category" className="block mb-1 font-medium">
            Select Category
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-full border border-gray-300 rounded-md p-2"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="imageFile" className="block mb-1 font-medium">
            Select Image
          </label>
          <input
            type="file"
            id="imageFile"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full"
          />
        </div>

        {uploadError && <p className="text-red-500">{uploadError}</p>}

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-md"
        >
          Upload Image
        </button>
      </form>
    </div>
  );
}
