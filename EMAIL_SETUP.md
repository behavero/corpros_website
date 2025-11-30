# 📧 Configuration Email - Notifications Corpros

Votre système envoie automatiquement un email à **gtmt@outlook.fr** à chaque soumission de formulaire.

---

## 🚀 **Configuration Rapide (5 minutes)**

Vous avez 2 options :

### **Option 1 : Gmail (Recommandé - Gratuit)** ⭐

C'est la méthode la plus simple et gratuite.

#### **Étape 1 : Créer un mot de passe d'application Gmail**

1. Allez sur https://myaccount.google.com/security
2. Activez la **Validation en 2 étapes** (si pas déjà fait)
3. Allez dans **Mots de passe des applications**
4. Sélectionnez :
   - **Application :** Autre (nom personnalisé)
   - **Nom :** "Corpros Notifications"
5. Cliquez sur **Générer**
6. **Copiez le mot de passe** (16 caractères)

#### **Étape 2 : Configurer Firebase Functions**

```bash
cd "/Users/martin/Corpros website/corpros-web"

# Configurez avec VOTRE adresse Gmail
firebase functions:config:set \
  smtp.user="votre-email@gmail.com" \
  smtp.pass="xxxx xxxx xxxx xxxx"

# Vérifiez la configuration
firebase functions:config:get
```

**⚠️ Remplacez :**
- `votre-email@gmail.com` par votre vraie adresse Gmail
- `xxxx xxxx xxxx xxxx` par le mot de passe d'application généré

---

### **Option 2 : SendGrid (Professionnel - Gratuit jusqu'à 100 emails/jour)**

SendGrid est plus fiable pour les emails professionnels.

#### **Étape 1 : Créer un compte SendGrid**

1. Inscrivez-vous sur https://signup.sendgrid.com/
2. Vérifiez votre email
3. Allez dans **Settings → API Keys**
4. Créez une nouvelle clé API avec accès **"Mail Send - Full Access"**
5. **Copiez la clé API**

#### **Étape 2 : Configurer Firebase Functions**

```bash
firebase functions:config:set \
  smtp.host="smtp.sendgrid.net" \
  smtp.port="587" \
  smtp.user="apikey" \
  smtp.pass="SG.xxxxxxxxxxxxxxxxx" \
  email.from="notifications@votredomaine.com"
```

---

### **Option 3 : Outlook/Hotmail SMTP**

Puisque votre email de réception est Outlook, vous pouvez aussi utiliser Outlook SMTP :

```bash
firebase functions:config:set \
  smtp.host="smtp-mail.outlook.com" \
  smtp.port="587" \
  smtp.user="votre-email@outlook.com" \
  smtp.pass="votre-mot-de-passe" \
  email.from="votre-email@outlook.com"
```

**⚠️ Important pour Outlook :**
- Activez **"Autoriser les applications moins sécurisées"** dans les paramètres Outlook
- Ou générez un mot de passe d'application si vous avez la 2FA

---

## 📦 **Déploiement**

Une fois la configuration SMTP faite :

```bash
# Installer les dépendances
cd functions
npm install

# Compiler le code
npm run build

# Déployer
cd ..
firebase deploy --only functions
```

**Temps estimé :** 2-3 minutes

---

## 🧪 **Tester**

### **Option 1 : Formulaire web**

1. Allez sur https://corpros-ff144.web.app/contact
2. Remplissez et soumettez le formulaire
3. Vérifiez **gtmt@outlook.fr** dans les 30 secondes

### **Option 2 : Fonction de test**

```bash
curl -X POST https://us-central1-corpros-ff144.cloudfunctions.net/sendTestNotification
```

Vous devriez recevoir un email avec :
- Nom : Jean Dupont
- Entreprise : Test Corp
- Toutes les informations formatées

---

## 📧 **Format de l'Email**

Vous recevrez un email HTML professionnel :

**Sujet :**
```
🎯 Nouveau lead: Jean Dupont - Acme Corp
```

**Contenu :**
- ✅ Nom complet et entreprise
- ✅ Email et téléphone (cliquables)
- ✅ Ville et taille de l'entreprise
- ✅ Profil souhaité (Start/Croissance/Performance)
- ✅ Besoin spécifique
- ✅ Message complet
- ✅ Boutons d'action :
  - 📊 Voir dans Firestore
  - 📧 Répondre directement
- ✅ Date et heure de soumission
- ✅ Lead ID pour référence

**Design :**
- Responsive (mobile-friendly)
- Couleurs Corpros (#262626 + #EFBF04)
- Version texte plain pour les clients email anciens

---

## 🔍 **Vérifier la Configuration**

```bash
# Voir la configuration actuelle
firebase functions:config:get

# Résultat attendu :
{
  "smtp": {
    "user": "votre-email@gmail.com",
    "pass": "xxxx xxxx xxxx xxxx",
    "host": "smtp.gmail.com",  // optionnel
    "port": "587"              // optionnel
  },
  "email": {
    "from": "notifications@corpros.com"  // optionnel
  }
}
```

---

## 📊 **Limites Gratuites**

| Service | Limite Gratuite | Votre Usage Estimé | Coût |
|---------|----------------|-------------------|------|
| **Gmail** | ~500 emails/jour | ~10 emails/jour | **0€** |
| **SendGrid** | 100 emails/jour | ~10 emails/jour | **0€** |
| **Outlook** | ~300 emails/jour | ~10 emails/jour | **0€** |
| **Firebase Functions** | 2M invocations/mois | ~300/mois | **0€** |

Pour votre usage (quelques leads par jour), **tout reste 100% gratuit**.

---

## 🐛 **Dépannage**

### **Problème : Email non reçu**

1. **Vérifiez les spams/courrier indésirable**
   - Cherchez "Corpros" dans vos spams
   - Marquez comme "Non spam" si trouvé

2. **Vérifiez les logs Firebase**
```bash
firebase functions:log --only onNewLead
```

3. **Testez la configuration SMTP**
```bash
# Depuis functions/src/, créez un fichier test-email.js
node test-email.js
```

4. **Erreur "Invalid login"**
   - Gmail : Vérifiez que vous utilisez un **mot de passe d'application**, pas votre mot de passe normal
   - Outlook : Activez les "applications moins sécurisées"
   - SendGrid : Vérifiez que la clé API est correcte

5. **Erreur "Connection timeout"**
   - Vérifiez votre connexion internet
   - Certains réseaux bloquent le port 587, essayez le port 465

### **Problème : Email envoyé mais arrive en spam**

**Solutions :**

1. **Whitelist l'expéditeur**
   - Ajoutez `noreply@corpros-ff144.firebaseapp.com` à vos contacts

2. **Utilisez SendGrid**
   - Plus fiable pour la délivrabilité

3. **Configurez SPF/DKIM** (avancé)
   - Si vous utilisez votre propre domaine

---

## 🔒 **Sécurité**

- ✅ **Mots de passe chiffrés** - Stockés de manière sécurisée dans Firebase
- ✅ **Variables serveur uniquement** - Jamais exposées au client
- ✅ **SMTP sécurisé** - TLS/SSL activé par défaut
- ✅ **Pas de spam** - Seulement lors de vraies soumissions

---

## ⚡ **Quick Start (TL;DR)**

```bash
# 1. Créer un mot de passe d'application Gmail
# → https://myaccount.google.com/apppasswords

# 2. Configurer Firebase
firebase functions:config:set \
  smtp.user="votre@gmail.com" \
  smtp.pass="xxxx xxxx xxxx xxxx"

# 3. Installer et déployer
cd functions && npm install && cd ..
firebase deploy --only functions

# 4. Tester
# → Soumettre le formulaire sur corpros-ff144.web.app/contact
# → Vérifier gtmt@outlook.fr
```

---

## 📚 **Ressources**

- [Gmail App Passwords](https://support.google.com/accounts/answer/185833)
- [SendGrid Docs](https://docs.sendgrid.com/)
- [Nodemailer Guide](https://nodemailer.com/about/)
- [Firebase Functions Config](https://firebase.google.com/docs/functions/config-env)

---

**Prêt à recevoir vos leads par email ! 📧**

