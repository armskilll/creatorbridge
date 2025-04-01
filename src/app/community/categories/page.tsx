import React from 'react';
import Link from 'next/link';

export default function CategoriesPage() {
  // Liste des catégories avec des données fictives
  const categories = [
    { 
      id: 'art-design', 
      name: 'Art & Design', 
      description: 'Explorez l\'art numérique, l\'illustration, le design graphique et plus encore.',
      creators: 8453,
      content: 26789,
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400'
    },
    { 
      id: 'technologie', 
      name: 'Technologie', 
      description: 'Découvrez les dernières avancées technologiques, revues de produits et tutoriels.',
      creators: 7689,
      content: 31542,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=400'
    },
    { 
      id: 'musique', 
      name: 'Musique', 
      description: 'Production musicale, critiques, instruments et tutoriels pour tous les amateurs de musique.',
      creators: 9354,
      content: 42157,
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400'
    },
    { 
      id: 'fitness', 
      name: 'Fitness & Santé', 
      description: 'Entraînements, nutrition, bien-être et conseils pour une vie saine.',
      creators: 6247,
      content: 28963,
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=400'
    },
    { 
      id: 'cuisine', 
      name: 'Cuisine', 
      description: 'Recettes, techniques culinaires, critiques de restaurants et conseils de chefs.',
      creators: 8126,
      content: 37842,
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400'
    },
    { 
      id: 'photographie', 
      name: 'Photographie', 
      description: 'Techniques photo, édition d\'images, critiques d\'équipement et inspiration.',
      creators: 9731,
      content: 40268,
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=400'
    },
    { 
      id: 'mode', 
      name: 'Mode', 
      description: 'Tendances mode, conseils de style, marques et inspiration vestimentaire.',
      creators: 7538,
      content: 32419,
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=400'
    },
    { 
      id: 'voyage', 
      name: 'Voyage', 
      description: 'Destinations, conseils de voyage, récits d\'aventures et guides culturels.',
      creators: 8329,
      content: 36748,
      image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&auto=format&fit=crop&w=400'
    },
    { 
      id: 'education', 
      name: 'Éducation', 
      description: 'Ressources éducatives, cours en ligne, méthodes d\'apprentissage et académiques.',
      creators: 6842,
      content: 29375,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400'
    },
    { 
      id: 'jeux-video', 
      name: 'Jeux Vidéo', 
      description: 'Critiques de jeux, guides, streaming, e-sport et actualités du gaming.',
      creators: 8957,
      content: 38426,
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=400'
    },
    { 
      id: 'business', 
      name: 'Business', 
      description: 'Entrepreneuriat, conseils professionnels, marketing et développement de carrière.',
      creators: 6248,
      content: 27539,
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400'
    },
    { 
      id: 'lifestyle', 
      name: 'Lifestyle', 
      description: 'Art de vivre, décoration, jardinage, animaux de compagnie et relations.',
      creators: 7853,
      content: 34128,
      image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400'
    },
  ];

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-6">Catégories</h1>
      
      {/* Barre de recherche */}
      <div className="mb-8 relative max-w-md mx-auto">
        <input 
          type="text" 
          placeholder="Rechercher une catégorie..." 
          className="pl-10 pr-4 py-2 border rounded-full w-full focus:outline-none focus:ring-2 focus:ring-secondary"
        />
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
      </div>
      
      {/* Grille de catégories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link href={`/community/categories/${category.id}`} key={category.id} 
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{category.name}</h3>
              </div>
            </div>
            
            <div className="p-5">
              <p className="text-gray-600 mb-4">{category.description}</p>
              
              <div className="flex justify-between text-sm text-gray-500">
                <span>{category.creators.toLocaleString()} créateurs</span>
                <span>{category.content.toLocaleString()} contenus</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
