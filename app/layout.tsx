// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ===================================================================
//  OPTIMISATION SEO
// ===================================================================
export const metadata: Metadata = {
  // Le titre qui apparaît dans Google et l'onglet du navigateur
  title: "Allogic.dev | Backend & DevOps pour Prototypes IA (Vercel, GitHub)",

  // La description qui apparaît sous le titre dans Google
  description: "Service expert pour transformer vos designs IA en applications robustes et scalables. Gestion de backend, base de données et déploiement.",
  
  // Mots-clés pour aider Google à comprendre votre activité
  keywords: ["backend", "devops", "vercel", "github", "ia", "prototype", "next.js", "database", "api", "freelance"],
};
// ===================================================================


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}