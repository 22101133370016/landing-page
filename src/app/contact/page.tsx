"use client";

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const ContactClient = dynamic(() => import('./ContactClient'), { ssr: false });

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactClient />
    </Suspense>
  );
}
