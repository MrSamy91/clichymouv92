'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { HiHome, HiUserGroup, HiClipboardDocumentList, HiPhone, HiInformationCircle } from 'react-icons/hi2';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '/', label: 'Accueil', icon: HiHome },
    { href: '/partners', label: 'Partenaires', icon: HiUserGroup },
    { href: '/projets', label: 'Projets', icon: HiClipboardDocumentList },
    { href: '/contact', label: 'Contact', icon: HiPhone },
    { href: '/about', label: 'À propos', icon: HiInformationCircle }
  ];

  return (
    <header className="container mx-auto px-6 py-8">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <div className="z-50 relative">
          <Link href="/" onClick={closeMenu} className="block">
            <Image
              src="/logo-clichy-mouv2.webp"
              alt="ClichyMouv"
              width={150}
              height={60}
              className="h-20 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Navigation Desktop */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  isActive(link.href) 
                    ? 'text-white font-semibold' 
                    : 'text-white/80 hover:text-white'
                } transition-colors flex items-center gap-2 text-xl`}
              >
                <IconComponent className="text-2xl" />
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Bouton Hamburger Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden z-50 relative p-2"
          aria-label="Menu de navigation"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
              }`}
            />
          </div>
        </button>

        {/* Menu Mobile */}
        <div
          className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`text-4xl transition-colors flex items-center gap-3 ${
                    isActive(link.href)
                      ? 'text-white font-semibold'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  <IconComponent className="text-5xl" />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Overlay pour fermer le menu en cliquant à côté */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-30 md:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </nav>
    </header>
  );
}