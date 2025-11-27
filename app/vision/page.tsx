'use client';

import { motion } from 'framer-motion';

const values = [
  { 
    title: 'Performance', 
    description: 'Résultats mesurables et excellence opérationnelle. Chaque action est orientée vers votre croissance concrète.',
    icon: '01'
  },
  { 
    title: 'Transparence', 
    description: 'Communication directe et honnête. Vous savez toujours où nous en sommes et pourquoi.',
    icon: '02'
  },
  { 
    title: 'Alignement', 
    description: 'Notre rémunération sur résultats garantit que nous gagnons uniquement quand vous gagnez.',
    icon: '03'
  },
  { 
    title: 'Expertise', 
    description: 'Des décennies d\'expérience au service de votre entreprise. Nous savons ce qui fonctionne.',
    icon: '04'
  },
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
        className="max-w-5xl mb-32"
      >
        <p className="text-body text-2xl md:text-4xl font-display leading-tight mb-20">
          Révéler le potentiel de chaque entreprise. Construire un réseau où 1+1=3.
        </p>
        <div className="grid md:grid-cols-2 gap-12 text-body text-lg leading-relaxed">
          <div>
            <p className="mb-6">
              Nous ne croyons pas aux solutions universelles. Chaque entreprise est unique, avec son histoire, ses défis et son potentiel propre.
            </p>
            <p>
              Notre mission est de révéler ce potentiel en construisant avec vous une stratégie sur mesure, concrète et réalisable.
            </p>
          </div>
          <div>
            <p className="mb-6">
              Au-delà de l'accompagnement individuel, nous créons un écosystème d'entreprises performantes qui se renforcent mutuellement.
            </p>
            <p>
              Quand vous rejoignez CORPROS, vous intégrez un réseau où les succès se multiplient et où chacun accélère la croissance des autres.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-white/15">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="border-b border-white/15 md:border-r md:last:border-r-0 md:odd:border-r p-16 hover:bg-white/5 hover:border-[#EFBF04]/30 transition-all group"
          >
            <div className="text-label mb-8 text-[#EFBF04]">{value.icon}</div>
            <h3 className="text-3xl font-display mb-6 group-hover:text-white transition-colors">{value.title}</h3>
            <p className="text-body leading-relaxed text-lg">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
