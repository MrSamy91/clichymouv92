'use client';

import { useState, useCallback, useMemo } from 'react';
import AdherantList from '@/components/adherant-list';
import HeroSection from '@/components/hero-section';
import SearchBar from '@/components/search-bar';
import { adherents, type Adherent } from '@/lib/list-of-adherants';

const ITEMS_PER_PAGE = 6;

export default function AdherantsPage() {
  const [filteredAdherents, setFilteredAdherents] = useState<Adherent[]>([]);
  const [displayedCount, setDisplayedCount] = useState(ITEMS_PER_PAGE);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  
  // Détermine les adhérents à afficher (filtrés ou tous)
  const currentAdherents = filteredAdherents.length > 0 ? filteredAdherents : adherents;
  
  // Adhérents actuellement visibles
  const visibleAdherents = useMemo(() => {
    return currentAdherents.slice(0, displayedCount);
  }, [currentAdherents, displayedCount]);
  
  // Y a-t-il plus d'éléments à charger ?
  const hasMore = displayedCount < currentAdherents.length;
  
  // Fonction pour charger plus d'éléments
  const loadMore = useCallback(async () => {
    setIsLoadingMore(true);
    
    // Simule un délai de chargement pour l'UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setDisplayedCount(prev => Math.min(prev + ITEMS_PER_PAGE, currentAdherents.length));
    setIsLoadingMore(false);
  }, [currentAdherents.length]);
  
  // Reset de la pagination quand les résultats filtrés changent
  const handleFilteredResults = useCallback((filtered: Adherent[]) => {
    setFilteredAdherents(filtered);
    setDisplayedCount(ITEMS_PER_PAGE); // Reset à la première page
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection 
      description="ClichyMouv rassemble des commerçants et entrepreneurs dynamiques unis par une vision commune : créer une économie locale solidaire basée sur l'entraide mutuelle. Ensemble, nous développons des synergies qui profitent à tous et renforcent le tissu économique local."
        showLogo={true}
      />

      <div className="container mx-auto px-6 py-12">
        
        
        <SearchBar 
          adherents={adherents}
          onFilteredResults={handleFilteredResults}
          placeholder="Rechercher par nom d'entreprise ou de responsable..."
        />
        
        <AdherantList 
          adherants={visibleAdherents} 
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
                `Charger plus (${Math.min(ITEMS_PER_PAGE, currentAdherents.length - displayedCount)} de plus)`
              )}
            </button>
          </div>
        )}
        
        <div className="text-center mt-12">
          <div className="!bg-white/20 dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-subtitle">
              Rejoignez notre réseau !
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Vous êtes commerçant ou entrepreneur à Clichy-la-Garenne ? 
              Rejoignez notre démarche d&apos;entraide et développez votre activité 
              au sein d&apos;une communauté solidaire et dynamique.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Devenir adhérent
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}