'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import CircularButton from '@/components/CircularButton';
import AnimatedCounter from '@/components/AnimatedCounter';
import SuccessStories from '@/components/SuccessStories';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Home() {
  return (
    <>
      {/* Hero Section - Massive Typography */}
      <section className="container-custom pt-40 pb-40 border-b border-white/15">
        <motion.div {...fadeIn}>
          {/* Technical Label */}
          <div className="text-label mb-16">
            ACCOMPAGNEMENT STRATÉGIQUE · CROISSANCE DURABLE · PERFORMANCE
          </div>

          {/* Massive Headline */}
          <h1 className="text-massive mb-20 max-w-6xl">
            votre succès, notre mission.
          </h1>

          {/* Circular Button */}
          <CircularButton href="/contact" />
        </motion.div>
      </section>

      {/* Stats Row with Vertical Dividers */}
      <section className="container-custom py-40 border-b border-white/15">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <motion.div {...fadeIn} transition={{ delay: 0.1 }}>
            <div className="text-5xl md:text-6xl font-display font-light mb-6 text-[#EFBF04]">
              <AnimatedCounter end={150} suffix="+" duration={2500} />
            </div>
            <div className="text-label">PROJETS ACCOMPAGNÉS</div>
          </motion.div>
          
          <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="md:border-l md:border-white/15 md:pl-16">
            <div className="text-5xl md:text-6xl font-display font-light mb-6 text-[#EFBF04]">
              <AnimatedCounter end={100} suffix="+" duration={2500} />
            </div>
            <div className="text-label">ENTREPRISES ACTIVES</div>
          </motion.div>
          
          <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="md:border-l md:border-white/15 md:pl-16">
            <div className="text-5xl md:text-6xl font-display font-light mb-6 text-[#EFBF04]">
              <AnimatedCounter end={90} suffix="%" duration={2500} />
            </div>
            <div className="text-label">TAUX DE RÉUSSITE</div>
          </motion.div>
        </div>
      </section>

      {/* Service List - Table Layout */}
      <section className="container-custom py-40 border-b border-white/15">
        <motion.h2 {...fadeIn} className="text-4xl md:text-5xl font-display mb-24">
          Service.
        </motion.h2>

        <div className="space-y-0">
          {[
            { index: '01', title: 'Nous prenons notre part de responsabilités', description: 'Si nous ne délivrons pas, vous ne payez pas. C\'est aussi simple que ça.' },
            { index: '02', title: 'Aucun investissement initial', description: 'Pas de frais d\'entrée, pas d\'engagement financier. Nous investissons dans votre réussite.' },
            { index: '03', title: 'Uniquement de la performance', description: 'Nous ne gagnons que lorsque vous gagnez. C\'est notre engagement mutuel.' },
          ].map((service, i) => (
            <ServiceRow key={i} {...service} delay={i * 0.1} />
          ))}
        </div>
      </section>

      {/* Nos Profils - Table Layout */}
      <section className="container-custom py-40 border-b border-white/15">
        <motion.h2 {...fadeIn} className="text-4xl md:text-5xl font-display mb-24">
          Nos Profils
        </motion.h2>

        <div className="space-y-0">
          {[
            { index: '01', title: 'Profil Start', subtitle: '< 1 an', href: '/profils#start' },
            { index: '02', title: 'Profil Croissance', subtitle: '1-3 ans', href: '/profils#croissance' },
            { index: '03', title: 'Profil Performance', subtitle: '+3 ans', href: '/profils#performance' },
          ].map((profile, i) => (
            <ProfileRow key={i} {...profile} delay={i * 0.1} />
          ))}
        </div>
      </section>

      {/* Giant Year Stamp Section */}
      <section className="container-custom py-40 border-b border-white/15">
        <motion.div {...fadeIn} className="flex items-center justify-between gap-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display mb-10">
              Le modèle sans risque.
            </h2>
            <p className="text-body leading-relaxed text-lg">
              Aucun engagement initial. Rémunération sur résultats. 1 + 1 = 3. Chaque client CORPROS rejoint un réseau d'entreprises partenaires.
            </p>
          </div>
          <div className="year-stamp hidden lg:block">
            © 2025
          </div>
        </motion.div>
      </section>

      {/* Success Stories Section */}
      <SuccessStories />

      {/* CTA Section */}
      <section className="container-custom py-32">
        <motion.div {...fadeIn} className="text-center">
          <h2 className="text-4xl md:text-6xl font-display mb-16">
            Rejoindre le réseau
          </h2>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 text-lg text-white hover:text-[#EFBF04] transition-all duration-300 relative group"
          >
            Contactez-nous
            <ArrowRight size={20} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#EFBF04] group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(239,191,4,0.3)]" />
          </Link>
        </motion.div>
      </section>
    </>
  );
}

function ServiceRow({ index, title, description, delay }: { index: string; title: string; description: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="table-row group cursor-pointer"
    >
      <div className="container-custom flex items-start gap-12 md:gap-20">
        <div className="text-label flex-shrink-0 w-16 pt-1">{index}</div>
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-display mb-5 group-hover:text-[#999999] transition-colors">
            {title}
          </h3>
          <p className="text-body max-w-2xl leading-relaxed">{description}</p>
        </div>
        <CircularButton className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
}

function ProfileRow({ index, title, subtitle, href, delay }: { index: string; title: string; subtitle: string; href: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="table-row group"
    >
      <Link href={href} className="container-custom flex items-center justify-between gap-12">
        <div className="flex items-center gap-12 md:gap-20 flex-1">
          <div className="text-label flex-shrink-0 w-16">{index}</div>
          <div>
            <div className="text-2xl md:text-3xl font-display group-hover:text-[#999999] transition-colors">
              {title}
            </div>
            <div className="text-label mt-4">{subtitle}</div>
          </div>
        </div>
        <CircularButton className="flex-shrink-0" />
      </Link>
    </motion.div>
  );
}
