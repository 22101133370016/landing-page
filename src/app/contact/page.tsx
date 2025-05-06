'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

export default function ContactClient() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const searchParams = useSearchParams();

  useEffect(() => {
    const image = searchParams.get("image");
    setSelectedImage(image);
  }, [searchParams]);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      const serviceId = "service_8vm9pau";
      const templateId = "template_lsnej47";
      const publicKey = "S_vGyYgW99Qdj32Gi";

      const templateParams = {
        ...data,
        imageUrl: selectedImage,
      };

      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);

      if (result.status !== 200) {
        throw new Error("Failed to send email");
      }

      setSubmitSuccess(true);
      reset();
    } catch (error: any) {
      console.error("EmailJS send error:", error);
      setSubmitError(error.message || "Failed to send your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-100 py-20 text-center min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-12">
        Fill in the form below and we&apos;ll get back to you shortly.
      </p>

      {selectedImage && (
        <div className="max-w-xs mx-auto mb-8">
          {selectedImage.startsWith("data:") ? (
            <div className="relative w-full" style={{ height: '300px' }}>
              <Image 
                src={selectedImage} 
                alt="Selected Product"
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-lg shadow-md"
              />
            </div>
          ) : (
            <Image 
              src={selectedImage} 
              alt="Selected Product" 
              width={300} 
              height={300} 
              className="rounded-lg shadow-md" 
            />
          )}
          <p className="mt-2 text-sm text-gray-700">You are sending a message about this product.</p>
        </div>
      )}

      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 text-left">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Form fields: name, email, phone, location, message */}
          {/* Error and success messages */}
          {/* Submit button */}
        </form>
      </div>
    </section>
  );
}
