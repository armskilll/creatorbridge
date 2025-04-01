import React from 'react';
import Link from 'next/link';

export default function CreatorDashboard() {
  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-6">Tableau de Bord Créateur</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Statistiques d'engagement Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Vue d'ensemble</h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600">Fans actifs</p>
              <p className="text-2xl font-bold">1 245</p>
            </div>
            <div>
              <p className="text-gray-600">Défis en cours</p>
              <p className="text-2xl font-bold">5</p>
            </div>
            <div>
              <p className="text-gray-600">CreaCoin en banque</p>
              <p className="text-2xl font-bold">12 540</p>
            </div>
          </div>
        </div>
        
        {/* Défis Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Défis actifs</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-secondary pl-4 pb-3">
              <h3 className="font-medium">"Style de neuf préféré?"</h3>
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>Votes: 254</span>
                <span>CreaCoin: 1 240</span>
              </div>
              <div className="mt-2">
                <span className="bg-secondary/20 text-secondary text-xs px-2 py-1 rounded-full">
                  PARI POPULAIRE
                </span>
              </div>
            </div>
            
            <div className="border-l-4 border-secondary pl-4 pb-3">
              <h3 className="font-medium">"Le sabre à la bagarre?"</h3>
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>Votes: 518</span>
                <span>CreaCoin: 3 150</span>
              </div>
              <div className="mt-2">
                <span className="bg-secondary/20 text-secondary text-xs px-2 py-1 rounded-full">
                  PARI POPULAIRE
                </span>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <Link href="/creator/defis" className="text-secondary hover:underline">
                Voir tous les défis →
              </Link>
            </div>
          </div>
        </div>
        
        {/* CreaCoin Stats Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Revenus CreaCoin</h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600">Ce Mois</p>
              <p className="text-2xl font-bold">4 287 <span className="text-sm text-gray-600">CreaCoin</span></p>
              <p className="text-green-500 text-sm">≈ 428,70 €</p>
            </div>
            <div>
              <p className="text-gray-600">Mois Dernier</p>
              <p className="text-2xl font-bold">3 156 <span className="text-sm text-gray-600">CreaCoin</span></p>
              <p className="text-green-500 text-sm">≈ 315,60 €</p>
            </div>
            <div>
              <p className="text-gray-600">Croissance</p>
              <p className="text-2xl font-bold text-green-500">+35,8%</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Nouveau Défi Section */}
      <section className="mt-10 bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Créer un nouveau défi</h2>
          <button className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
            Voir les suggestions de la communauté
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Type de défi</label>
            <select className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary">
              <option value="question">Question au public</option>
              <option value="challenge">Challenge</option>
              <option value="prediction">Prédiction</option>
              <option value="poll">Sondage</option>
            </select>
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-gray-700 mb-2 font-medium">Question / Défi</label>
            <input 
              type="text" 
              placeholder="Ex: Quel sujet voulez-vous voir dans ma prochaine vidéo ?" 
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Durée</label>
            <select className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary">
              <option value="24h">24 heures</option>
              <option value="48h">48 heures</option>
              <option value="72h">72 heures</option>
              <option value="1w">1 semaine</option>
            </select>
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Options de paris (CreaCoin)</label>
            <select className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary">
              <option value="free">Gratuit</option>
              <option value="50">50 CreaCoin</option>
              <option value="100">100 CreaCoin</option>
              <option value="200">200 CreaCoin</option>
            </select>
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Visibilité</label>
            <select className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary">
              <option value="all">Tous les fans</option>
              <option value="premium">Abonnés premium uniquement</option>
              <option value="top">Top contributeurs</option>
            </select>
          </div>
        </div>
        
        <div className="mt-6 flex justify-end">
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md mr-3">
            Enregistrer comme brouillon
          </button>
          <button className="bg-secondary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors">
            Publier le défi
          </button>
        </div>
      </section>
      
      {/* Activité Récente des Fans */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Activité Récente des Fans</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {[
              { action: 'Nouvelle proposition', user: 'MariaS', time: 'il y a 5 minutes', content: 'A proposé une idée pour votre défi "Style de neuf préféré?"' },
              { action: 'Paris placés', user: 'JeanD', time: 'il y a 28 minutes', content: 'A parié 50 CreaCoin sur "Plus de 7 gifles"' },
              { action: 'Nouvel abonné premium', user: 'SophieT', time: 'il y a 1 heure', content: 'A rejoint votre communauté premium (100 CreaCoin/mois)' },
              { action: 'Résultat de défi', user: '', time: 'il y a 3 heures', content: 'Votre défi "Restaurant préféré?" s\'est terminé avec 745 votes' },
              { action: 'Palier atteint', user: '', time: 'il y a 1 jour', content: 'Vous avez atteint 10 000 CreaCoin générés ce mois-ci!' },
            ].map((item, index) => (
              <li key={index} className="p-4 hover:bg-gray-50">
                <div className="flex justify-between">
                  <div>
                    <span className="font-medium">{item.action}</span>
                    {item.user && <span className="text-primary"> de {item.user}</span>}
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                  <span className="text-sm text-gray-500">{item.time}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
