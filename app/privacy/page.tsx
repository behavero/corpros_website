'use client';

import { motion } from 'framer-motion';

export default function PrivacyPage() {
  return (
    <div className="container-custom pt-40 pb-40">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-massive mb-24"
      >
        Politique de Confidentialité.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl space-y-16"
      >
        {/* Introduction */}
        <section>
          <h2 className="text-3xl font-display mb-6">Introduction</h2>
          <div className="text-body leading-relaxed space-y-4">
            <p>
              CORPROS GROUP accorde une grande importance à la protection de vos données personnelles. 
              Cette politique de confidentialité explique quelles données nous collectons, pourquoi nous les collectons, 
              comment nous les utilisons et quels sont vos droits.
            </p>
            <p>
              Cette politique est conforme au Règlement Général sur la Protection des Données (RGPD) 
              et à la loi Informatique et Libertés.
            </p>
          </div>
        </section>

        {/* Données collectées */}
        <section className="border-t border-white/15 pt-16">
          <h2 className="text-3xl font-display mb-6">Données collectées</h2>
          <div className="text-body leading-relaxed space-y-4">
            <p>
              Dans le cadre de l'utilisation de notre site et de nos services, nous sommes amenés à collecter 
              les données personnelles suivantes :
            </p>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="text-xl font-display mb-3 text-white">Formulaire de contact</h3>
                <ul className="list-disc list-inside space-y-2 text-[#999999]">
                  <li>Prénom et nom</li>
                  <li>Nom de l'entreprise</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone (optionnel)</li>
                  <li>Ville</li>
                  <li>Taille de l'entreprise</li>
                  <li>Profil souhaité</li>
                  <li>Message</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-display mb-3 text-white">Données de navigation</h3>
                <ul className="list-disc list-inside space-y-2 text-[#999999]">
                  <li>Adresse IP</li>
                  <li>Pages visitées</li>
                  <li>Durée de visite</li>
                  <li>Type de navigateur</li>
                  <li>Système d'exploitation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Finalité du traitement */}
        <section className="border-t border-white/15 pt-16">
          <h2 className="text-3xl font-display mb-6">Finalité du traitement</h2>
          <div className="text-body leading-relaxed space-y-4">
            <p>Les données personnelles que nous collectons sont utilisées pour :</p>
            <ul className="list-disc list-inside space-y-2 text-[#999999] ml-4">
              <li>Répondre à vos demandes de contact et d'information</li>
              <li>Vous proposer des services adaptés à votre profil d'entreprise</li>
              <li>Améliorer notre site web et nos services</li>
              <li>Réaliser des analyses statistiques anonymisées</li>
              <li>Vous envoyer des communications commerciales (avec votre consentement)</li>
            </ul>
          </div>
        </section>

        {/* Base légale */}
        <section className="border-t border-white/15 pt-16">
          <h2 className="text-3xl font-display mb-6">Base légale du traitement</h2>
          <div className="text-body leading-relaxed space-y-4">
            <p>Le traitement de vos données personnelles repose sur :</p>
            <ul className="list-disc list-inside space-y-2 text-[#999999] ml-4">
              <li><strong>Votre consentement</strong> pour les communications commerciales</li>
              <li><strong>L'exécution d'un contrat</strong> ou de mesures précontractuelles</li>
              <li><strong>Notre intérêt légitime</strong> pour l'amélioration de nos services</li>
              <li><strong>Le respect d'obligations légales</strong></li>
            </ul>
          </div>
        </section>

        {/* Destinataires des données */}
        <section className="border-t border-white/15 pt-16">
          <h2 className="text-3xl font-display mb-6">Destinataires des données</h2>
          <div className="text-body leading-relaxed space-y-4">
            <p>Vos données personnelles sont destinées :</p>
            <ul className="list-disc list-inside space-y-2 text-[#999999] ml-4">
              <li>À l'équipe CORPROS GROUP pour le traitement de votre demande</li>
              <li>À nos prestataires techniques (hébergement, analytics) qui agissent en tant que sous-traitants</li>
            </ul>
            <p className="mt-4">
              Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers 
              à des fins commerciales.
            </p>
          </div>
        </section>

        {/* Durée de conservation */}
        <section className="border-t border-white/15 pt-16">
          <h2 className="text-3xl font-display mb-6">Durée de conservation</h2>
          <div className="text-body leading-relaxed space-y-4">
            <p>Vos données sont conservées pour les durées suivantes :</p>
            <ul className="list-disc list-inside space-y-2 text-[#999999] ml-4">
              <li><strong>Formulaire de contact :</strong> 3 ans à compter du dernier contact</li>
              <li><strong>Données analytiques :</strong> 14 mois maximum</li>
              <li><strong>Clients actifs :</strong> Durée de la relation commerciale + 5 ans</li>
            </ul>
          </div>
        </section>

        {/* Vos droits */}
        <section className="border-t border-white/15 pt-16">
          <h2 className="text-3xl font-display mb-6">Vos droits</h2>
          <div className="text-body leading-relaxed space-y-4">
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc list-inside space-y-2 text-[#999999] ml-4">
              <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
              <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
              <li><strong>Droit à l'effacement :</strong> supprimer vos données dans certains cas</li>
              <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
              <li><strong>Droit d'opposition :</strong> vous opposer au traitement pour des raisons légitimes</li>
              <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
              <li><strong>Droit de retirer votre consentement :</strong> à tout moment</li>
            </ul>
            <p className="mt-6">
              Pour exercer ces droits, contactez-nous à : <strong>contact@corpros.fr</strong>
            </p>
            <p>
              Vous disposez également du droit d'introduire une réclamation auprès de la CNIL 
              (Commission Nationale de l'Informatique et des Libertés).
            </p>
          </div>
        </section>

        {/* Sécurité */}
        <section className="border-t border-white/15 pt-16">
          <h2 className="text-3xl font-display mb-6">Sécurité des données</h2>
          <div className="text-body leading-relaxed space-y-4">
            <p>
              Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées 
              pour protéger vos données contre la destruction, la perte, l'altération, la divulgation 
              non autorisée ou l'accès accidentel ou illicite.
            </p>
            <p>Nos mesures de sécurité incluent :</p>
            <ul className="list-disc list-inside space-y-2 text-[#999999] ml-4">
              <li>Chiffrement des données sensibles (SSL/TLS)</li>
              <li>Hébergement sécurisé sur Firebase (Google Cloud)</li>
              <li>Accès restreint aux données personnelles</li>
              <li>Sauvegardes régulières</li>
            </ul>
          </div>
        </section>

        {/* Cookies */}
        <section className="border-t border-white/15 pt-16">
          <h2 className="text-3xl font-display mb-6">Cookies et technologies similaires</h2>
          <div className="text-body leading-relaxed space-y-4">
            <p>
              Notre site utilise Firebase Analytics pour mesurer l'audience et améliorer nos services.
            </p>
            <p>Ces cookies collectent des données anonymisées sur :</p>
            <ul className="list-disc list-inside space-y-2 text-[#999999] ml-4">
              <li>Les pages visitées</li>
              <li>La durée de visite</li>
              <li>Les sources de trafic</li>
            </ul>
            <p className="mt-4">
              Vous pouvez désactiver les cookies dans les paramètres de votre navigateur, 
              mais cela pourrait affecter certaines fonctionnalités du site.
            </p>
          </div>
        </section>

        {/* Transferts internationaux */}
        <section className="border-t border-white/15 pt-16">
          <h2 className="text-3xl font-display mb-6">Transferts internationaux</h2>
          <div className="text-body leading-relaxed space-y-4">
            <p>
              Vos données peuvent être transférées et stockées sur des serveurs situés en dehors de l'Union Européenne, 
              notamment via Firebase (Google Cloud).
            </p>
            <p>
              Ces transferts sont encadrés par des garanties appropriées conformément au RGPD 
              (clauses contractuelles types, Privacy Shield, etc.).
            </p>
          </div>
        </section>

        {/* Modifications */}
        <section className="border-t border-white/15 pt-16">
          <h2 className="text-3xl font-display mb-6">Modifications de la politique</h2>
          <div className="text-body leading-relaxed">
            <p>
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
              Toute modification sera publiée sur cette page avec une date de mise à jour.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="border-t border-white/15 pt-16">
          <h2 className="text-3xl font-display mb-6">Contact</h2>
          <div className="text-body leading-relaxed space-y-3">
            <p>Pour toute question concernant cette politique de confidentialité, contactez-nous :</p>
            <p><strong>Email :</strong> contact@corpros.fr</p>
            <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
            <p><strong>Adresse :</strong> Paris, France</p>
          </div>
        </section>

        {/* Date de mise à jour */}
        <section className="border-t border-white/15 pt-16">
          <div className="text-label">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </section>
      </motion.div>
    </div>
  );
}


