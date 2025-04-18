# Frontend – Movie Explorer

Ce dépôt contient l'interface utilisateur du projet **Movie Explorer**, développée avec **React** et **Vite**. Elle consomme l'API Flask hébergée dans le projet `tp-mongo-back` et propose une expérience fluide pour explorer les films, leurs genres, les statistiques, et bien plus encore.

---

## Installation locale (sans Docker)

Assurez-vous d'avoir **Node.js 20+** installé.

### 1. Installation des dépendances

```bash
npm install
```

### 2. Lancement du serveur de développement

```bash
npm run dev
```

L'application sera disponible sur `http://localhost:5173`

---

## Accès via Docker

L'application est intégrée dans le projet global `tp-mongo` via un fichier `docker-compose.yml`. Depuis ce dossier parent, exécutez simplement :

```bash
docker-compose up --build
```

---

## Fonctionnalités principales

- Accueil avec affichage des films populaires
- Recherche dynamique avec filtres (titre, genre)
- Pages de détails : films et acteurs
- Section **Classements** avec les films populaires par genre
- Page **Statistiques** avec des graphiques analytiques
- Recommandations thématiques et personnalisées
- Système de favoris (stockés par IP)

---

## Organisation du code

```txt
src/
├── assets/           # Fichiers statiques (logo, icônes...)
├── components/       # UI génériques (Header, MovieRow...)
├── context/          # Contexte global (ex: recherche)
├── pages/            # Pages principales (Home, Analytics...)
├── services/         # Appels à l'API backend (Axios)
├── App.jsx           # Configuration des routes
└── main.jsx          # Point d'entrée de l'application
```

---

## Remarques

- Ce frontend est prévu pour fonctionner avec [`tp-mongo-back`](https://github.com/PhilLeGoff/tp-mongo-back).
- Le projet est intégré dans le dépôt global [`tp-mongo`](https://github.com/Linnaelle/tp-mongo) pour un déploiement via Docker.