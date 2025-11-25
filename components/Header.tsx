'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/profils', label: 'Nos Profils' },
    { href: '/methode', label: 'Notre Méthode' },
    { href: '/vision', label: 'Notre Vision' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#262626]/90 backdrop-blur-sm">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image 
                src="/logos/logo blanc.svg" 
                alt="CORPROS GROUP" 
                width={180} 
                height={28}
                priority
                className="h-7 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs uppercase tracking-[0.2em] relative group transition-colors"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#EFBF04] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
              <Link
                href="/contact"
                className="px-6 py-2 border border-white/20 hover:bg-white hover:text-black hover:border-[#EFBF04] hover:shadow-[0_0_15px_rgba(239,191,4,0.2)] transition-all text-xs uppercase tracking-[0.2em]"
              >
                Contactez-nous
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
            </button>
          </div>
        </div>
        <div className="hairline-divider" />
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed left-0 top-0 bottom-0 w-[85%] max-w-sm bg-[#262626] z-50 md:hidden overflow-y-auto"
            >
              <div className="p-8 pt-24">
                <nav className="flex flex-col space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: index * 0.08,
                        type: 'spring',
                        stiffness: 300,
                        damping: 24
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-4 text-2xl font-display hover:text-[#999999] transition-colors border-b border-white/10"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navLinks.length * 0.08 + 0.1 }}
                    className="pt-8"
                  >
                    <Link
                      href="/contact"
                      onClick={() => setIsMenuOpen(false)}
                      className="inline-block px-8 py-4 border border-white/30 hover:bg-white hover:text-black hover:border-[#EFBF04] transition-all text-xs uppercase tracking-[0.2em]"
                    >
                      Contactez-nous
                    </Link>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

