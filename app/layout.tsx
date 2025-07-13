// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton"; // <-- 1. Import du bouton

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AILogic.dev | Votre Backend sur-mesure", // Titre amélioré
  description: "Service de développement backend pour transformer vos designs IA en applications réelles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr"> {/* Changé en 'fr' pour le français */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsAppButton /> {/* <-- 2. Ajout du bouton ici */}
      </body>
    </html>
  );
}