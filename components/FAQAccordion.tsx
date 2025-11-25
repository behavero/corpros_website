'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Comment fonctionne la rémunération sur résultats ?",
    answer: "Notre rémunération est directement liée à l'atteinte des objectifs définis ensemble. Nous ne gagnons que lorsque vous atteignez vos résultats, garantissant ainsi un parfait alignement de nos intérêts."
  },
  {
    question: "Quel est le délai pour voir les premiers résultats ?",
    answer: "Les premiers résultats sont généralement visibles dès les 2-3 premiers mois. Cependant, la transformation profonde et durable d'une entreprise s'inscrit dans une relation de 6 à 12 mois minimum."
  },
  {
    question: "Quel est votre taux de réussite ?",
    answer: "Nous affichons un taux de réussite de plus de 90% sur l'ensemble de nos missions. Ce succès repose sur notre approche rigoureuse et notre engagement total aux côtés de nos clients."
  },
  {
    question: "Travaillez-vous avec tous les secteurs d'activité ?",
    answer: "Oui, notre méthodologie s'adapte à tous les secteurs. Nous avons accompagné avec succès des entreprises dans la tech, l'industrie, les services, et bien d'autres domaines."
  },
  {
    question: "Y a-t-il un engagement de durée minimum ?",
    answer: "Nous recommandons un engagement minimum de 6 mois pour permettre une transformation significative. Cependant, la durée réelle dépend de vos objectifs et sera définie ensemble lors du diagnostic initial."
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`border transition-all duration-300 ${
              openIndex === index 
                ? 'border-[#EFBF04]/50 shadow-[0_0_15px_rgba(239,191,4,0.1)]' 
                : 'border-white/15 hover:border-white/30'
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
            >
              <span className={`text-lg md:text-xl font-display pr-4 transition-colors ${
                openIndex === index ? 'text-[#EFBF04]' : 'group-hover:text-[#999999]'
              }`}>
                {faq.question}
              </span>
              <div className="flex-shrink-0">
                {openIndex === index ? (
                  <Minus size={24} strokeWidth={1} className="text-[#EFBF04]" />
                ) : (
                  <Plus size={24} strokeWidth={1} className="text-white/50 group-hover:text-white transition-colors" />
                )}
              </div>
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-white/10">
                    <p className="text-body leading-relaxed pt-4">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}


