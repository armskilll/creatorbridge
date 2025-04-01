# CreatorBridge

CreatorBridge est une plateforme qui connecte les créateurs de contenu avec leur communauté. Le projet est construit avec Next.js et Tailwind CSS.

## Structure du Projet

Le projet est divisé en deux espaces principaux :

- **Espace Créateur** : Permet aux créateurs de gérer leur contenu, analyser leurs performances et interagir avec leur audience.
- **Espace Communauté** : Permet aux utilisateurs de découvrir des créateurs, suivre leur contenu favori et participer à des discussions.

## Organisation des Dossiers

```
/src
  /app                  # Routes et pages de l'application
    /creator            # Pages de l'espace créateur
    /community          # Pages de l'espace communauté
  /components           # Composants React
    /common             # Composants partagés
    /creator            # Composants spécifiques à l'espace créateur
    /community          # Composants spécifiques à l'espace communauté
  /lib                  # Bibliothèques et utilitaires
  /services             # Services d'API et logique métier
  /styles               # Fichiers CSS et configuration Tailwind
```

## Installation

1. Clonez le dépôt
2. Installez les dépendances : `npm install`
3. Lancez le serveur de développement : `npm run dev`

## Technologies Utilisées

- **Next.js** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **React** - Bibliothèque UI
