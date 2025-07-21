// Fichier: app/faq/page.tsx

import Header from '@/components/Header';

export default function FAQPage() {
  const faqs = [
    {
      question: "Quels types de projets Laravel prenez-vous en charge ?",
      answer: "Je prends en charge une large gamme de projets Laravel, de la création d'APIs robustes à l'optimisation de performances, en passant par la refactorisation de code existant et l'intégration de nouvelles fonctionnalités. Que ce soit pour un SaaS, une application web complexe ou un outil interne, je peux vous accompagner.",
    },
    {
      question: "Comment se déroule une session de coaching ?",
      answer: "Une session de coaching dure 1 heure et se déroule en visio. Vous partagez votre écran et nous travaillons ensemble sur votre problème spécifique (bug, architecture, optimisation, etc.). L'objectif est de vous débloquer rapidement et de vous transmettre des connaissances pratiques.",
    },
    {
      question: "Intégrez-vous toutes les APIs d'IA (ChatGPT, Mistral, Gemini...) ?",
      answer: "Oui, je suis spécialisé dans l'intégration de diverses APIs d'IA, y compris celles de ChatGPT (OpenAI), Mistral AI, Google Gemini, et d'autres modèles pertinents. Le choix de l'API dépendra de vos besoins spécifiques, de votre budget et des fonctionnalités souhaitées.",
    },
    {
      question: "Quel est votre processus de travail pour un nouveau projet ?",
      answer: "Mon processus commence par une discussion approfondie de vos besoins pour bien comprendre votre vision. Ensuite, je propose un plan d'action détaillé et un devis. Une fois validé, nous travaillons en étroite collaboration, avec des points réguliers, jusqu'à la livraison du projet. La transparence et la communication sont clés.",
    },
    {
      question: "Proposez-vous un support après la livraison d'un projet ?",
      answer: "Oui, je propose un support post-livraison pour m'assurer que tout fonctionne parfaitement et pour répondre à vos éventuelles questions. Les modalités de support sont définies au début du projet pour une clarté totale.",
    },
    {
      question: "Comment puis-je obtenir un devis pour mon projet ?",
      answer: "Pour obtenir un devis, le plus simple est de me contacter via le formulaire sur la page de contact, ou directement par email/téléphone. Décrivez-moi votre projet et vos besoins, et je reviendrai vers vous rapidement avec une proposition adaptée.",
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header />
      <main className="max-w-4xl mx-auto py-16 sm:py-24 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Foire Aux Questions (FAQ)
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Retrouvez ici les réponses aux questions les plus fréquentes concernant mes services et mon approche.
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h2 className="text-xl font-bold text-gray-100 mb-3">{faq.question}</h2>
              <p className="text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
