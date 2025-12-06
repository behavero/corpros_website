'use client';

import { motion } from 'framer-motion';

export default function LegalPage() {
  return (
    <div className="container-custom pt-40 pb-40">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-massive mb-24"
      >
        Mentions Légales.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl space-y-16"
      >
        {/* Éditeur du site */}
        <section>
          <h2 className="text-3xl font-display mb-6">Éditeur du site</h2>
          <div className="text-body leading-relaxed space-y-3">
            <p><strong>Raison sociale :</strong> CORPROS GROUP</p>
            <p><strong>Forme juridique :</strong> [À compléter]</p>
            <p><strong>Capital social :</strong> [À compléter]</p>
            <p><strong>Siège social :</strong> Paris, France</p>
            <p><strong>SIRET :</strong> [À compléter]</p>
            <p><strong>Email :</strong> contact@corpros.fr</p>
            <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
          </div>
        </section>

        {/* Directeur de publication */}
        <section className="border-t border-white/15 pt-16">
          <h2 className="text-3xl font-display mb-6">Directeur de publication</h2>
          <div className="text-body leading-relaxed">
            <p>[Nom du directeur de publication] - [Fonction]</p>
          </div>
        </section>

        {/* Hébergement */}
        <section className="border-t border-white/15 pt-16">
          <h2 className="text-3xl font-display mb-6">Hébergement</h2>
          <div className="text-body leading-relaxed space-y-3">
            <p><strong>Hébergeur :</strong> Firebase Hosting (Google LLC)</p>
            <p><strong>Adresse :</strong> 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA</p>
            <p><strong>Site web :</strong> <a href="https://firebase.google.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#EFBF04] transition-colors">firebase.google.com</a></p>
          </div>
        </section>

        {/* Propriété intellectuelle */}
        <section className="border-t border-white/15 pt-16">
          <h2 className="text-3xl font-display mb-6">Propriété intellectuelle</h2>
          <div className="text-body leading-relaxed space-y-4">
            <p>
              L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, sons, logiciels, etc.) 
              est la propriété exclusive de CORPROS GROUP, à l'exception des marques, logos ou contenus appartenant 
              à d'autres sociétés partenaires ou auteurs.
            </p>
            <p>
              Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, 
              de ces différents éléments est strictement interdite sans l'accord exprès par écrit de CORPROS GROUP.
            </p>
          </div>
        </section>

        {/* Protection des données */}
        <section className="border-t border-white/15 pt-16">
          <h2 className="text-3xl font-display mb-6">Protection des données personnelles</h2>
          <div className="text-body leading-relaxed space-y-4">
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, 
              vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles 
              vous concernant.
            </p>
            <p>
              Pour exercer ces droits, veuillez nous contacter à l'adresse : contact@corpros.fr
            </p>
            <p>
              Pour plus d'informations, consultez notre{' '}
              <a href="/privacy" className="underline hover:text-[#EFBF04] transition-colors">
                Politique de confidentialité
              </a>.
            </p>
          </div>
        </section>

        {/* Cookies */}
        <section className="border-t border-white/15 pt-16">
          <h2 className="text-3xl font-display mb-6">Cookies</h2>
          <div className="text-body leading-relaxed space-y-4">
            <p>
              Ce site utilise Firebase Analytics pour mesurer l'audience et améliorer nos services. 
              Ces cookies ne collectent que des données anonymisées.
            </p>
            <p>
              Vous pouvez désactiver les cookies dans les paramètres de votre navigateur.
            </p>
          </div>
        </section>

        {/* Responsabilité */}
        <section className="border-t border-white/15 pt-16">
          <h2 className="text-3xl font-display mb-6">Limitation de responsabilité</h2>
          <div className="text-body leading-relaxed space-y-4">
            <p>
              CORPROS GROUP s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site, 
              dont elle se réserve le droit de corriger le contenu à tout moment et sans préavis.
            </p>
            <p>
              Toutefois, CORPROS GROUP ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations 
              mises à disposition sur ce site.
            </p>
          </div>
        </section>

        {/* Droit applicable */}
        <section className="border-t border-white/15 pt-16">
          <h2 className="text-3xl font-display mb-6">Droit applicable</h2>
          <div className="text-body leading-relaxed">
            <p>
              Les présentes mentions légales sont régies par le droit français. 
              En cas de litige, les tribunaux français seront seuls compétents.
            </p>
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





