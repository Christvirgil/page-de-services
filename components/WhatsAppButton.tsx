// components/WhatsAppButton.tsx
import Link from 'next/link';

// Remplacez ce numéro par le vôtre, au format international, SANS le '+' ou les '00'.
// Exemple pour la France : 33612345678
// Exemple pour la Côte d'Ivoire : 2250712345678
const WHATSAPP_NUMBER = "24160061497";

const WhatsAppButton = () => {
  return (
    <Link
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank" // Ouvre WhatsApp dans un nouvel onglet
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300"
      aria-label="Contacter sur WhatsApp"
    >
      {/* Icône WhatsApp SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-8 w-8"
        fill="currentColor"
      >
        <path d="M16.75 13.96c.25.13.43.2.5.28.08.08.13.18.15.25.03.08.03.18 0 .28-.03.1-.08.18-.13.2-.05.03-.13.05-.2.08s-.15.05-.23.05c-.08 0-.15 0-.23-.03-.08-.03-.15-.03-.2-.05-.08-.03-.15-.05-.2-.08-.05-.03-.1-.05-.15-.08-.1-.05-.2-.1-.3-.15s-.2-.1-.3-.18c-1.1-1.1-1.83-2.38-2.15-3.85-.03-.15-.05-.3-.05-.45s0-.3.03-.45c0-.05 0-.1.03-.15.03-.05.03-.1.05-.15.13-.25.28-.48.45-.68.18-.2.38-.35.6-.48.23-.13.48-.2.75-.2.15 0 .3.03.43.05.13.03.25.08.38.15.13.08.23.18.3.3.08.13.13.28.15.45.03.18.03.35 0 .53-.03.18-.08.35-.15.5-.08.15-.18.28-.3.4-.13.13-.23.23-.3.3-.08.08-.15.15-.2.23-.05.08-.08.15-.08.23s0 .15.03.23c.03.08.05.15.08.2.03.05.08.1.13.15.18.15.35.3.55.45.2.15.4.28.6.4zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
      </svg>
    </Link>
  );
};

export default WhatsAppButton;