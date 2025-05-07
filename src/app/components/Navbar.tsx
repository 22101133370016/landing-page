'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const marqueeStyle = {
  display: 'inline-block',
  whiteSpace: 'nowrap',
  animation: 'marquee 10s linear infinite',
  color: '#FFD700', // golden color
  fontWeight: 'bold',
  fontSize: '1.25rem', // text-xl
};

const keyframes = `
@keyframes marquee {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <style>{keyframes}</style>
      <nav className="bg-black text-white py-4 px-6 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between flex-wrap">
          <Link href="/" className="flex items-center gap-2 overflow-hidden">
            <Image src="/logo.png" alt="Pambakali Logo" width={40} height={40} />
            <span style={marqueeStyle}>Pambakali Outfit Store</span>
          </Link>

          {/* Hamburger menu button for mobile */}
          <button
            className="block sm:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.364 5.636a1 1 0 00-1.414-1.414L12 9.172 7.05 4.222a1 1 0 10-1.414 1.414L10.828 12l-5.192 5.192a1 1 0 101.414 1.414L12 14.828l4.95 4.95a1 1 0 001.414-1.414L13.172 12l5.192-5.192z"
                />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Menu links */}
          <div
            className={`w-full sm:flex sm:items-center sm:w-auto ${
              isOpen ? 'block' : 'hidden'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:gap-8 text-sm sm:text-lg font-semibold mt-4 sm:mt-0">
              <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-yellow-400 transition-colors duration-300">Home</Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-yellow-400 transition-colors duration-300">About Us</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-yellow-400 transition-colors duration-300">Contact</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
