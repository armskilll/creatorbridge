import React from 'react';
import SuggestionHeader from "@/components/creator/suggestions/SuggestionHeader";
import SuggestionDetails from "@/components/creator/suggestions/SuggestionDetails";
import UserInfo from "@/components/creator/suggestions/UserInfo";
import ModificationPanel from "@/components/creator/suggestions/ModificationPanel";
import EngagementStats from "@/components/creator/suggestions/EngagementStats";
import CommentSection from "@/components/creator/suggestions/CommentSection";

interface Props {
  params: {
    id: string
  }
}

export default function SuggestionManagementPage({ params }: Props) {
  const id = params.id;
  
  // Simuler la récupération des données de la suggestion basée sur l'ID
  // Dans une vraie application, cela viendrait d'une API ou d'une base de données
  const suggestion = {
    id: parseInt(id),
    title: "Demander aux gens leur pire anecdote de rendez-vous amoureux",
    status: 'pending', // pending, accepted, rejected, published
    type: 'Question de micro-trottoir',
    category: 'Micro-trottoir',
    description: 'Je pense que ça pourrait donner des réponses hilarantes et très variées. Les gens ont souvent des histoires incroyables à raconter sur ce sujet. On pourrait faire ça dans différents quartiers pour avoir une variété de réponses et de tranches d\'âge.',
    location: 'Paris, Quartier Latin',
    tags: ['Humour', 'Relations', 'Vie quotidienne'],
    creaCoinBet: 250,
    submittedAt: '29 mars 2025',
    likes: 48,
    commentCount: 12,
    views: 156,
    similarSuggestions: [
      {
        id: 101,
        title: 'Quel est votre plus grand regret dans la vie?',
        likes: 35,
        status: 'accepted'
      },
      {
        id: 102,
        title: 'Quelle est la chose la plus folle que vous avez faite pour impressionner quelqu\'un?',
        likes: 27,
        status: 'pending'
      }
    ],
    user: {
      id: 42,
      name: 'MarieD',
      image: 'https://randomuser.me/api/portraits/women/23.jpg',
      joinedAt: 'janvier 2025',
      suggestionsCount: 8,
      acceptedCount: 3,
      publishedCount: 2,
      creaCoinEarned: 1250
    }
  };

  return (
    <div className="container-custom py-8">
      <SuggestionHeader suggestion={suggestion} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        <div className="lg:col-span-2">
          <SuggestionDetails suggestion={suggestion} />
          <ModificationPanel suggestion={suggestion} />
          <CommentSection suggestionId={id} />
        </div>
        
        <div>
          <UserInfo user={suggestion.user} />
          <EngagementStats suggestion={suggestion} />
        </div>
      </div>
    </div>
  );
}
