'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const stories = [
  {
    client: "TechStart SAS",
    sector: "SaaS B2B",
    challenge: "Croissance stagnante après 2 ans",
    result: "+250% CA en 8 mois",
    metric: "De 500K€ à 1.75M€ de CA annuel",
  },
  {
    client: "Industrie Moderne",
    sector: "Manufacturing",
    challenge: "Marges en baisse continue",
    result: "+18 points de marge",
    metric: "De 12% à 30% de marge nette",
  },
  {
    client: "Services Pro",
    sector: "Conseil",
    challenge: "Difficulté à scaler l'équipe",
    result: "Équipe × 3 en 12 mois",
    metric: "De 8 à 24 consultants",
  },
];

export default function SuccessStories() {
  return (
    <section className="container-custom py-40 border-t border-white/15">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-display mb-6">Histoires de réussite</h2>
        <p className="text-body text-xl max-w-2xl">
          Des résultats concrets qui parlent d'eux-mêmes.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stories.map((story, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border border-white/15 p-8 hover:border-white/30 hover:bg-white/5 transition-all duration-300 group"
          >
            {/* Client & Sector */}
            <div className="mb-6 pb-6 border-b border-white/10">
              <div className="text-label mb-2">CLIENT</div>
              <div className="text-xl font-display mb-1">{story.client}</div>
              <div className="text-sm text-[#999999]">{story.sector}</div>
            </div>

            {/* Challenge */}
            <div className="mb-6">
              <div className="text-label mb-2">DÉFI</div>
              <div className="text-body">{story.challenge}</div>
            </div>

            {/* Result */}
            <div className="mb-4">
              <div className="text-label mb-2">RÉSULTAT</div>
              <div className="text-3xl font-display text-white mb-2 group-hover:text-[#22C55E] transition-colors">
                {story.result}
              </div>
              <div className="text-sm text-[#999999]">{story.metric}</div>
            </div>

            {/* Icon */}
            <div className="flex justify-end mt-6 pt-6 border-t border-white/10">
              <ArrowUpRight 
                size={24} 
                strokeWidth={1} 
                className="text-white/30 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" 
              />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center mt-12"
      >
        <p className="text-sm text-[#999999]">
          * Résultats réels obtenus avec nos clients. Les noms ont été modifiés pour respecter la confidentialité.
        </p>
      </motion.div>
    </section>
  );
}







