import React from 'react';
import Link from 'next/link';

export default function NewContent() {
  return (
    <div className="container-custom py-8">
      <div className="flex items-center mb-6">
        <Link href="/creator/content" className="text-gray-600 hover:text-gray-900 mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L4.414 9H17a1 1 0 110 2H4.414l5.293 5.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </Link>
        <h1 className="text-3xl font-bold">Créer un Nouveau Contenu</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <form>
          {/* Titre et statut */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="md:col-span-2">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Titre
              </label>
              <input
                type="text"
                id="title"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Entrez le titre de votre contenu"
              />
            </div>
            
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                Statut
              </label>
              <select
                id="status"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="draft">Brouillon</option>
                <option value="published">Publier maintenant</option>
                <option value="scheduled">Programmer</option>
              </select>
            </div>
          </div>
          
          {/* Description et catégorie */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="md:col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description / Résumé
              </label>
              <textarea
                id="description"
                rows={3}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Entrez une brève description"
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Catégorie
              </label>
              <select
                id="category"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Sélectionnez une catégorie</option>
                <option value="tutorial">Tutoriel</option>
                <option value="marketing">Marketing</option>
                <option value="tools">Outils</option>
                <option value="monetization">Monétisation</option>
                <option value="community">Communauté</option>
                <option value="other">Autre</option>
              </select>
              
              <div className="mt-4">
                <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">
                  Tags (séparés par des virgules)
                </label>
                <input
                  type="text"
                  id="tags"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="créateur, tutoriel, etc."
                />
              </div>
              
              {/* Date de publication (conditionnelle) */}
              <div className="mt-4">
                <label htmlFor="publish-date" className="block text-sm font-medium text-gray-700 mb-1">
                  Date de Publication
                </label>
                <input
                  type="datetime-local"
                  id="publish-date"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>
          
          {/* Contenu principal */}
          <div className="mb-6">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
              Contenu
            </label>
            <div className="border rounded-md">
              {/* Barre d'outils de l'éditeur */}
              <div className="border-b p-2 flex flex-wrap gap-2">
                <button type="button" className="p-1 hover:bg-gray-100 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h10M4 18h16" />
                  </svg>
                </button>
                <button type="button" className="p-1 hover:bg-gray-100 rounded">B</button>
                <button type="button" className="p-1 hover:bg-gray-100 rounded italic">I</button>
                <button type="button" className="p-1 hover:bg-gray-100 rounded underline">U</button>
                <button type="button" className="p-1 hover:bg-gray-100 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 114.34.672l-3.316 3.316a4 4 0 01-5.656-5.656l3.316-3.316" />
                  </svg>
                </button>
                <button type="button" className="p-1 hover:bg-gray-100 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
                <button type="button" className="p-1 hover:bg-gray-100 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                  </svg>
                </button>
              </div>
              
              {/* Zone d'édition */}
              <textarea
                id="content"
                className="w-full px-4 py-2 focus:outline-none"
                rows={15}
                placeholder="Rédigez votre contenu ici..."
              ></textarea>
            </div>
          </div>
          
          {/* Image de couverture */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image de Couverture
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary/80 focus-within:outline-none"
                  >
                    <span>Télécharger une image</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
                  <p className="pl-1">ou glisser-déposer</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF jusqu'à 5MB
                </p>
              </div>
            </div>
          </div>
          
          {/* Paramètres additionnels */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-3">Paramètres Additionnels</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">Autoriser les commentaires</span>
                </label>
              </div>
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">Marquer comme contenu exclusif</span>
                </label>
              </div>
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">Partager sur les réseaux sociaux</span>
                </label>
              </div>
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">Envoyer une notification aux abonnés</span>
                </label>
              </div>
            </div>
          </div>
          
          {/* Boutons d'action */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Aperçu
            </button>
            <button
              type="button"
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Enregistrer comme brouillon
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Publier
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
