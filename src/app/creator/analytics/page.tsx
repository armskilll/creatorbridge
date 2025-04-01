import React from 'react';

export default function CreatorAnalytics() {
  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-6">Statistiques et Analytiques</h1>
      
      {/* Filtre de période */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="flex flex-wrap items-center gap-4">
          <span className="font-medium">Période :</span>
          <div className="flex">
            <button className="px-4 py-2 bg-primary text-white rounded-l-md">7 jours</button>
            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors">30 jours</button>
            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors rounded-r-md">3 mois</button>
          </div>
          <div className="flex gap-2 ml-auto">
            <input 
              type="date" 
              className="border rounded px-3 py-2"
              defaultValue="2025-03-01"
            />
            <span className="self-center">à</span>
            <input 
              type="date" 
              className="border rounded px-3 py-2"
              defaultValue="2025-03-31"
            />
            <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors">
              Appliquer
            </button>
          </div>
        </div>
      </div>
      
      {/* Cartes de métriques principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Vues Totales', value: '34,567', change: '+12.5%', isPositive: true },
          { label: 'Nouveaux Abonnés', value: '897', change: '+5.2%', isPositive: true },
          { label: 'Taux d\'Engagement', value: '5.8%', change: '-0.3%', isPositive: false },
          { label: 'Revenus', value: '2,845 €', change: '+8.1%', isPositive: true },
        ].map((metric, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-1">{metric.label}</p>
            <div className="flex justify-between items-end">
              <h3 className="text-3xl font-bold">{metric.value}</h3>
              <span className={`text-sm ${metric.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {metric.change}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Graphique principal */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Évolution des Vues</h2>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm bg-primary text-white rounded">Vues</button>
            <button className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded">Abonnés</button>
            <button className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded">Revenus</button>
          </div>
        </div>
        
        {/* Simulation d'un graphique */}
        <div className="h-80 w-full bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-500 mb-2">Graphique d'évolution des vues</p>
            <p className="text-gray-400 text-sm">(Dans une implémentation réelle, un composant de graphique serait utilisé ici)</p>
          </div>
        </div>
      </div>
      
      {/* Analyse du contenu */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Contenu le plus performant */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Contenu le Plus Performant</h2>
          <div className="space-y-4">
            {[
              { title: "Comment optimiser votre workflow créatif", views: 4582, engagement: "8.7%" },
              { title: "10 outils indispensables pour les créateurs en 2025", views: 3215, engagement: "7.2%" },
              { title: "Guide complet pour débuter sur YouTube", views: 2871, engagement: "6.9%" },
              { title: "Comment monetiser votre audience en 2025", views: 2654, engagement: "5.3%" },
            ].map((content, index) => (
              <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded">
                <div>
                  <p className="font-medium">{content.title}</p>
                  <div className="flex space-x-4 text-sm text-gray-500">
                    <span>{content.views.toLocaleString()} vues</span>
                    <span>{content.engagement} engagement</span>
                  </div>
                </div>
                <button className="text-primary hover:underline text-sm">Détails</button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Démographie */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Démographie de l'Audience</h2>
          
          {/* Âge */}
          <div className="mb-6">
            <h3 className="text-md font-medium mb-3">Âge</h3>
            <div className="space-y-2">
              {[
                { age: "18-24", percentage: 35 },
                { age: "25-34", percentage: 42 },
                { age: "35-44", percentage: 15 },
                { age: "45-54", percentage: 6 },
                { age: "55+", percentage: 2 },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span>{item.age}</span>
                    <span>{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Localisation */}
          <div>
            <h3 className="text-md font-medium mb-3">Pays</h3>
            <div className="space-y-3">
              {[
                { country: "France", percentage: 45 },
                { country: "Belgique", percentage: 18 },
                { country: "Canada", percentage: 15 },
                { country: "Suisse", percentage: 12 },
                { country: "Autres", percentage: 10 },
              ].map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span>{item.country}</span>
                  <span>{item.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Tendances et Recommandations */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Tendances et Recommandations</h2>
        
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
            <h3 className="font-medium text-blue-700 mb-1">📈 Tendance à la hausse</h3>
            <p className="text-gray-700">Vos vidéos sur le thème "création de contenu" génèrent 35% plus d'engagement que la moyenne. Envisagez de créer plus de contenu sur ce sujet.</p>
          </div>
          
          <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
            <h3 className="font-medium text-green-700 mb-1">✨ Opportunité</h3>
            <p className="text-gray-700">Les publications le dimanche matin obtiennent 22% plus de vues. Essayez d'ajuster votre calendrier de publication.</p>
          </div>
          
          <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded">
            <h3 className="font-medium text-amber-700 mb-1">⚠️ Point d'attention</h3>
            <p className="text-gray-700">Votre taux de rétention baisse après 8 minutes dans vos vidéos longues. Envisagez de raccourcir vos vidéos ou d'ajouter plus d'éléments engageants à ce moment-là.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
