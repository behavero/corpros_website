# 🔔 Firebase Functions - Notifications Corpros

Cette fonction Cloud envoie automatiquement des notifications à **Microsoft Teams** et **Trello** lors de chaque soumission du formulaire de contact.

---

## 📋 **Fonctionnalités**

✅ **Notification Teams automatique** avec toutes les informations du lead
✅ **Notification Trello** pour créer une carte automatiquement  
✅ **Logs détaillés** dans Firebase Console  
✅ **Fonction de test** pour vérifier la configuration  

---

## 🚀 **Installation**

### 1. Installer les dépendances

```bash
cd functions
npm install
```

### 2. Configurer les Webhooks

#### **Microsoft Teams:**

1. Ouvrez votre canal Teams
2. Cliquez sur `•••` > **Connectors** > **Incoming Webhook**
3. Donnez un nom: "Corpros Leads"
4. Copiez l'URL du webhook

#### **Trello (Option A - Zapier/Make.com):**

1. Créez un compte sur [Zapier](https://zapier.com) ou [Make.com](https://make.com)
2. Créez un nouveau Zap:
   - **Trigger:** Webhooks by Zapier - Catch Hook
   - **Action:** Trello - Create Card
3. Copiez l'URL du webhook personnalisé

#### **Trello (Option B - API directe):**

Voir la documentation: https://developer.atlassian.com/cloud/trello/guides/rest-api/webhooks/

### 3. Configurer les variables d'environnement

**Via Firebase Console:**
```bash
firebase functions:config:set \
  teams.webhook="https://outlook.office.com/webhook/YOUR_URL" \
  trello.webhook="https://hooks.zapier.com/hooks/catch/YOUR_ID"
```

**Vérifier la configuration:**
```bash
firebase functions:config:get
```

---

## 📦 **Déploiement**

### Déployer les fonctions:

```bash
# Depuis la racine du projet
firebase deploy --only functions

# Ou depuis le dossier functions
cd functions
npm run deploy
```

### Voir les logs:

```bash
firebase functions:log
```

---

## 🧪 **Tester les Notifications**

### Option 1: Soumettre le formulaire

Allez sur https://corpros-ff144.web.app/contact et soumettez le formulaire.

### Option 2: Fonction de test

```bash
# Récupérer l'URL de la fonction
firebase functions:list

# Envoyer une requête de test
curl -X POST https://REGION-corpros-ff144.cloudfunctions.net/sendTestNotification
```

---

## 📊 **Format des Notifications**

### **Teams - Message Card:**

```
🎯 Nouveau Contact Corpros

Jean Dupont
Test Corp

📧 Email: test@example.com
📱 Téléphone: +33 6 12 34 56 78
📍 Ville: Paris
👥 Taille: 21-50
🎯 Profil: Croissance
❓ Besoin: Optimiser les marges
💬 Message: [extrait]

[Message complet]

[Bouton: Voir dans Firestore]
[Bouton: Répondre par email]
```

### **Trello - Carte:**

```
Titre: Jean Dupont - Test Corp

Description:
Contact Information:
- Email: test@example.com
- Téléphone: +33 6 12 34 56 78
- Ville: Paris
- Taille entreprise: 21-50
- Profil souhaité: Croissance
- Besoin spécifique: Optimiser les marges

Message:
[message complet]

---
Soumis le: 30/11/2025 à 15:30
Lead ID: abc123
```

---

## 🔧 **Configuration Avancée**

### Variables d'environnement locales (.env):

Créez un fichier `.env` dans `/functions`:

```env
TEAMS_WEBHOOK_URL=https://outlook.office.com/webhook/YOUR_URL
TRELLO_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/YOUR_ID
```

### Personnaliser les notifications:

Éditez `/functions/src/index.ts` pour modifier:
- Le format des messages
- Les champs affichés
- Les couleurs et icônes
- Les actions (boutons)

---

## 📱 **Intégration Mobile (Bonus)**

Les notifications Teams apparaîtront également sur:
- ✅ Teams Mobile (iOS/Android)
- ✅ Teams Desktop
- ✅ Notifications push natives

---

## 🐛 **Dépannage**

### Les notifications ne sont pas envoyées:

1. Vérifier les logs:
```bash
firebase functions:log --only onNewLead
```

2. Vérifier la configuration:
```bash
firebase functions:config:get
```

3. Tester manuellement le webhook:
```bash
curl -X POST "YOUR_TEAMS_WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  -d '{"text": "Test"}'
```

### Erreur de déploiement:

```bash
# Vérifier la version de Node.js
node --version  # Doit être 18+

# Réinstaller les dépendances
cd functions
rm -rf node_modules package-lock.json
npm install
```

---

## 💰 **Coûts**

**Firebase Functions - Gratuit jusqu'à:**
- 2M invocations/mois
- 400,000 GB-secondes
- 200,000 CPU-secondes

Pour votre usage (quelques soumissions/jour), vous resterez **100% dans le forfait gratuit**.

---

## 📚 **Ressources**

- [Firebase Functions Docs](https://firebase.google.com/docs/functions)
- [Teams Incoming Webhooks](https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook)
- [Trello API](https://developer.atlassian.com/cloud/trello/rest/api-group-cards/)
- [Zapier Webhooks](https://zapier.com/apps/webhook/integrations)

