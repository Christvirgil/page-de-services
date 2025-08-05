// Fichier : components/Header.tsx (Version MODIFIÉE, multilingue avec LinkedIn)

"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher.js';

// MÉTHODE CHOISIE : Utilisation de 'react-icons' puisque vous l'avez installé
import { FaLinkedinIn } from 'react-icons/fa6'; // Importe l'icône LinkedIn (version épurée)

// Ancienne Méthode B (SVG direct) - COMMENTÉE
// const LinkedInIconSvg = () => (
//   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//     <path d="M20.447 20.452h-3.554v-5.629c0-1.32-.472-2.222-1.655-2.222-1.334 0-2.126.897-2.126 2.222v5.629h-3.554V9.227h3.554v1.54c.472-.733 1.348-1.78 3.203-1.78 3.996 0 4.676 2.61 4.676 7.472v3.991zM7.119 7.994c-1.22 0-2.023-.815-2.023-1.897 0-1.076.804-1.897 2.023-1.897C8.344 4.2 9.146 5.021 9.146 6.1s-.804 1.894-2.027 1.894zM5.362 9.227H8.89v11.225H5.362V9.227z" />
//   </svg>
// );


import { fr } from '../dictionaries/fr.js';
import { en } from '../dictionaries/en.js';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const currentLang = pathname.split('/')[1] as 'fr' | 'en' || 'fr';
  const t = currentLang === 'en' ? en : fr;

  const getLink = (path: string) => {
    if (pathname === '/fr' || pathname === '/en') {
      return path;
    }
    return `/${currentLang}${path}`;
  };

  const navLinks = [
    { name: t.services_tagline, href: getLink("#services") },
    { name: t.process_title, href: getLink("#processus") },
    { name: "Blog", href: `/${currentLang}/blog` },
    { name: "À Propos", href: `/${currentLang}/a-propos` },
    { name: "FAQ", href: `/${currentLang}/faq` },
  ];

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-700/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href={`/${currentLang}`} className="text-white font-bold text-xl tracking-wider">
              AILogic.dev
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}

              {/* NOUVEAU : Ajout de l'icône LinkedIn pour les écrans larges */}
              <a
                href="https://www.linkedin.com/in/christ-virgil-ngoye-3a38771a0/" // URL RÉELLE DU PROFIL LinkedIn
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 p-2"
                aria-label="Profil LinkedIn de Christ Virgil Ngoye"
              >
                <FaLinkedinIn size={24} /> {/* Utilisation de l'icône de react-icons */}
              </a>

              <div className="border-l border-gray-600 h-6 mx-2"></div>
              <LanguageSwitcher />

              <Link
                href={`/${currentLang}/contact`}
                className="bg-cyan-500 text-white hover:bg-cyan-600 px-3 py-2 rounded-md text-sm font-bold transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            {/* NOUVEAU : Ajout de l'icône LinkedIn pour les mobiles */}
            <a
              href="https://www.linkedin.com/in/christ-virgil-ngoye-3a38771a0/" // URL RÉELLE DU PROFIL LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 p-2"
              aria-label="Profil LinkedIn de Christ Virgil Ngoye"
            >
              <FaLinkedinIn size={24} /> {/* Utilisation de l'icône de react-icons */}
            </a>

            <LanguageSwitcher />

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
             <Link
                href={`/${currentLang}/contact`}
                onClick={() => setIsMenuOpen(false)}
                className="bg-cyan-500 text-white hover:bg-cyan-600 block px-3 py-2 rounded-md text-base font-bold mt-2"
              >
                Contact
              </Link>
          </div>
        </div>
      )}
    </header>
  );
}