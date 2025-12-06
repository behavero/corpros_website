# CORPROS GROUP - Website Officiel

[![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black)](https://nextjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-Hosting-orange)](https://firebase.google.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)

Site web corporate ultra-premium pour CORPROS GROUP, construit avec une esthétique "Avant-Garde Digital Editorial".

## 🌐 Site en ligne

**Production:** [corpros-ff144.web.app](https://corpros-ff144.web.app)

## ✨ Caractéristiques

### Design & UX
- 🎨 Design system "Avant-Garde Digital Editorial"
- ⚡ Couleur d'accentuation stratégique (#EFBF04)
- 📱 Responsive (Mobile & Desktop)
- 🌑 Thème monochrome premium (#262626)
- ✨ Animations fluides et transitions de page

### Pages
- 🏠 **Accueil** - Hero avec typographie massive, statistiques animées
- 👥 **Nos Profils** - Start, Croissance, Performance
- 🎯 **Notre Méthode** - Timeline interactive avec roadmap visuelle
- 💡 **Notre Vision** - Valeurs et engagement
- 📧 **Contact** - Formulaire avec validation en temps réel + FAQ

### Fonctionnalités
- 📊 Compteurs animés au scroll
- 📈 Barre de progression de lecture
- 🎭 Transitions de page élégantes
- ✅ Validation de formulaire en temps réel
- 🔥 Intégration Firebase (Firestore + Analytics)
- 🎪 Accordéon FAQ interactif
- 📖 Section success stories

## 🛠 Technologies

- **Framework:** Next.js 16 (App Router, Static Export)
- **Styling:** Tailwind CSS 4 + Custom Design System
- **Animations:** Framer Motion
- **Backend:** Firebase (Firestore, Analytics)
- **Icons:** Lucide React
- **Fonts:** Playfair Display (Display), Inter (Body)
- **Hosting:** Firebase Hosting
- **Language:** TypeScript

## 🚀 Développement Local

### Prérequis
- Node.js 18+
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/behavero/corpros_website.git
cd corpros_website

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

## 📦 Build & Déploiement

### Build Production

```bash
npm run build
```

Génère un site statique dans le dossier `out/`

### Déploiement Firebase

```bash
# Se connecter à Firebase
firebase login

# Déployer
firebase deploy
```

Voir [DEPLOYMENT_GUIDE.md](../DEPLOYMENT_GUIDE.md) pour plus de détails.

## 📁 Structure du Projet

```
corpros-web/
├── app/                    # Pages Next.js (App Router)
│   ├── page.tsx           # Homepage
│   ├── contact/           # Page contact
│   ├── profils/           # Page profils
│   ├── methode/           # Page méthode
│   ├── vision/            # Page vision
│   └── layout.tsx         # Layout global
├── components/            # Composants réutilisables
│   ├── Header.tsx         # Navigation
│   ├── Footer.tsx         # Pied de page
│   ├── CircularButton.tsx # Boutons circulaires
│   ├── AnimatedCounter.tsx # Compteurs animés
│   ├── ScrollProgress.tsx  # Barre de progression
│   ├── FAQAccordion.tsx   # Accordéon FAQ
│   └── ...
├── lib/                   # Utilitaires
│   ├── firebase.ts        # Config Firebase
│   └── utils.ts           # Helpers
├── public/                # Assets statiques
│   └── logos/            # Logos et favicons
└── design.json           # Design system (source de vérité)
```

## 🎨 Design System

Le design est défini dans `design.json` et suit ces principes:

- **Contraste radical:** Grilles rigides vs. formes organiques
- **Typographie dominante:** Display massif vs. labels microscopiques
- **Espace négatif:** Usage extrême du black space
- **Interactions:** Micro-interactions précises avec feedback visuel

### Palette de Couleurs

```css
--color-bg-primary: #262626    /* Fond principal */
--color-text-primary: #FFFFFF  /* Texte principal */
--color-text-secondary: #999999 /* Texte secondaire */
--color-highlight: #EFBF04     /* Accentuation dorée */
--color-divider: rgba(255, 255, 255, 0.15) /* Lignes hairline */
```

## 📊 Performance

- ✅ Static Site Generation (SSG)
- ✅ Images optimisées
- ✅ Code splitting automatique
- ✅ Lazy loading des composants
- ✅ Fonts optimisées (next/font)

## 🔒 Firebase Configuration

Le site utilise Firebase pour:
- **Firestore:** Sauvegarde des leads du formulaire contact
- **Analytics:** Suivi des visiteurs et comportements
- **Hosting:** Hébergement du site statique

Configuration dans `lib/firebase.ts`

## 📝 Scripts Disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build production
npm run start    # Serveur production (après build)
npm run lint     # Linter ESLint
```

## 🤝 Contribution

Ce projet est privé et développé pour CORPROS GROUP.

## 📄 Documentation

- [DEPLOYMENT_GUIDE.md](../DEPLOYMENT_GUIDE.md) - Guide de déploiement
- [FIREBASE_SETUP.md](../FIREBASE_SETUP.md) - Configuration Firebase
- [IMPLEMENTATION_SUMMARY.md](../IMPLEMENTATION_SUMMARY.md) - Résumé d'implémentation
- [README_ASSETS.md](../public/README_ASSETS.md) - Guide des assets

## 📞 Support

Pour toute question ou support, contactez l'équipe CORPROS GROUP.

---

**Construit avec ❤️ pour CORPROS GROUP**






