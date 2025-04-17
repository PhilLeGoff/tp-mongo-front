# Movie Explorer – Frontend React

Ce dépôt correspond au frontend de l'application **Movie Explorer**, développé avec **React**, **Vite**, **TailwindCSS** et divers outils modernes pour une interface rapide, interactive et responsive.

---

## Objectif de l'application

**Movie Explorer** permet d'explorer et d'analyser une base de données de films grâce à une interface web dynamique, connectée à un backend Flask. Ce frontend propose :

- Une navigation fluide entre les pages
- Des visualisations interactives avec Chart.js
- Des appels API centralisés
- Une expérience responsive adaptée à tous les supports

---

## Structure du projet

```
tp-mongo-front/
├── public/                 # Fichiers statiques
├── src/
│   ├── components/         # Composants réutilisables
│   ├── pages/              # Pages principales
│   ├── services/           # Appels aux APIs
│   └── main.jsx            # Point d’entrée React
├── Dockerfile              # Pour déploiement Docker
├── index.html              # Fichier HTML principal
├── package.json            # Dépendances et scripts
├── tailwind.config.js      # Configuration TailwindCSS
└── vite.config.js          # Configuration Vite
```

---

## Lancer l’application en mode développement

```bash
npm install
npm run dev
```

L'application sera accessible à : http://localhost:5173

---

## Lancer avec Docker

```bash
docker build -t tp-mongo-frontend .
docker run -p 8080:80 tp-mongo-frontend
```

> L'app sera servie avec nginx sur http://localhost:8080

---

## Licence

Projet pédagogique à but démonstratif. Libre à vous de le modifier et réutiliser.
