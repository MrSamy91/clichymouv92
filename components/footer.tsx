'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { HiHome, HiUserGroup, HiClipboardDocumentList, HiPhone, HiInformationCircle, HiEnvelope, HiMapPin, HiUsers } from 'react-icons/hi2';

export default function Footer() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: '/', label: 'Accueil', icon: HiHome },
    { href: '/partners', label: 'Partenaires', icon: HiUserGroup },
    { href: '/adherants', label: 'Adhérents', icon: HiUsers },
    { href: '/projets', label: 'Projets', icon: HiClipboardDocumentList },
    { href: '/contact', label: 'Contact', icon: HiPhone },
    { href: '/about', label: 'À propos', icon: HiInformationCircle }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="!bg-black/0 text-white py-8 mt-16 md:ml-25 border-t border-white/20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <Link href="/" className="block mb-4">
              <Image
                src="/logo-clichy-mouv2.webp"
                alt="ClichyMouv"
                width={150}
                height={60}
                className="h-16 w-auto"
              />
            </Link>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <HiMapPin className="text-lg" />
                <span className="text-sm">Clichy-la-Garenne, 92110</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <HiEnvelope className="text-lg" />
                <span className="text-sm">contact@ClichyMouv.fr</span>
              </div>
            </div>
          </div>

          {/* Navigation rapide */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`${
                        isActive(link.href)
                          ? 'text-white font-semibold'
                          : 'text-gray-300 hover:text-white'
                      } transition-colors flex items-center gap-2 text-sm`}
                    >
                      <IconComponent className="text-base" />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Informations utiles */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Informations</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Nous contacter
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-white transition-colors">
                  Devenir partenaire
                </Link>
              </li>
              <li>
                <Link href="/projets" className="hover:text-white transition-colors">
                  Nos projets
                </Link>
              </li>
              
            </ul>
          </div>
        </div>

        {/* Barre de copyright */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-white text-sm">
                &copy; {currentYear} ClichyMouv. Tous droits réservés.
              </p>
            </div>
              {/* Signature développeur */}
              <p className="text-xs text-gray-400">
                Développement web par{' '}
                <a 
                  href="https://samy-dev.fr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
                >
                  Samy Ajouid
                </a>
                {' • '} 
                <span className="text-gray-500">Développeur Full-Stack</span>
              </p>
            <div className="flex items-center gap-4 text-xs text-white">
              <Link href="/about" className="hover:text-white transition-colors">
                Mentions légales
              </Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-white transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}