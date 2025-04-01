import React from 'react';
import Link from 'next/link';

export default function FollowingPage() {
  // Données fictives pour les créateurs suivis
  const followedCreators = [
    {
      id: 1,
      name: "Marie Dubois",
      handle: "@mariecreatrice",
      category: "Art Digital",
      followers: "235K",
      image: "https://randomuser.me/api/portraits/women/23.jpg",
      latestContent: [
        {
          id: 101,
          title: "Créer des illustrations uniques avec Procreate",
          type: "tutoriel",
          thumbnail: "https://images.unsplash.com/photo-1618331835717-801e976710b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300",
          publishedAt: "il y a 2 jours"
        },
        {
          id: 102,
          title: "Ma routine créative quotidienne",
          type: "vlog",
          thumbnail: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300",
          publishedAt: "il y a 1 semaine"
        }
      ]
    },
    {
      id: 2,
      name: "Thomas Martin",
      handle: "@techthomas",
      category: "Technologie",
      followers: "427K",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      latestContent: [
        {
          id: 201,
          title: "Test des nouveaux écouteurs Sony WH-1000XM5",
          type: "avis",
          thumbnail: "https://images.unsplash.com/photo-1606851306203-291e5e972c42?ixlib=rb-4.0.3&auto=format&fit=crop&w=300",
          publishedAt: "il y a 1 jour"
        },
        {
          id: 202,
          title: "Comment choisir son premier appareil photo",
          type: "guide",
          thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=300",
          publishedAt: "il y a 3 jours"
        }
      ]
    },
    {
      id: 3,
      name: "Sophie Legrand",
      handle: "@sophiecuisine",
      category: "Cuisine",
      followers: "178K",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      latestContent: [
        {
          id: 301,
          title: "Recettes simples pour débutants",
          type: "tutoriel",
          thumbnail: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=300",
          publishedAt: "Aujourd'hui"
        },
        {
          id: 302,
          title: "Tour de mon nouveau matériel de cuisine",
          type: "vlog",
          thumbnail: "https://images.unsplash.com/photo-1631856923607-856b96d72a78?ixlib=rb-4.0.3&auto=format&fit=crop&w=300",
          publishedAt: "il y a 5 jours"
        }
      ]
    },
    {
      id: 4,
      name: "Pierre Moreau",
      handle: "@fitnessfr",
      category: "Fitness",
      followers: "312K",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      latestContent: [
        {
          id: 401,
          title: "Programme d'entraînement en 30 jours",
          type: "guide",
          thumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=300",
          publishedAt: "il y a 4 jours"
        },
        {
          id: 402,
          title: "Comment rester motivé toute l'année",
          type: "conseil",
          thumbnail: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300",
          publishedAt: "il y a 2 semaines"
        }
      ]
    }
  ];

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-2">Mes Abonnements</h1>
      <p className="text-gray-600 mb-8">Suivez les mises à jour de vos créateurs préférés</p>
      
      {/* Filtres et tri */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex gap-4">
          <select className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary">
            <option value="all">Toutes les catégories</option>
            <option value="art">Art & Design</option>
            <option value="tech">Technologie</option>
            <option value="cooking">Cuisine</option>
            <option value="fitness">Fitness</option>
          </select>
          
          <select className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary">
            <option value="recent">Activité récente</option>
            <option value="name">Nom</option>
            <option value="followers">Abonnés</option>
          </select>
        </div>
        
        <div className="relative">
          <input 
            type="text" 
            placeholder="Rechercher dans mes abonnements..." 
            className="pl-10 pr-4 py-2 border rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      
      {/* Liste des créateurs suivis */}
      <div className="space-y-6">
        {followedCreators.map((creator) => (
          <div key={creator.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-start gap-4">
                {/* Avatar et détails du créateur */}
                <img 
                  src={creator.image} 
                  alt={creator.name} 
                  className="w-16 h-16 rounded-full object-cover"
                />
                
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-bold text-lg">{creator.name}</h3>
                      <p className="text-gray-500">{creator.handle} • {creator.category}</p>
                      <p className="text-sm text-gray-600">{creator.followers} abonnés</p>
                    </div>
                    
                    <button className="bg-gray-200 hover:bg-gray-300 transition-colors text-gray-800 px-4 py-1 rounded-md">
                      Abonné
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Contenu récent */}
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Contenu récent</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {creator.latestContent.map((content) => (
                    <Link href={`/community/content/${content.id}`} key={content.id}
                          className="group flex bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                      <img 
                        src={content.thumbnail} 
                        alt={content.title} 
                        className="w-24 h-20 object-cover"
                      />
                      
                      <div className="p-3 flex-grow">
                        <span className="inline-block px-2 py-1 text-xs bg-gray-200 rounded-full mb-1">
                          {content.type}
                        </span>
                        <h5 className="font-medium text-sm group-hover:text-secondary transition-colors line-clamp-2">
                          {content.title}
                        </h5>
                        <p className="text-xs text-gray-500 mt-1">{content.publishedAt}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="mt-4 text-right">
                <Link href={`/community/creator/${creator.id}`} className="text-secondary hover:underline">
                  Voir tout le contenu
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Suggestions */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Suggestions d'abonnements</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { id: 5, name: "Jean Leclerc", category: "Photographie", followers: "138K", image: "https://randomuser.me/api/portraits/men/85.jpg" },
            { id: 6, name: "Camille Blanc", category: "Mode", followers: "245K", image: "https://randomuser.me/api/portraits/women/63.jpg" },
            { id: 7, name: "Luc Girard", category: "Musique", followers: "92K", image: "https://randomuser.me/api/portraits/men/42.jpg" },
            { id: 8, name: "Émilie Rousseau", category: "Voyage", followers: "176K", image: "https://randomuser.me/api/portraits/women/39.jpg" },
          ].map((creator) => (
            <div key={creator.id} className="bg-white rounded-lg shadow-md p-4 text-center">
              <img 
                src={creator.image} 
                alt={creator.name} 
                className="w-20 h-20 rounded-full object-cover mx-auto mb-3"
              />
              
              <h3 className="font-bold">{creator.name}</h3>
              <p className="text-sm text-gray-500 mb-1">{creator.category}</p>
              <p className="text-xs text-gray-600 mb-3">{creator.followers} abonnés</p>
              
              <button className="w-full bg-secondary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
                S'abonner
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
