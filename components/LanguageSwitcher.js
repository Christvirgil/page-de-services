'use client'; // Ce composant est interactif

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const pathname = usePathname();

  // Cette fonction change la partie langue de l'URL
  const getLocalizedPath = (lang) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = lang; // On remplace le [lang]
    return segments.join('/');
  };

  const currentLang = pathname.split('/')[1];

  return (
    <div className="flex items-center gap-2">
      <Link href={getLocalizedPath('fr')} 
            className={`px-3 py-1 text-sm font-bold rounded-md transition-colors ${currentLang === 'fr' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:bg-gray-700'}`}>
        FR
      </Link>
      <Link href={getLocalizedPath('en')} 
            className={`px-3 py-1 text-sm font-bold rounded-md transition-colors ${currentLang === 'en' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:bg-gray-700'}`}>
        EN
      </Link>
    </div>
  );
}