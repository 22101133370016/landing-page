"use client";
import ImageUploadForm from "../components/ImageUploadForm";

export default function UploadImagePage() {
  return (
    <section className="min-h-screen py-20 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8">Upload Image</h1>
      <ImageUploadForm />
    </section>
  );
}
