'use client';

import { motion } from 'framer-motion';

const values = [
  { title: 'Performance', description: 'Excellence opérationnelle et résultats mesurables.' },
  { title: 'Transparence', description: 'Communication claire et honnête à chaque étape.' },
  { title: 'Collaboration', description: 'Partnership véritable où nous avançons ensemble.' },
  { title: 'Excellence', description: 'Recherche constante de la meilleure solution.' },
];

export default function VisionPage() {
  return (
    <div className="container-custom pt-40 pb-40">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-massive mb-24"
      >
        notre vision.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl mb-32"
      >
        <p className="text-body text-xl md:text-2xl leading-relaxed mb-16">
          Construire un écosystème d'entreprises performantes. 1+1=3, puis 5, puis 10...
        </p>
        <p className="text-body text-lg leading-relaxed">
          Notre vision est de créer un réseau d'entreprises qui se renforcent mutuellement, partagent leurs expériences et accélèrent ensemble leur croissance. Chaque client CORPROS devient partie intégrante d'un écosystème où la réussite de l'un profite à tous.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-white/15">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="border-b border-white/15 md:border-r md:last:border-r-0 md:odd:border-r p-16 hover:bg-white/5 transition-all"
          >
            <div className="text-label mb-6">0{index + 1}</div>
            <h3 className="text-2xl font-display mb-6">{value.title}</h3>
            <p className="text-body leading-relaxed">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
