// components/Header.tsx
"use client"; // Ce composant a besoin d'interactivité côté client (pour le menu mobile)

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Processus", href: "#processus" },
  ];

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-700/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo ou Nom */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-bold text-xl tracking-wider">
              AILogic.dev
            </Link>
          </div>

          {/* Liens pour grand écran */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-cyan-500 text-white hover:bg-cyan-600 px-3 py-2 rounded-md text-sm font-bold transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          
          {/* Bouton Hamburger pour mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Ouvrir le menu principal</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu déroulant pour mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800/95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
             <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-cyan-500 text-white hover:bg-cyan-600 block px-3 py-2 rounded-md text-base font-bold mt-2"
              >
                Contact
              </a>
          </div>
        </div>
      )}
    </header>
  );
}