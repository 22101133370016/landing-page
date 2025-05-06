'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-black text-white py-4 px-6 flex flex-wrap items-center justify-between shadow">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="Pambakali Logo" width={40} height={40} />
        <span className="text-xl font-bold">Pambakali Outfit</span>
      </Link>

      <div className="flex gap-4 text-sm sm:text-lg font-medium flex-wrap">
        <Link href="/">Home</Link>
        <Link href="/tshirts">T-Shirts</Link>
        <Link href="/shoes">Shoes</Link>
        <Link href="/suits">Suits</Link>
        <Link href="/jeans">Jeans</Link>
        <Link href="/shirts">Shirts</Link>
        <Link href="/women">Women&apos;s Fashion</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/upload-image">Upload Image</Link>
        <Link href="/image-gallery">Image Gallery</Link>
      </div>
    </nav>
  );
}
