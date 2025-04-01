import React from 'react';
import Link from 'next/link';

export default function PageTendance() {
  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-6">Tendances</h1>
      
      {/* Filtres */}
      <div className="flex flex-wrap gap-4 mb-8">
        <select className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary">
          <option value="all">Toutes les catégories</option>
          <option value="art">Art & Design</option>
          <option value="technology">Technologie</option>
          <option value="music">Musique</option>
          <option value="fitness">Fitness</option>
          <option value="cooking">Cuisine</option>
          <option value="gaming">Jeux vidéo</option>
        </select>
        
        <select className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary">
          <option value="week">Cette semaine</option>
          <option value="month">Ce mois</option>
          <option value="year">Cette année</option>
        </select>
        
        <div className="flex gap-2 ml-auto">
          <button className="px-4 py-2 rounded-md bg-secondary text-white">Les plus vus</button>
          <button className="px-4 py-2 rounded-md bg-gray-100">Les plus aimés</button>
          <button className="px-4 py-2 rounded-md bg-gray-100">Les plus commentés</button>
        </div>
      </div>
      
      {/* Contenu tendance */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {[
          {
            id: 1,
            title: "Comment j'ai atteint 100 000 abonnés en 6 mois",
            creator: "GrowthHacker",
            category: "Développement Personnel",
            views: 152350,
            likes: 24680,
            comments: 3452,
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400"
          },
          {
            id: 2,
            title: "Mon studio d'enregistrement à petit budget",
            creator: "MusicMaker",
            category: "Musique",
            views: 98765,
            likes: 18432,
            comments: 2134,
            image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=400"
          },
          {
            id: 3,
            title: "Revue des meilleurs appareils photo en 2025",
            creator: "PhotoPro",
            category: "Photographie",
            views: 87654,
            likes: 15789,
            comments: 1879,
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=400"
          },
          {
            id: 4,
            title: "5 recettes faciles pour débutants",
            creator: "ChefCuisine",
            category: "Cuisine",
            views: 76543,
            likes: 14321,
            comments: 1567,
            image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400"
          },
          {
            id: 5,
            title: "Les tendances UX/UI de 2025",
            creator: "DesignMaster",
            category: "Design",
            views: 65432,
            likes: 12345,
            comments: 1234,
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400"
          },
          {
            id: 6,
            title: "Mon setup streaming pour moins de 500€",
            creator: "GamerPro",
            category: "Gaming",
            views: 54321,
            likes: 9876,
            comments: 987,
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400"
          },
        ].map((content) => (
          <div key={content.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img 
              src={content.image} 
              alt={content.title} 
              className="w-full h-48 object-cover"
            />
            
            <div className="p-5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">{content.category}</span>
                <span className="bg-secondary/10 text-secondary text-xs px-2 py-1 rounded-full">
                  Tendance #{content.id}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{content.title}</h3>
              
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                <span className="text-sm font-medium">{content.creator}</span>
              </div>
              
              <div className="flex justify-between text-sm text-gray-500">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {content.views.toLocaleString()}
                </span>
                
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  {content.likes.toLocaleString()}
                </span>
                
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {content.comments.toLocaleString()}
                </span>
              </div>
              
              <Link href={`/community/content/${content.id}`} 
                    className="block mt-4 text-center bg-secondary text-white py-2 rounded-md hover:bg-secondary/90 transition-colors">
                Voir le contenu
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {/* Créateurs en tendance */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Créateurs en Tendance</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { id: 1, name: "Maître de la Tech", category: "Technologie", followers: "458K", image: "https://randomuser.me/api/portraits/men/36.jpg" },
            { id: 2, name: "Âme Créative", category: "Art & Design", followers: "327K", image: "https://randomuser.me/api/portraits/women/28.jpg" },
            { id: 3, name: "Parcours de Fitness", category: "Fitness & Santé", followers: "215K", image: "https://randomuser.me/api/portraits/men/52.jpg" },
          ].map((creator) => (
            <div key={creator.id} className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
              <img 
                src={creator.image} 
                alt={creator.name} 
                className="w-16 h-16 rounded-full object-cover"
              />
              
              <div>
                <h3 className="font-bold">{creator.name}</h3>
                <p className="text-sm text-gray-500">{creator.category}</p>
                <p className="text-sm text-gray-600">{creator.followers} abonnés</p>
              </div>
              
              <button className="ml-auto bg-secondary text-white px-3 py-1 rounded-md hover:bg-secondary/90 transition-colors">
                Suivre
              </button>
            </div>
          ))}
        </div>
      </section>
      
      {/* Pagination */}
      <div className="flex justify-center">
        <nav className="flex space-x-2">
          <button className="px-4 py-2 rounded-md border hover:bg-gray-50">Précédent</button>
          <button className="px-4 py-2 rounded-md bg-secondary text-white">1</button>
          <button className="px-4 py-2 rounded-md border hover:bg-gray-50">2</button>
          <button className="px-4 py-2 rounded-md border hover:bg-gray-50">3</button>
          <button className="px-4 py-2 rounded-md border hover:bg-gray-50">Suivant</button>
        </nav>
      </div>
    </div>
  );
}
