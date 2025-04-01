import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Espace Communauté - CreatorBridge',
  description: 'Découvrez des créateurs, interagissez avec le contenu et rejoignez des communautés',
};

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-secondary text-white shadow-md">
        <div className="container-custom py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            CreatorBridge
          </Link>
          <nav className="flex space-x-6">
            <Link href="/community" className="hover:underline">Découvrir</Link>
            <Link href="/community/following" className="hover:underline">Abonnements</Link>
            <Link href="/community/trending" className="hover:underline">Tendances</Link>
            <Link href="/community/categories" className="hover:underline">Catégories</Link>
            <Link href="/" className="hover:underline">Retour à l'accueil</Link>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow bg-gray-50">
        {children}
      </main>
      
      <footer className="bg-gray-800 text-gray-300 py-6">
        <div className="container-custom">
          <p> {new Date().getFullYear()} CreatorBridge - Espace Communauté</p>
        </div>
      </footer>
    </div>
  );
}
