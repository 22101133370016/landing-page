'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

type FormData = {
  name: string;
  email: string;
  phone: string;
  location: string;
  message: string;
};

export default function ContactClient() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const searchParams = useSearchParams();

  useEffect(() => {
    const image = searchParams.get('image');
    setSelectedImage(image);
  }, [searchParams]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      const serviceId = 'service_8vm9pau';
      const templateId = 'template_lsnej47';
      const publicKey = 'S_vGyYgW99Qdj32Gi';

      const templateParams = {
        ...data,
        imageUrl: selectedImage,
      };

      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);

      if (result.status !== 200 && result.text !== 'OK') {
        throw new Error('Failed to send email');
      }

      setSubmitSuccess(true);
      reset();
    } catch (error: unknown) {
      console.error('EmailJS send error:', error);
      if (error instanceof Error) {
        setSubmitError(error.message);
      } else {
        setSubmitError('An unknown error occurred.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-100 py-20 text-center min-h-screen">
      <h1 className="text-5xl font-extrabold mb-8 text-gray-900">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-12 max-w-xl mx-auto">
        Fill in the form below and we&apos;ll get back to you shortly.
      </p>

      {selectedImage && (
        <div className="max-w-xs mx-auto mb-8">
          {selectedImage.startsWith('data:') ? (
            <div className="relative w-full" style={{ height: '300px' }}>
              <Image
                src={selectedImage}
                alt="Selected Product"
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-lg shadow-lg"
              />
            </div>
          ) : (
            <Image
              src={selectedImage}
              alt="Selected Product"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          )}
          <p className="mt-2 text-sm text-gray-700">
            You are sending a message about this product.
          </p>
        </div>
      )}

      <div className="w-[60%] mx-auto bg-white rounded-3xl shadow-lg p-10 text-left">
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block font-semibold text-gray-800 mb-2">Name</label>
            <input
              {...register('name', { required: 'Name is required' })}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            {errors.name && <p className="text-red-600 mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block font-semibold text-gray-800 mb-2">Email</label>
            <input
              {...register('email', { required: 'Email is required' })}
              type="email"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            {errors.email && <p className="text-red-600 mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block font-semibold text-gray-800 mb-2">Phone</label>
            <input
              {...register('phone')}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-800 mb-2">Location</label>
            <input
              {...register('location')}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-800 mb-2">Message</label>
            <textarea
              {...register('message', { required: 'Message is required' })}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              rows={5}
            />
            {errors.message && <p className="text-red-600 mt-1">{errors.message.message}</p>}
          </div>

          {submitError && <p className="text-red-700 font-semibold">{submitError}</p>}
          {submitSuccess && <p className="text-green-700 font-semibold">Message sent successfully!</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full text-lg hover:bg-yellow-600 transition-shadow shadow-md hover:shadow-lg disabled:opacity-60"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}
