import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Espace Créateur - CreatorBridge',
  description: 'Gérez votre contenu, interagissez avec votre audience et développez votre plateforme',
};

export default function CreatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-white shadow-md">
        <div className="container-custom py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            CreatorBridge
          </Link>
          <nav className="flex space-x-6">
            <Link href="/creator" className="hover:underline">Tableau de bord</Link>
            <Link href="/creator/content" className="hover:underline">Contenu</Link>
            <Link href="/creator/analytics" className="hover:underline">Statistiques</Link>
            <Link href="/creator/engagement" className="hover:underline">Engagement</Link>
            <Link href="/" className="hover:underline">Retour à l'accueil</Link>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow bg-gray-50">
        {children}
      </main>
      
      <footer className="bg-gray-800 text-gray-300 py-6">
        <div className="container-custom">
          <p> {new Date().getFullYear()} CreatorBridge - Espace Créateur</p>
        </div>
      </footer>
    </div>
  );
}
