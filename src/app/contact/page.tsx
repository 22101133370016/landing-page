'use client';
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  interface FormData {
    name: string;
    email: string;
    phone: string;
    location: string;
    message?: string;
  }

  const searchParams = useSearchParams();
  const selectedImage = searchParams.get("image") || "";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      const serviceId = "service_8vm9pau"; // Replace with your EmailJS service ID
      const templateId = "template_lsnej47"; // Replace with your EmailJS template ID
      const publicKey = "S_vGyYgW99Qdj32Gi"; // Replace with your EmailJS public key

      const templateParams = {
        ...data,
        imageUrl: selectedImage,
      };

      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);

      console.log("EmailJS send result:", result);

      if (result.status !== 200) {
        throw new Error("Failed to send email");
      }

      setSubmitSuccess(true);
      reset();
    } catch (error: any) {
      console.error("EmailJS send error:", error);
      alert("EmailJS send error: " + (error.message || JSON.stringify(error)));
      setSubmitError(error.message || "Failed to send your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-100 py-20 text-center min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-12">
        Fill in the form below and we’ll get back to you shortly.
      </p>
      {/* Removed Upload Image button as per request */}

      {selectedImage && (
        <div className="max-w-xs mx-auto mb-8">
          {selectedImage.startsWith("data:") ? (
            <img src={selectedImage} alt="Selected Product" className="rounded-lg shadow-md w-full h-auto" />
          ) : (
            <Image src={selectedImage} alt="Selected Product" width={300} height={300} className="rounded-lg shadow-md" />
          )}
          <p className="mt-2 text-sm text-gray-700">You are sending a message about this product.</p>
        </div>
      )}

      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 text-left">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              {...register("phone", { required: true })}
              className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            {errors.phone && <span className="text-red-500 text-sm">Phone number is required</span>}
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              id="location"
              {...register("location", { required: true })}
              className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            {errors.location && <span className="text-red-500 text-sm">Location is required</span>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message (optional)</label>
            <textarea
              id="message"
              {...register("message")}
              rows={4}
              className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>

          {submitError && <p className="text-red-500 mb-4">{submitError}</p>}
          {submitSuccess && <p className="text-green-500 mb-4">Message sent successfully!</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
