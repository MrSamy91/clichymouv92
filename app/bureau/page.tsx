'use client';

import { useState, useCallback, useMemo } from 'react';
import BureauList from '@/components/bureau-list';
import HeroSection from '@/components/hero-section';
import { bureauMembers } from '@/lib/list-of-bureau';

const ITEMS_PER_PAGE = 6;

export default function BureauPage() {
  const [displayedCount, setDisplayedCount] = useState(ITEMS_PER_PAGE);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  
  // Membres actuellement visibles
  const visibleMembers = useMemo(() => {
    return bureauMembers.slice(0, displayedCount);
  }, [displayedCount]);
  
  // Y a-t-il plus d'éléments à charger ?
  const hasMore = displayedCount < bureauMembers.length;
  
  // Fonction pour charger plus d'éléments
  const loadMore = useCallback(async () => {
    setIsLoadingMore(true);
    
    // Simule un délai de chargement pour l'UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setDisplayedCount(prev => Math.min(prev + ITEMS_PER_PAGE, bureauMembers.length));
    setIsLoadingMore(false);
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection 
      description='Le bureau de ClichyMouv est composé de bénévoles passionnés qui consacrent leur temps et leur énergie 
            à la gestion et au développement de l&apos;association. Chaque membre apporte son expertise pour faire 
            vivre notre communauté et développer nos activités.'
        showLogo={true}
      />

      <div className="container mx-auto px-6 py-12">
        
        <BureauList 
          members={visibleMembers} 
          isLoadingMore={isLoadingMore}
          itemsPerPage={ITEMS_PER_PAGE}
        />
        
        {hasMore && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              disabled={isLoadingMore}
              className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-medium px-8 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              {isLoadingMore ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Chargement...
                </>
              ) : (
                `Charger plus (${Math.min(ITEMS_PER_PAGE, bureauMembers.length - displayedCount)} de plus)`
              )}
            </button>
          </div>
        )}
        
        <div className="text-center mt-12">
          <div className="!bg-white/20 dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-subtitle">
              Vous souhaitez nous rejoindre ?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              ClichyMouv recherche régulièrement des bénévoles motivés pour enrichir notre équipe 
              et contribuer au développement de l&apos;association.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}