'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import CircularButton from '@/components/CircularButton';

const profiles = {
  start: {
    id: 'start',
    title: 'Profil Start',
    subtitle: '< 1 an',
    description: 'Lancer, structurer et positionner efficacement votre activité.',
    focus: [
      { title: 'Stratégie', content: 'Définition de votre positionnement marché et élaboration de votre roadmap stratégique.' },
      { title: 'Structure', content: 'Mise en place des processus opérationnels et organisationnels essentiels.' },
      { title: 'Premiers Clients', content: 'Développement commercial ciblé pour acquérir vos premiers clients stratégiques.' },
    ],
  },
  croissance: {
    id: 'croissance',
    title: 'Profil Croissance',
    subtitle: '1-3 ans',
    description: 'Booster votre développement commercial et renforcer vos marges.',
    focus: [
      { title: 'Commercial', content: 'Accélération de votre développement commercial et optimisation de votre pipeline.' },
      { title: 'Marges', content: 'Amélioration de votre rentabilité et optimisation de votre structure de coûts.' },
      { title: 'Organisation & RH', content: 'Renforcement de votre équipe et structuration de votre organisation.' },
    ],
  },
  performance: {
    id: 'performance',
    title: 'Profil Performance',
    subtitle: '+3 ans',
    description: 'Optimiser votre rentabilité et accélérer votre expansion.',
    focus: [
      { title: 'Rentabilité', content: 'Optimisation financière et maximisation de votre performance opérationnelle.' },
      { title: 'Expansion', content: 'Stratégies de croissance accélérée et développement de nouveaux marchés.' },
      { title: 'Optimisation', content: 'Fine-tuning de tous les leviers pour une performance maximale.' },
    ],
  },
};

export default function ProfilsPage() {
  const [activeTab, setActiveTab] = useState<'start' | 'croissance' | 'performance'>('start');
  const activeProfile = profiles[activeTab];
  const contentRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (profileId: 'start' | 'croissance' | 'performance') => {
    setActiveTab(profileId);
    
    // Smooth scroll to content after a short delay to allow state update
    setTimeout(() => {
      if (contentRef.current) {
        const offsetTop = contentRef.current.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <div className="container-custom pt-40 pb-40">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-massive mb-24"
      >
        nos profils.
      </motion.h1>

      {/* Tabs - Table Style */}
      <div className="border-t border-b border-white/15 mb-24">
        {Object.values(profiles).map((profile) => (
          <button
            key={profile.id}
            onClick={() => handleTabClick(profile.id as typeof activeTab)}
            className={`w-full text-left py-10 px-8 border-b border-white/15 last:border-0 transition-all ${
              activeTab === profile.id ? 'bg-white/5' : 'hover:bg-white/5'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-display mb-3">{profile.title}</div>
                <div className="text-label">{profile.subtitle}</div>
              </div>
              {activeTab === profile.id && <div className="w-2 h-2 rounded-full bg-[#22C55E]" />}
            </div>
          </button>
        ))}
      </div>

      {/* Active Profile Content */}
      <motion.div
        ref={contentRef}
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl"
      >
        <h2 className="text-4xl md:text-5xl font-display mb-10">{activeProfile.title}</h2>
        <p className="text-body text-xl mb-20 leading-relaxed">{activeProfile.description}</p>

        <div className="space-y-16">
          {activeProfile.focus.map((item, index) => (
            <div key={index} className="border-t border-white/15 pt-16">
              <h3 className="text-2xl font-display mb-6">{item.title}</h3>
              <p className="text-body leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <CircularButton href="/contact" />
        </div>
      </motion.div>
    </div>
  );
}
