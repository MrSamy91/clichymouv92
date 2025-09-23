'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { HiHome, HiUserGroup, HiClipboardDocumentList, HiXCircle, HiPhone, HiInformationCircle, HiUsers } from 'react-icons/hi2';

export default function NavbarVertical() {
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
    { href: '/bureau', label: 'Bureau', icon: HiXCircle },
    { href: '/adherants', label: 'Adhérents', icon: HiUsers },
    { href: '/projets', label: 'Projets', icon: HiClipboardDocumentList },
    { href: '/contact', label: 'Contact', icon: HiPhone },
    { href: '/about', label: 'À propos', icon: HiInformationCircle },
  ];
  

  return (
    <>
      {/* Sidebar Desktop */}
      <aside className="fixed left-0 top-0 h-full w-26 bg-black/0 backdrop-blur-sm border-r border-white/10 z-50 hidden md:flex flex-col">
        <div className="p-4 flex flex-col items-center space-y-6 h-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" onClick={closeMenu} className="block">
              <Image
                src="/logo-samy.svg"
                alt="ClichyMouv"
                width={60}
                height={24}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Navigation Verticale */}
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${
                    isActive(link.href) 
                      ? 'text-white font-semibold bg-white/10' 
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  } transition-all duration-200 flex flex-col items-center gap-1 p-2 rounded-lg text-center`}
                >
                  <IconComponent className="text-xl" />
                  <span className="text-xs leading-tight font-subtitle">{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Header Mobile */}
      <header className="md:hidden fixed top-0 left-0 right-0 bg-black/0 backdrop-blur-sm border-b border-white/10 z-50">
        <div className="px-6 py-4 flex justify-center items-center relative">
          {/* Logo Mobile Centré */}
          <Link href="/" onClick={closeMenu} className="block">
            <Image
              src="/logo-samy.svg"
              alt="ClichyMouv"
              width={120}
              height={48}
              className="h-12"
              style={{ width: "auto" }}
              priority
            />
          </Link>

          {/* Bouton Hamburger Mobile */}
          <button
            onClick={toggleMenu}
            className="z-50 absolute right-6 p-2"
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
        </div>
      </header>

      {/* Menu Mobile */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-4 pt-20">
          {navLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`text-2xl transition-colors flex flex-col items-center gap-2 ${
                  isActive(link.href)
                    ? 'text-white font-semibold'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <IconComponent className="text-xl" />
                <span className="font-title">{link.label}</span>
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
    </>
  );
}