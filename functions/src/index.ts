import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';

admin.initializeApp();

// Configuration email (constants)
const EMAIL_TO = 'gtmt@outlook.fr';

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
 * Envoie un email de notification et optionnellement des notifications Teams/Trello
 */
export const onNewLead = functions.firestore
  .document('leads/{leadId}')
  .onCreate(async (snap, context) => {
    const lead = snap.data() as LeadData;
    const leadId = context.params.leadId;
    
    console.log(`📨 Nouveau lead reçu: ${lead.firstName} ${lead.lastName} (${lead.company})`);

    // Load Firebase config at runtime
    const config = functions.config();
    const EMAIL_FROM = config.email?.from || 'noreply@corpros-ff144.firebaseapp.com';
    const SMTP_HOST = config.smtp?.host;
    const SMTP_PORT = config.smtp?.port || '587';
    const SMTP_USER = config.smtp?.user;
    const SMTP_PASS = config.smtp?.pass;
    const TEAMS_WEBHOOK_URL = config.teams?.webhook;
    const TRELLO_WEBHOOK_URL = config.trello?.webhook;

    console.log(`🔧 Config chargée - SMTP User: ${SMTP_USER ? 'Configured' : 'Missing'}`);

    const promises: Promise<void>[] = [];

    // ========================================
    // 1. ENVOI EMAIL (PRIORITAIRE)
    // ========================================
    
    // Créer le transporteur email
    let transporter;
    
    if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
      // Configuration SMTP personnalisée
      transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: parseInt(SMTP_PORT),
        secure: SMTP_PORT === '465',
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      });
    } else {
      // Utiliser Gmail par défaut (nécessite mot de passe d'application)
      console.warn('⚠️  Configuration SMTP manquante, utilisation de la configuration par défaut');
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: SMTP_USER || 'your-email@gmail.com',
          pass: SMTP_PASS || 'your-app-password',
        },
      });
    }

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; background: #f5f5f5; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
    .header { background: #262626; color: white; padding: 30px; text-align: center; }
    .header h1 { margin: 0; font-size: 24px; font-weight: 400; }
    .highlight { color: #EFBF04; }
    .content { padding: 30px; }
    .section { margin-bottom: 25px; }
    .section-title { font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #999; margin-bottom: 10px; font-weight: 600; }
    .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
    .info-item { padding: 15px; background: #f9f9f9; border-left: 3px solid #EFBF04; }
    .info-label { font-size: 12px; color: #999; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
    .info-value { font-size: 16px; color: #262626; font-weight: 500; }
    .message-box { background: #f9f9f9; padding: 20px; border-left: 3px solid #EFBF04; margin-top: 20px; }
    .message-box p { margin: 0; white-space: pre-wrap; }
    .footer { background: #262626; color: #999; padding: 20px; text-align: center; font-size: 12px; }
    .button { display: inline-block; padding: 12px 30px; background: #EFBF04; color: #262626; text-decoration: none; border-radius: 4px; margin: 10px 5px; font-weight: 600; }
    .meta { font-size: 11px; color: #999; margin-top: 10px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎯 Nouveau Contact <span class="highlight">Corpros</span></h1>
    </div>
    
    <div class="content">
      <div class="section">
        <div class="section-title">Contact</div>
        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">Nom complet</div>
            <div class="info-value">${lead.firstName} ${lead.lastName}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Entreprise</div>
            <div class="info-value">${lead.company}</div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Coordonnées</div>
        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">📧 Email</div>
            <div class="info-value"><a href="mailto:${lead.email}" style="color: #262626;">${lead.email}</a></div>
          </div>
          <div class="info-item">
            <div class="info-label">📱 Téléphone</div>
            <div class="info-value">${lead.phone || 'Non renseigné'}</div>
          </div>
          <div class="info-item">
            <div class="info-label">📍 Ville</div>
            <div class="info-value">${lead.city}</div>
          </div>
          <div class="info-item">
            <div class="info-label">👥 Taille</div>
            <div class="info-value">${lead.companySize} employés</div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Profil & Besoin</div>
        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">🎯 Profil souhaité</div>
            <div class="info-value">${lead.profile}</div>
          </div>
          <div class="info-item">
            <div class="info-label">❓ Besoin spécifique</div>
            <div class="info-value">${lead.conditionalField}</div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">💬 Message</div>
        <div class="message-box">
          <p>${lead.message}</p>
        </div>
      </div>

      <div style="text-align: center; margin-top: 30px;">
        <a href="https://console.firebase.google.com/project/corpros-ff144/firestore/data/leads/${leadId}" class="button">📊 Voir dans Firestore</a>
        <a href="mailto:${lead.email}?subject=Re: Votre demande de contact Corpros" class="button">📧 Répondre</a>
      </div>

      <div class="meta">
        <strong>Lead ID:</strong> ${leadId}<br>
        <strong>Date:</strong> ${new Date(lead.submittedAt).toLocaleString('fr-FR', { dateStyle: 'full', timeStyle: 'long' })}
      </div>
    </div>

    <div class="footer">
      Corpros Group - Système de notification automatique<br>
      Ce lead a été automatiquement enregistré dans Firestore
    </div>
  </div>
</body>
</html>
    `;

    const emailText = `
NOUVEAU CONTACT CORPROS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTACT
Nom: ${lead.firstName} ${lead.lastName}
Entreprise: ${lead.company}

COORDONNÉES
Email: ${lead.email}
Téléphone: ${lead.phone || 'Non renseigné'}
Ville: ${lead.city}
Taille: ${lead.companySize} employés

PROFIL & BESOIN
Profil souhaité: ${lead.profile}
Besoin spécifique: ${lead.conditionalField}

MESSAGE
${lead.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Lead ID: ${leadId}
Date: ${new Date(lead.submittedAt).toLocaleString('fr-FR')}

Voir dans Firestore: https://console.firebase.google.com/project/corpros-ff144/firestore/data/leads/${leadId}
    `;

    console.log('📤 Envoi de l\'email de notification...');
    promises.push(
      transporter.sendMail({
        from: `"Corpros Notifications" <${EMAIL_FROM}>`,
        to: EMAIL_TO,
        subject: `🎯 Nouveau lead: ${lead.firstName} ${lead.lastName} - ${lead.company}`,
        text: emailText,
        html: emailHtml,
      })
      .then(() => {
        console.log(`✅ Email envoyé avec succès à ${EMAIL_TO}`);
      })
      .catch((error: Error) => {
        console.error('❌ Erreur lors de l\'envoi de l\'email:', error);
        // Ne pas bloquer les autres notifications si l'email échoue
      })
    );

    // ========================================
    // 2. NOTIFICATIONS TEAMS/TRELLO (OPTIONNEL)
    // ========================================

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

