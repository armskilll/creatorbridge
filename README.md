# CreatorBridge

CreatorBridge est une plateforme interactive qui connecte les créateurs de contenu avec leur communauté à travers des sondages et des suggestions d'idées. Cette application permet aux créateurs de solliciter l'avis de leur audience sur leurs futurs contenus et aux fans de participer activement à la création.

## Fonctionnalités principales

### Pour les créateurs
- Créer des sondages sur leurs prochaines publications/vidéos
- Spécifier la plateforme cible pour chaque sondage/idée (YouTube, Twitch, TikTok, etc.)
- Recevoir des suggestions d'idées de contenu de leur communauté
- Analyser les votes et commentaires pour mieux comprendre les attentes de leur audience
- Interagir directement avec les fans à travers les commentaires

### Pour la communauté
- Voter sur les sondages de leurs créateurs favoris
- Proposer de nouvelles idées de contenu en spécifiant la plateforme visée
- Commenter et voter sur les idées proposées par d'autres membres
- Filtrer les contenus par plateforme (YouTube, Twitch, TikTok, etc.)
- Rechercher et suivre des créateurs

## Organisation du contenu par plateforme

CreatorBridge permet de catégoriser les idées et sondages selon les plateformes principales:
- **YouTube** - Pour les idées de vidéos longues, séries, etc.
- **Twitch** - Pour les concepts de streams, événements live
- **TikTok** - Pour les formats courts et tendances
- **Instagram** - Pour les posts, stories, reels
- **Autres plateformes** - Selon les besoins des créateurs

## Organisation des Dossiers


```
/src
  /app                  # Routes et pages de l'application
    /creator            # Pages de l'espace créateur
    /community          # Pages de l'espace communauté
    /login              # Pages d'authentification
    /signup             # Pages d'inscription
  /components           # Composants React
    /common             # Composants partagés
    /creator            # Composants spécifiques à l'espace créateur
    /community          # Composants spécifiques à l'espace communauté
    /auth               # Composants d'authentification
  /hooks                # Custom hooks React
  /firebase             # Configuration Firebase
  /lib                  # Bibliothèques et utilitaires
  /services             # Services d'API et logique métier
  /styles               # Fichiers CSS et configuration Tailwind
```

## Installation

1. Clonez le dépôt: git clone https://github.com/armskilll/creatorbridge.git
2. Installez les dépendances : `npm install`
3. Configurez Firebase
   Créez un projet Firebase
   Ajoutez les identifiants Firebase dans un fichier .env.local  :
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
5. Lancez le serveur de développement : `npm run dev`

## Technologies Utilisées

- **Next.js** - Framework React
- **TypeScript** - Typage statique
- **Firebase** - Authentification et base de données
- **Tailwind CSS** - Framework CSS utilitaire
- **React** - Bibliothèque UI
