// Fichier : app/layout.tsx (Version MODIFIÉE pour une bannière 1920x150px)

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import Image from "next/image"; // Importez le composant Image de Next.js

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Allogic.dev | Services & Formations Laravel et IA',
    template: '%s | Allogic.dev',
  },
  description: "Services experts, coaching et formations pour transformer vos idées en applications robustes et scalables avec Laravel et l'IA.",
  keywords: ["laravel", "ia", "coaching", "formation", "développeur", "freelance", "api", "chatgpt"],

  verification: {
    google: "khOawTIVbSaj0tZbSQW5Q-QcBTHB2nQBq8cIvoTXrWE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* DÉBUT : SECTION Bannière Publicitaire */}
        {/* Assurez-vous d'avoir 'public/images/ads/banner-top.jpg' (votre image 1920x150px) */}
        <div className="w-full bg-gray-100 py-2 text-center overflow-hidden">
          {/* MODIFIÉ : Hauteur du conteneur ajustée à h-[150px] pour correspondre à l'image */}
          <div className="relative h-[150px]"> 
            <a href="#" className="block w-full h-full relative">
              <Image
                src="/images/ads/banner-top.jpg"
                alt="Bannière Publicitaire AllLogic.dev"
                fill
                className="object-cover" // MODIFIÉ : Utilise object-cover pour couvrir toute la largeur et hauteur
              />
            </a>
          </div>
        </div>
        {/* FIN : SECTION Bannière Publicitaire */}

        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}