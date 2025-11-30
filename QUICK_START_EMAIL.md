# ⚡ Email Notifications - Démarrage Rapide (5 min)

Recevez un email à **gtmt@outlook.fr** à chaque soumission de formulaire.

---

## 🎯 **3 Étapes Simples**

### **1️⃣ Créer un mot de passe d'application Gmail** (2 min)

1. **Allez sur** https://myaccount.google.com/apppasswords
2. **Connectez-vous** avec votre compte Gmail
3. **Nom de l'application :** "Corpros Notifications"
4. **Cliquez** sur "Générer"
5. **Copiez** le mot de passe (format: xxxx xxxx xxxx xxxx)

---

### **2️⃣ Configurer Firebase** (1 min)

```bash
cd "/Users/martin/Corpros website/corpros-web"

firebase functions:config:set \
  smtp.user="VOTRE-EMAIL@gmail.com" \
  smtp.pass="xxxx xxxx xxxx xxxx"
```

**⚠️ Remplacez :**
- `VOTRE-EMAIL@gmail.com` → Votre vraie adresse Gmail
- `xxxx xxxx xxxx xxxx` → Le mot de passe d'application copié

**Vérifier :**
```bash
firebase functions:config:get
```

---

### **3️⃣ Déployer** (2 min)

```bash
firebase deploy --only functions
```

**Attendez :** `✔ Deploy complete!` (2-3 minutes)

---

## 🧪 **Tester**

**Option 1 :** Soumettez le formulaire
- https://corpros-ff144.web.app/contact
- Vérifiez **gtmt@outlook.fr** dans les 30 secondes

**Option 2 :** Fonction de test
```bash
curl -X POST https://us-central1-corpros-ff144.cloudfunctions.net/sendTestNotification
```

---

## 📧 **Ce que vous recevrez**

**Sujet :**
```
🎯 Nouveau lead: Jean Dupont - Acme Corp
```

**Email HTML professionnel avec :**
- ✅ Toutes les informations du contact
- ✅ Email et téléphone cliquables
- ✅ Bouton "Voir dans Firestore"
- ✅ Bouton "Répondre par email"
- ✅ Design aux couleurs Corpros

---

## 🐛 **Problème ?**

**Email non reçu ?**
1. Vérifiez vos **spams**
2. Consultez les logs : `firebase functions:log`
3. Voir le guide complet : `EMAIL_SETUP.md`

**Erreur "Invalid login" ?**
- Utilisez un **mot de passe d'application Gmail**, pas votre mot de passe normal
- https://myaccount.google.com/apppasswords

---

## 💡 **Alternatives à Gmail**

**SendGrid (Recommandé pour production) :**
- Gratuit jusqu'à 100 emails/jour
- Plus fiable pour la délivrabilité
- Guide : voir `EMAIL_SETUP.md`

**Outlook SMTP :**
- Utilisez votre compte Outlook existant
- Guide : voir `EMAIL_SETUP.md`

---

**C'est tout ! Simple et efficace. 🎉**

Pour plus de détails → `EMAIL_SETUP.md`

