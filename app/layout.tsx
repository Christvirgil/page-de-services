// Fichier : app/layout.tsx (Version FINALE)

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

// MODIFICATION ICI POUR LE TITRE DYNAMIQUE
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
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}