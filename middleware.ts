// Fichier : middleware.ts (Version MODIFIÉE pour exclure les fichiers statiques)

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['fr', 'en'];
const defaultLocale = 'fr'; // Langue par défaut de ton site

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Vérifie si l'URL contient déjà une langue ('/fr/...' ou '/en/...')
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    // Si oui, on ne fait rien, on laisse la requête passer
    return;
  }

  // Si non, on redirige l'utilisateur vers la version avec la langue par défaut
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  // Par exemple, si quelqu'un va sur '/contact', il sera redirigé vers '/fr/contact'
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // CE MATCHERE EST MIS À JOUR POUR EXCLURE CORRECTEMENT LES FICHIERS STATIQUES :
    // - '/api' : Routes d'API
    // - '/_next/static' : Fichiers statiques générés par Next.js (JS, CSS, etc.)
    // - '/_next/image' : Routes d'optimisation d'images de Next.js
    // - '.*\\..*' : TOUS les fichiers qui contiennent un point dans leur nom (ex: image.png, style.css, script.js, favicon.ico)
    // - '/' : exclut la racine pour éviter des boucles de redirection si la langue par défaut est déjà gérée
    // La regex `.` est un caractère spécial. Pour matcher un point littéral, on doit l'échapper avec `\\` en JS.
    '/((?!api|_next/static|_next/image|.*\\..*).*)',
  ],
};