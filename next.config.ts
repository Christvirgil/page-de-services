// next.config.ts

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // AJOUTEZ CETTE SECTION POUR DÉSACTIVER LA RÈGLE
  eslint: {
    // Attention: Ceci va ignorer les erreurs ESLint pendant le build.
    // À n'utiliser que si vous êtes sûr de la qualité de votre code.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;