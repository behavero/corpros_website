import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

// Configuration des webhooks
// À configurer via Firebase Console > Functions > Environment Variables
// ou via: firebase functions:config:set teams.webhook="URL" trello.webhook="URL"
const TEAMS_WEBHOOK_URL = process.env.TEAMS_WEBHOOK_URL;
const TRELLO_WEBHOOK_URL = process.env.TRELLO_WEBHOOK_URL;

interface LeadData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone?: string;
  city: string;
  companySize: string;
  profile: string;
  conditionalField: string;
  message: string;
  submittedAt: string;
}

/**
 * Fonction déclenchée automatiquement quand un nouveau lead est créé dans Firestore
 * Envoie des notifications à Teams et Trello
 */
export const onNewLead = functions.firestore
  .document('leads/{leadId}')
  .onCreate(async (snap, context) => {
    const lead = snap.data() as LeadData;
    const leadId = context.params.leadId;
    
    console.log(`📨 Nouveau lead reçu: ${lead.firstName} ${lead.lastName} (${lead.company})`);

    // Message formaté pour Microsoft Teams
    const teamsMessage = {
      "@type": "MessageCard",
      "@context": "https://schema.org/extensions",
      "summary": `Nouveau lead: ${lead.firstName} ${lead.lastName}`,
      "themeColor": "EFBF04",
      "title": "🎯 Nouveau Contact Corpros",
      "sections": [{
        "activityTitle": `**${lead.firstName} ${lead.lastName}**`,
        "activitySubtitle": lead.company,
        "activityImage": "https://corpros-ff144.web.app/logos/favicon/apple-touch-icon.png",
        "facts": [
          { "name": "📧 Email", "value": lead.email },
          { "name": "📱 Téléphone", "value": lead.phone || "Non renseigné" },
          { "name": "📍 Ville", "value": lead.city },
          { "name": "👥 Taille", "value": lead.companySize },
          { "name": "🎯 Profil", "value": lead.profile },
          { "name": "❓ Besoin", "value": lead.conditionalField },
          { "name": "💬 Message", "value": lead.message.substring(0, 100) + (lead.message.length > 100 ? '...' : '') }
        ],
        "text": `**Message complet:**\n\n${lead.message}`
      }],
      "potentialAction": [{
        "@type": "OpenUri",
        "name": "📊 Voir dans Firestore",
        "targets": [{
          "os": "default",
          "uri": `https://console.firebase.google.com/project/corpros-ff144/firestore/data/leads/${leadId}`
        }]
      }, {
        "@type": "OpenUri",
        "name": "📧 Répondre par email",
        "targets": [{
          "os": "default",
          "uri": `mailto:${lead.email}?subject=Re: Votre demande de contact Corpros`
        }]
      }]
    };

    const promises: Promise<void>[] = [];

    // Envoyer notification à Microsoft Teams
    if (TEAMS_WEBHOOK_URL) {
      console.log('📤 Envoi de la notification Teams...');
      promises.push(
        fetch(TEAMS_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(teamsMessage)
        })
        .then(response => {
          if (response.ok) {
            console.log('✅ Notification Teams envoyée avec succès');
          } else {
            console.error('❌ Erreur Teams:', response.status, response.statusText);
          }
        })
        .catch(error => {
          console.error('❌ Erreur lors de l\'envoi Teams:', error);
        })
      );
    } else {
      console.warn('⚠️  TEAMS_WEBHOOK_URL non configuré');
    }

    // Envoyer notification à Trello (via webhook personnalisé ou Zapier/Make)
    if (TRELLO_WEBHOOK_URL) {
      console.log('📤 Envoi de la notification Trello...');
      const trelloPayload = {
        name: `${lead.firstName} ${lead.lastName} - ${lead.company}`,
        desc: `**Contact Information:**
- Email: ${lead.email}
- Téléphone: ${lead.phone || "Non renseigné"}
- Ville: ${lead.city}
- Taille entreprise: ${lead.companySize}
- Profil souhaité: ${lead.profile}
- Besoin spécifique: ${lead.conditionalField}

**Message:**
${lead.message}

---
Soumis le: ${new Date(lead.submittedAt).toLocaleString('fr-FR')}
Lead ID: ${leadId}`,
        labels: lead.profile,
        source: 'Corpros Website',
        submittedAt: lead.submittedAt
      };

      promises.push(
        fetch(TRELLO_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(trelloPayload)
        })
        .then(response => {
          if (response.ok) {
            console.log('✅ Notification Trello envoyée avec succès');
          } else {
            console.error('❌ Erreur Trello:', response.status, response.statusText);
          }
        })
        .catch(error => {
          console.error('❌ Erreur lors de l\'envoi Trello:', error);
        })
      );
    } else {
      console.warn('⚠️  TRELLO_WEBHOOK_URL non configuré');
    }

    // Attendre que toutes les notifications soient envoyées
    await Promise.all(promises);
    
    console.log('✨ Traitement du lead terminé');
    return null;
  });

/**
 * Fonction de test pour envoyer une notification test
 * Usage: curl -X POST https://REGION-PROJECT.cloudfunctions.net/sendTestNotification
 */
export const sendTestNotification = functions.https.onRequest(async (req, res) => {
  const testLead: LeadData = {
    firstName: "Jean",
    lastName: "Dupont",
    company: "Test Corp",
    email: "test@example.com",
    phone: "+33 6 12 34 56 78",
    city: "Paris",
    companySize: "21-50",
    profile: "Croissance",
    conditionalField: "Optimiser les marges",
    message: "Ceci est un message de test pour vérifier que les notifications fonctionnent correctement.",
    submittedAt: new Date().toISOString()
  };

  console.log('🧪 Envoi d\'une notification de test...');

  try {
    // Créer un document de test dans Firestore
    const docRef = await admin.firestore().collection('leads').add({
      ...testLead,
      isTest: true
    });

    res.status(200).json({ 
      success: true, 
      message: 'Notification de test envoyée',
      leadId: docRef.id
    });
  } catch (error) {
    console.error('Erreur lors du test:', error);
    res.status(500).json({ 
      success: false, 
      error: String(error)
    });
  }
});

