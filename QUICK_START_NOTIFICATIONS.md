# ⚡ Quick Start - Notifications en 5 minutes

## 🎯 **Ce dont vous avez besoin**

1. Un canal Microsoft Teams
2. (Optionnel) Un compte Zapier gratuit pour Trello

---

## 📋 **3 Commandes pour tout activer**

### **1️⃣ Configurer le webhook Teams**

Récupérez votre URL Teams (voir ci-dessous), puis :

```bash
firebase functions:config:set teams.webhook="VOTRE_URL_TEAMS"
```

### **2️⃣ (Optionnel) Configurer Trello**

```bash
firebase functions:config:set trello.webhook="VOTRE_URL_ZAPIER"
```

### **3️⃣ Déployer**

```bash
firebase deploy --only functions
```

**C'est tout ! 🎉**

---

## 🔗 **Obtenir l'URL Teams**

1. Teams → Votre canal → **`•••`** → **Manage channel** → **Connectors**
2. Cherchez **"Incoming Webhook"**
3. **Configure** → Nom: "Corpros Leads" → **Create**
4. **Copiez l'URL** (elle ressemble à `https://outlook.office.com/webhook/...`)
5. **Done**

---

## 🧪 **Tester**

```bash
# Option 1: Formulaire web
https://corpros-ff144.web.app/contact

# Option 2: Test automatique
curl -X POST https://us-central1-corpros-ff144.cloudfunctions.net/sendTestNotification
```

---

## 📖 **Documentation Complète**

Pour plus de détails, consultez : `NOTIFICATIONS_SETUP.md`

---

**Questions ? Tout est dans `/functions/README.md` et `NOTIFICATIONS_SETUP.md` !**

