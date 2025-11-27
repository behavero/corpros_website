'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

const steps = [
  { 
    number: '01', 
    title: 'Analyse complète de l\'entreprise', 
    description: 'Audit approfondi de votre situation actuelle, de vos forces et de vos axes d\'amélioration.',
    duration: '2-3 semaines'
  },
  { 
    number: '02', 
    title: 'Diagnostic stratégique et plan d\'action', 
    description: 'Élaboration d\'une feuille de route personnalisée avec objectifs mesurables et jalons clairs.',
    duration: '1-2 semaines'
  },
  { 
    number: '03', 
    title: 'Mise en œuvre opérationnelle', 
    description: 'Accompagnement dans l\'exécution avec suivi régulier et ajustements en temps réel.',
    duration: '3-12 mois'
  },
  { 
    number: '04', 
    title: 'Rémunération sur résultats', 
    description: 'Notre rémunération est directement liée à vos résultats. Nous gagnons ensemble.',
    duration: 'Continue'
  },
];

function RoadmapStep({ step, index, isLast }: { step: typeof steps[0]; index: number; isLast: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative"
    >
      {/* Timeline Container */}
      <div className="flex gap-8 md:gap-12">
        {/* Left: Timeline with Number */}
        <div className="flex flex-col items-center flex-shrink-0">
          {/* Circle with Number */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
            className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white/30 bg-[#262626] mb-6"
          >
            <span className="text-2xl md:text-3xl font-display text-white">{step.number}</span>
            
            {/* Animated checkmark appears on hover */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-white rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <CheckCircle2 size={32} className="text-black" strokeWidth={2} />
            </motion.div>
          </motion.div>

          {/* Connecting Line */}
          {!isLast && (
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
              className="w-px bg-gradient-to-b from-white/30 via-white/10 to-white/5 flex-1 origin-top"
              style={{ minHeight: '100px' }}
            />
          )}
        </div>

        {/* Right: Content */}
        <div className="flex-1 pb-20">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
            className="border border-white/10 p-8 md:p-10 hover:border-white/20 hover:bg-white/5 transition-all duration-300 group"
          >
            <h2 className="text-2xl md:text-3xl font-display mb-4 group-hover:text-[#999999] transition-colors">
              {step.title}
            </h2>
            <p className="text-body leading-relaxed mb-6">{step.description}</p>
            
            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 pt-4 border-t border-white/10">
              <div>
                <div className="text-label mb-1">DURÉE</div>
                <div className="text-sm text-white">{step.duration}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function MethodePage() {
  return (
    <div className="container-custom pt-40 pb-40">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-massive mb-20"
      >
        Notre Méthode.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-body text-xl max-w-3xl mb-32 leading-relaxed"
      >
        Une approche structurée en 4 étapes pour transformer votre entreprise, 
        de l'analyse initiale jusqu'à la performance durable.
      </motion.p>

      {/* Roadmap Timeline */}
      <div className="max-w-5xl">
        {steps.map((step, index) => (
          <RoadmapStep 
            key={index} 
            step={step} 
            index={index} 
            isLast={index === steps.length - 1}
          />
        ))}
      </div>

      {/* FAQ Section */}
      <div className="mt-32 pt-32 border-t border-white/15">
        <h2 className="text-3xl md:text-4xl font-display mb-12 text-center">Questions fréquentes</h2>
        <FAQAccordion />
      </div>
    </div>
  );
}
