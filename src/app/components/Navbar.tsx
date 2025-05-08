'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 10s linear infinite;
          color: wheat;
          font-weight: 600;
          font-size: 1.25rem;
          padding: 0 0.5rem;
          background-color: rgba(0, 0, 0, 0.5);
          border-radius: 0.25rem;
        }
        .nav-container {
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .menu-links {
          display: flex;
          flex-direction: row;
          gap: 2rem;
          font-size: 1rem;
          font-weight: 600;
        }
        .menu-links a {
          color: white;
          transition: color 0.3s ease;
        }
        .menu-links a:hover {
          color: #4ade80; /* teal-400 */
        }
        .hamburger-button {
          display: none;
        }
      `}</style>
      <nav className="py-4 px-6 sticky top-0 z-50" style={{background: 'linear-gradient(135deg, #f43f5e 0%, #fbbf24 50%, #f43f5e 100%)'}}>
        <div className="container mx-auto nav-container">
          <Link href="/" className="flex items-center gap-2 overflow-hidden">
            <Image src="/logo.png" alt="Pambakali Logo" width={40} height={40} />
            <span className="marquee">Pambakali Outfit Store</span>
          </Link>

          <button
            className="hamburger-button"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
          </button>

          <div className="menu-links">
            <Link href="/" className="hover:text-teal-400 transition-colors duration-300">Home</Link>
            <Link href="/about" className="hover:text-teal-400 transition-colors duration-300">About Us</Link>
            <Link href="/contact" className="hover:text-teal-400 transition-colors duration-300">Contact</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
