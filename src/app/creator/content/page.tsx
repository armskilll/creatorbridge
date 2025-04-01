import React from 'react';
import Link from 'next/link';

export default function CreatorContent() {
  // Mock data pour les contenus
  const contents = [
    {
      id: 1,
      title: "Guide ultime pour débuter en tant que créateur de contenu",
      status: "published",
      date: "31/03/2025",
      category: "Tutoriel",
      views: 1245,
      likes: 187,
      comments: 32,
    },
    {
      id: 2,
      title: "Comment gagner en visibilité sur les réseaux sociaux en 2025",
      status: "published",
      date: "28/03/2025",
      category: "Marketing",
      views: 876,
      likes: 134,
      comments: 21,
    },
    {
      id: 3,
      title: "Les meilleurs outils pour la création de contenu vidéo",
      status: "draft",
      date: "Non publié",
      category: "Outils",
      views: 0,
      likes: 0,
      comments: 0,
    },
    {
      id: 4,
      title: "Monétisation : 10 stratégies efficaces pour les créateurs",
      status: "scheduled",
      date: "05/04/2025",
      category: "Monétisation",
      views: 0,
      likes: 0,
      comments: 0,
    },
    {
      id: 5,
      title: "Comment créer une communauté engagée autour de votre contenu",
      status: "published",
      date: "20/03/2025",
      category: "Communauté",
      views: 1532,
      likes: 245,
      comments: 53,
    },
  ];

  const statusLabels = {
    published: { text: "Publié", class: "bg-green-100 text-green-800" },
    draft: { text: "Brouillon", class: "bg-gray-100 text-gray-800" },
    scheduled: { text: "Programmé", class: "bg-blue-100 text-blue-800" },
  };

  return (
    <div className="container-custom py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Gestion du Contenu</h1>
        <Link 
          href="/creator/content/new" 
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          Nouveau Contenu
        </Link>
      </div>
      
      {/* Filtres et recherche */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-wrap gap-4">
        <div className="flex items-center space-x-2">
          <label htmlFor="status-filter" className="text-gray-700">Statut:</label>
          <select 
            id="status-filter"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="all">Tous</option>
            <option value="published">Publiés</option>
            <option value="draft">Brouillons</option>
            <option value="scheduled">Programmés</option>
          </select>
        </div>
        
        <div className="flex items-center space-x-2">
          <label htmlFor="category-filter" className="text-gray-700">Catégorie:</label>
          <select 
            id="category-filter"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="all">Toutes</option>
            <option value="tutorial">Tutoriel</option>
            <option value="marketing">Marketing</option>
            <option value="tools">Outils</option>
            <option value="monetization">Monétisation</option>
            <option value="community">Communauté</option>
          </select>
        </div>
        
        <div className="flex items-center space-x-2 ml-auto">
          <label htmlFor="sort-by" className="text-gray-700">Trier par:</label>
          <select 
            id="sort-by"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="newest">Plus récents</option>
            <option value="oldest">Plus anciens</option>
            <option value="views">Vues</option>
            <option value="engagement">Engagement</option>
          </select>
        </div>
        
        <div className="relative w-full mt-3">
          <input 
            type="text"
            placeholder="Rechercher dans vos contenus..."
            className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      
      {/* Tableau de contenu */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Titre
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Statut
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Catégorie
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Performance
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {contents.map((content) => (
              <tr key={content.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{content.title}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded-full ${statusLabels[content.status as keyof typeof statusLabels].class}`}>
                    {statusLabels[content.status as keyof typeof statusLabels].text}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {content.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {content.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {content.status === "published" ? (
                    <div className="text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>{content.views}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span>{content.likes}</span>
                      </div>
                    </div>
                  ) : (
                    <span className="text-sm text-gray-500">-</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-3">
                    <Link href={`/creator/content/${content.id}`} className="text-primary hover:text-primary/80">
                      Modifier
                    </Link>
                    <button className="text-red-600 hover:text-red-800">
                      Supprimer
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-700">
          Affichage de <span className="font-medium">1</span> à <span className="font-medium">5</span> sur <span className="font-medium">12</span> résultats
        </div>
        
        <nav className="flex space-x-1">
          <button className="px-3 py-1 rounded border hover:bg-gray-50">Précédent</button>
          <button className="px-3 py-1 rounded bg-primary text-white">1</button>
          <button className="px-3 py-1 rounded border hover:bg-gray-50">2</button>
          <button className="px-3 py-1 rounded border hover:bg-gray-50">3</button>
          <button className="px-3 py-1 rounded border hover:bg-gray-50">Suivant</button>
        </nav>
      </div>
    </div>
  );
}
