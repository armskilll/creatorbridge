import React from 'react';

interface ModificationPanelProps {
  suggestion: {
    id: number;
    title: string;
    description: string;
    type: string;
    status: string;
  };
}

const ModificationPanel: React.FC<ModificationPanelProps> = ({ suggestion }) => {
  // Ce composant ne doit s'afficher que si la suggestion est en attente ou acceptée
  if (suggestion.status !== 'pending' && suggestion.status !== 'accepted') {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">
        {suggestion.status === 'pending' 
          ? 'Modifier et décider' 
          : 'Planifier la publication'}
      </h2>
      
      {suggestion.status === 'pending' && (
        <form>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Titre de la suggestion</label>
              <input 
                type="text" 
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                defaultValue={suggestion.title}
              />
              <p className="text-sm text-gray-500 mt-1">Vous pouvez ajuster le titre pour qu'il corresponde mieux à votre style.</p>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Description</label>
              <textarea 
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                rows={4}
                defaultValue={suggestion.description}
              ></textarea>
              <p className="text-sm text-gray-500 mt-1">Modifiez la description si nécessaire.</p>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Type de contenu</label>
              <div className="relative">
                <select className="w-full appearance-none border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary">
                  <option value={suggestion.type}>{suggestion.type}</option>
                  <optgroup label="Micro-trottoir">
                    <option value="question">Question de micro-trottoir</option>
                    <option value="defi">Défi pour les passants</option>
                    <option value="lieu">Lieu de tournage</option>
                  </optgroup>
                  <optgroup label="Vlog">
                    <option value="lieu_visite">Lieu à visiter</option>
                    <option value="activite">Activité à essayer</option>
                    <option value="defi_vlog">Défi à relever</option>
                  </optgroup>
                  <optgroup label="Gaming">
                    <option value="jeu">Jeu à tester</option>
                    <option value="challenge">Challenge de gameplay</option>
                    <option value="serie">Idée de série</option>
                  </optgroup>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-1">Vous pouvez changer le type si l'idée correspond mieux à une autre catégorie.</p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="text-yellow-800 font-medium mb-1">Notification à l'utilisateur</h3>
                  <p className="text-yellow-700 text-sm">
                    Si vous modifiez l'idée, un message sera envoyé à l'utilisateur pour l'informer des changements.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Commentaire pour l'utilisateur (optionnel)</label>
              <textarea 
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                rows={3}
                placeholder="Expliquez pourquoi vous avez accepté/refusé/modifié la suggestion..."
              ></textarea>
              <p className="text-sm text-gray-500 mt-1">Ce message sera visible par l'utilisateur qui a proposé l'idée.</p>
            </div>
            
            <div className="pt-4 flex justify-end space-x-3">
              <button type="button" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors">
                Refuser
              </button>
              <button type="button" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors">
                Accepter avec modifications
              </button>
              <button type="button" className="bg-secondary hover:bg-opacity-90 text-white px-4 py-2 rounded-md transition-colors">
                Accepter tel quel
              </button>
            </div>
          </div>
        </form>
      )}
      
      {suggestion.status === 'accepted' && (
        <form>
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="text-green-800 font-medium mb-1">Suggestion acceptée</h3>
                  <p className="text-green-700 text-sm">
                    Cette suggestion a été acceptée. Vous pouvez maintenant planifier sa publication ou la publier immédiatement.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Date de publication prévue</label>
              <input 
                type="date" 
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <p className="text-sm text-gray-500 mt-1">Choisissez la date à laquelle vous prévoyez de publier le contenu.</p>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Notes de production (privées)</label>
              <textarea 
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                rows={3}
                placeholder="Notes internes pour la planification du contenu..."
              ></textarea>
              <p className="text-sm text-gray-500 mt-1">Ces notes ne seront visibles que par vous.</p>
            </div>
            
            <div className="pt-4 flex justify-end space-x-3">
              <button type="button" className="bg-red-100 text-red-600 hover:bg-red-200 px-4 py-2 rounded-md transition-colors">
                Annuler l'acceptation
              </button>
              <button type="button" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                Programmer
              </button>
              <button type="button" className="bg-secondary hover:bg-opacity-90 text-white px-4 py-2 rounded-md transition-colors">
                Publier maintenant
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default ModificationPanel;
