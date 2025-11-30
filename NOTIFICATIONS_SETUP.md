# 🔔 Guide de Configuration des Notifications

Votre système de notifications automatiques est **prêt à être déployé** ! Suivez ce guide pour activer les notifications Teams et/ou Trello.

---

## ✅ **Ce qui est déjà fait**

- ✅ Firebase Firestore configuré et déployé
- ✅ Règles de sécurité en place
- ✅ Formulaire de contact fonctionnel
- ✅ Firebase Functions créées et compilées
- ✅ Code de notification prêt pour Teams & Trello

---

## 🚀 **Étapes de Configuration**

### **Étape 1 : Configurer Microsoft Teams** (5 minutes)

1. **Ouvrez Microsoft Teams**
2. **Sélectionnez le canal** où vous voulez recevoir les notifications
3. Cliquez sur **`•••`** (à côté du nom du canal) > **Manage channel**
4. Allez dans l'onglet **Connectors**
5. Cherchez **"Incoming Webhook"** et cliquez sur **Configure**
6. Donnez un nom : **"Corpros Leads"**
7. (Optionnel) Ajoutez une image : utilisez votre logo
8. Cliquez sur **Create**
9. **Copiez l'URL du webhook** - elle ressemble à :
   ```
   https://outlook.office.com/webhook/abc123.../IncomingWebhook/def456...
   ```
10. Cliquez sur **Done**

### **Étape 2 : Configurer Trello** (10 minutes) - OPTIONNEL

#### **Option A : Via Zapier (Recommandé - Plus simple)**

1. Créez un compte gratuit sur [Zapier](https://zapier.com)
2. Créez un nouveau **Zap** :
   - **Trigger:** Webhooks by Zapier → **Catch Hook**
   - Copiez l'URL du webhook personnalisé
   - **Action:** Trello → **Create Card**
   - Connectez votre compte Trello
   - Sélectionnez le tableau et la liste
   - Mappez les champs :
     - **Card Title:** `{{name}}`
     - **Card Description:** `{{desc}}`
     - **Labels:** `{{labels}}`
3. Testez et activez le Zap
4. **Copiez l'URL du webhook**

#### **Option B : Via Make.com (Alternative)**

Similaire à Zapier, [Make.com](https://make.com) offre également un forfait gratuit.

#### **Option C : Sans Zapier (API Trello directe)**

Voir la documentation : https://developer.atlassian.com/cloud/trello/guides/rest-api/webhooks/

### **Étape 3 : Configurer Firebase Functions**

Une fois que vous avez vos URL de webhook, configurez-les dans Firebase :

```bash
# Naviguez vers le dossier du projet
cd "/Users/martin/Corpros website/corpros-web"

# Configurez l'URL Teams (OBLIGATOIRE)
firebase functions:config:set teams.webhook="VOTRE_URL_TEAMS"

# Configurez l'URL Trello (OPTIONNEL)
firebase functions:config:set trello.webhook="VOTRE_URL_TRELLO_OU_ZAPIER"

# Vérifiez la configuration
firebase functions:config:get
```

**Exemple :**
```bash
firebase functions:config:set \
  teams.webhook="https://outlook.office.com/webhook/abc123..." \
  trello.webhook="https://hooks.zapier.com/hooks/catch/xyz789..."
```

### **Étape 4 : Déployer les Functions**

```bash
# Depuis la racine du projet
firebase deploy --only functions
```

Le déploiement prendra **2-3 minutes**. Vous verrez :
```
✔ functions[onNewLead(us-central1)]: Successful create operation.
✔ functions[sendTestNotification(us-central1)]: Successful create operation.
```

---

## 🧪 **Tester les Notifications**

### **Test Rapide - Soumettre le formulaire**

1. Allez sur https://corpros-ff144.web.app/contact
2. Remplissez et soumettez le formulaire
3. Dans les **30 secondes**, vous devriez recevoir :
   - 📱 Une notification Teams
   - 🗂️ Une carte Trello (si configuré)

### **Test Technique - Fonction de test**

```bash
# Récupérer l'URL de la fonction
firebase functions:list

# Envoyer une notification de test
curl -X POST https://us-central1-corpros-ff144.cloudfunctions.net/sendTestNotification
```

---

## 📊 **Ce que vous recevrez**

### **Notification Teams:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 Nouveau Contact Corpros
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Jean Dupont
Acme Corporation

📧 Email: jean.dupont@acme.com
📱 Téléphone: +33 6 12 34 56 78
📍 Ville: Paris
👥 Taille: 21-50 employés
🎯 Profil: Croissance
❓ Besoin: Optimiser les marges
💬 Message: Nous cherchons à améliorer...

Message complet:
[texte complet du message]

[📊 Voir dans Firestore] [📧 Répondre par email]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### **Carte Trello:**

**Titre :** Jean Dupont - Acme Corporation

**Description :**
```
Contact Information:
- Email: jean.dupont@acme.com
- Téléphone: +33 6 12 34 56 78
- Ville: Paris
- Taille entreprise: 21-50
- Profil souhaité: Croissance
- Besoin spécifique: Optimiser les marges

Message:
[message complet]

---
Soumis le: 30/11/2025 à 15:30
Lead ID: xYz789AbC
```

**Labels :** Croissance (automatique selon le profil)

---

## 🔍 **Consulter les Leads dans Firestore**

**Via Firebase Console :**
1. Allez sur https://console.firebase.google.com/project/corpros-ff144/firestore
2. Ouvrez la collection **`leads`**
3. Vous verrez tous les contacts soumis avec :
   - Toutes les données du formulaire
   - Date/heure de soumission
   - ID unique

**Via MCP (dans Cursor) :**
Vous pouvez aussi consulter les leads directement ici via les commandes Firebase MCP !

---

## 📱 **Notifications Mobile**

Les notifications Teams apparaîtront automatiquement sur :
- ✅ **Teams Mobile** (iOS/Android)
- ✅ **Teams Desktop**
- ✅ **Notifications push** natives
- ✅ **Email** (si activé dans vos paramètres Teams)

Vous serez donc alerté **instantanément**, où que vous soyez !

---

## 🐛 **Dépannage**

### **Problème : Aucune notification reçue**

1. **Vérifiez les logs :**
```bash
firebase functions:log --only onNewLead
```

2. **Vérifiez la configuration :**
```bash
firebase functions:config:get
```

3. **Testez manuellement le webhook Teams :**
```bash
curl -X POST "VOTRE_URL_TEAMS" \
  -H "Content-Type: application/json" \
  -d '{"text": "Test de notification"}'
```

Si ça fonctionne, vous recevrez un message "Test de notification" dans Teams.

### **Problème : Erreur lors du déploiement**

```bash
# Vérifier que vous êtes bien connecté
firebase login --reauth

# Vérifier le projet actif
firebase use

# Réessayer le déploiement
firebase deploy --only functions
```

---

## 💰 **Coûts**

**Tout est GRATUIT :**

- ✅ Firebase Firestore : 50K lectures + 20K écritures/jour gratuites
- ✅ Firebase Functions : 2M invocations/mois gratuites
- ✅ Firebase Hosting : 10 GB storage + 360 MB/jour gratuits
- ✅ Teams : Inclus dans votre licence Microsoft 365
- ✅ Zapier : 100 tâches/mois sur le plan gratuit
- ✅ Trello : Gratuit (ou inclus dans votre abonnement)

**Pour votre usage** (quelques soumissions par jour), vous resterez **100% dans le forfait gratuit**.

---

## 🔒 **Sécurité**

- ✅ **Webhooks côté serveur** - Les URLs ne sont jamais exposées au client
- ✅ **Règles Firestore** - Seules les écritures valides sont autorisées
- ✅ **Validation des données** - Le formulaire valide tous les champs
- ✅ **Rate limiting** - Firebase protège contre les abus
- ✅ **HTTPS uniquement** - Toutes les communications sont chiffrées

---

## 📚 **Prochaines Étapes**

Après avoir configuré les notifications, vous pouvez :

1. **Personnaliser les messages** - Éditez `/functions/src/index.ts`
2. **Ajouter d'autres intégrations** - Slack, Discord, Email, etc.
3. **Créer des workflows** - Réponses automatiques, CRM sync, etc.
4. **Analyser les leads** - Dashboards, statistiques, rapports

---

## 💡 **Besoin d'aide ?**

Les fichiers importants :
- `/functions/src/index.ts` - Code des notifications
- `/functions/README.md` - Documentation technique
- `/firestore.rules` - Règles de sécurité Firestore

---

**Prêt à recevoir vos premiers leads ! 🎯**

