'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface Partner {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  link: string;
}

interface CarousselPartnerProps {
  partners: Partner[];
}

export default function CarousselPartner({ partners }: CarousselPartnerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeSlide = useCallback((newIndex: number, direction: 'left' | 'right' = 'right') => {
    if (isTransitioning) return; // Empêche les transitions multiples
    
    setIsTransitioning(true);
    
    // Changer l'index après un court délai pour l'animation
    setTimeout(() => {
      setCurrentIndex(newIndex);
    }, 150);
    
    // Fin de la transition après 500ms
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  }, [isTransitioning]);

  // Auto-slide toutes les 5 secondes
  useEffect(() => {
    if (!isAutoPlaying || partners.length === 0 || isTransitioning) return;

    const interval = setInterval(() => {
      const newIndex = currentIndex === partners.length - 1 ? 0 : currentIndex + 1;
      changeSlide(newIndex, 'right');
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, partners.length, isTransitioning, changeSlide]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    const newIndex = currentIndex === 0 ? partners.length - 1 : currentIndex - 1;
    changeSlide(newIndex, 'left');
    setTimeout(() => setIsAutoPlaying(true), 3000); // Reprend l'auto-play après 3s
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    const newIndex = currentIndex === partners.length - 1 ? 0 : currentIndex + 1;
    changeSlide(newIndex, 'right');
    setTimeout(() => setIsAutoPlaying(true), 3000); // Reprend l'auto-play après 3s
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    const direction = index > currentIndex ? 'right' : 'left';
    changeSlide(index, direction);
    setTimeout(() => setIsAutoPlaying(true), 3000); // Reprend l'auto-play après 3s
  };

  // Gestion du swipe tactile
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  if (partners.length === 0) {
    return (
      <div className="relative w-full h-64 sm:h-80 md:h-96 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400">Aucun partenaire à afficher</p>
      </div>
    );
  }

  return (
    <div 
      className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg shadow-lg group"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Container des slides */}
      <div 
        className={`flex w-full h-full transition-transform duration-500 ease-in-out`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {partners.map((partner, index) => (
          <div key={partner.id} className="w-full h-full flex-shrink-0 relative">
            {/* Image de fond */}
            <Image
              src={partner.src}
              alt={partner.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
              priority={index === 0}
            />
            {/* Overlay blur pour effet de profondeur */}
            <div className="absolute inset-0 backdrop-blur-sm z-5"></div>
            {/* Overlay gradient pour la lisibilité */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20 z-10"></div>

            {/* Contenu */}
            <div className={`relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8 z-20 transition-all duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg font-title">
                {partner.title}
              </h3>
              
              <p className="text-sm sm:text-base md:text-lg text-white/90 mb-4 sm:mb-6 max-w-xl md:max-w-2xl leading-relaxed drop-shadow">
                {partner.description}
              </p>

              <a
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-all duration-300 border border-white/30 hover:border-white/50 hover:scale-105 text-sm sm:text-base"
              >
                Découvrir →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Boutons de navigation */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
        aria-label="Slide précédent"
      >
        <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
        aria-label="Slide suivant"
      >
        <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicateurs de slides */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {partners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white scale-110'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>

      </div>
  );
}