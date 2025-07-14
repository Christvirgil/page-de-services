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
//  CONFIGURATION FINALE AVEC SEO ET VALIDATION GOOGLE
// ===================================================================
export const metadata: Metadata = {
  title: "Allogic.dev | Backend & DevOps pour Prototypes IA (Vercel, GitHub)",
  description: "Service expert pour transformer vos designs IA en applications robustes et scalables. Gestion de backend, base de données et déploiement.",
  keywords: ["backend", "devops", "vercel", "github", "ia", "prototype", "next.js", "database", "api", "freelance"],
  
  // C'EST ICI QUE VOTRE CLÉ A ÉTÉ AJOUTÉE
  verification: {
    google: "khOawTIVbSaj0tZbSQW5Q-QcBTHB2nQBq8cIvoTXrWE",
  },
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