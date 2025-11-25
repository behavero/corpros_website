import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#262626] mt-24">
      {/* Main Footer Content */}
      <div className="border-t border-white/15">
        <div className="container-custom pt-24 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {/* Column 1: Contact */}
            <div>
              <h3 className="text-label mb-8">CONTACT</h3>
              <div className="text-body space-y-3">
                <a href="mailto:contact@corpros.fr" className="hover:text-white transition-colors block">
                  contact@corpros.fr
                </a>
                <a href="tel:+33123456789" className="hover:text-white transition-colors block">
                  +33 1 23 45 67 89
                </a>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <h3 className="text-label mb-8">NAVIGATION</h3>
              <nav className="flex flex-col gap-3">
                <Link href="/" className="text-body hover:text-white transition-colors">
                  Accueil
                </Link>
                <Link href="/profils" className="text-body hover:text-white transition-colors">
                  Nos Profils
                </Link>
                <Link href="/methode" className="text-body hover:text-white transition-colors">
                  Notre Méthode
                </Link>
                <Link href="/vision" className="text-body hover:text-white transition-colors">
                  Notre Vision
                </Link>
                <Link href="/contact" className="text-body hover:text-white transition-colors">
                  Contact
                </Link>
              </nav>
            </div>

            {/* Column 3: Engagement */}
            <div>
              <h3 className="text-label mb-8">NOTRE ENGAGEMENT</h3>
              <p className="text-body leading-relaxed">
                Accompagner la croissance, valoriser la performance.
              </p>
            </div>

            {/* Column 4: Legal + Copyright */}
            <div>
              <h3 className="text-label mb-8">LEGAL</h3>
              <div className="text-body space-y-3 mb-8">
                <Link href="/legal" className="hover:text-white transition-colors block">
                  Mentions légales
                </Link>
                <Link href="/privacy" className="hover:text-white transition-colors block">
                  Politique de confidentialité
                </Link>
              </div>
              <div className="text-label">
                © {new Date().getFullYear()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Giant Logo - Edge to Edge */}
      <div className="w-full overflow-hidden bg-[#262626]">
        <div className="w-full flex items-end justify-center" style={{ height: '180px' }}>
          <Image 
            src="/logos/logo blanc.svg" 
            alt="CORPROS GROUP" 
            width={2000} 
            height={315}
            className="w-full h-auto"
            style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
            priority={false}
          />
        </div>
      </div>
    </footer>
  );
}

