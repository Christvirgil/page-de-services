// Fichier : scripts/translate.js

import fs from 'fs/promises';
import path from 'path';
import fetch from 'node-fetch';

// --- CONFIGURATION ---
// Quand vous aurez votre clé, vous la mettrez ici.
const DEEPL_API_KEY = 'VOTRE_FUTURE_CLE_API_DEEPL';
const DEEPL_API_URL = 'https://api-free.deepl.com/v2/translate';

// On utilise path.resolve pour avoir des chemins absolus, c'est plus robuste.
const sourceDir = path.resolve('content/blog/fr'); 
const targetDir = path.resolve('content/blog/en');
// --------------------

async function translateFile(filename) {
  const sourcePath = path.join(sourceDir, filename);
  const targetPath = path.join(targetDir, filename);

  console.log(`\n--- Traitement du fichier : ${filename} ---`);
  
  try {
    const content = await fs.readFile(sourcePath, 'utf-8');
    console.log('Fichier source lu.');

    // ATTENTION : La partie ci-dessous ne fonctionnera qu'avec une clé API valide.
    // On la laissera en place pour plus tard.
    console.log('Envoi à l\'API DeepL pour traduction...');
    const response = await fetch(DEEPL_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `DeepL-Auth-Key ${DEEPL_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: [content],
        target_lang: 'EN-US'
      })
    });

    if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`Erreur API: ${response.status} ${response.statusText} - ${errorBody}`);
    }

    const data = await response.json();
    const translatedText = data.translations[0].text;

    await fs.writeFile(targetPath, translatedText);
    console.log(`✅ Traduction réussie et sauvegardée dans ${targetDir}`);

  } catch (error) {
    console.error(`❌ Erreur lors de la traduction de ${filename}:`, error.message);
  }
}

async function main() {
  console.log('Démarrage du script de traduction...');
  await fs.mkdir(targetDir, { recursive: true });
  const files = await fs.readdir(sourceDir);

  for (const file of files) {
    if (file.endsWith('.mdx')) {
      await translateFile(file);
    }
  }

  console.log('\n🎉 Script terminé. Tous les fichiers ont été traités.');
}

main();