'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CircularButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function CircularButton({ href, onClick, className = '' }: CircularButtonProps) {
  const buttonClasses = `
    inline-flex items-center justify-center 
    w-12 h-12 rounded-full 
    border border-white/30 
    hover:bg-white hover:text-black hover:border-[#EFBF04]
    hover:shadow-[0_0_30px_rgba(239,191,4,0.4),0_0_60px_rgba(239,191,4,0.15)]
    transition-all duration-300
    group
    relative
    ${className}
  `;

  const icon = (
    <ArrowUpRight 
      size={20} 
      strokeWidth={1.5} 
      className="transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" 
    />
  );

  if (href) {
    return (
      <Link href={href}>
        <motion.div
          className={buttonClasses}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {icon}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={buttonClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.button>
  );
}

