'use client';

import { useState, useMemo, useCallback, useEffect } from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import type { Adherent } from '@/lib/list-of-adherants';

interface SearchBarProps {
  adherents: Adherent[];
  onFilteredResults: (filtered: Adherent[]) => void;
  placeholder?: string;
}

export default function SearchBar({ 
  adherents, 
  onFilteredResults, 
  placeholder = "Rechercher par nom d'entreprise ou de responsable..." 
}: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  // Debounce search query (300ms delay)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const filteredAdherents = useMemo(() => {
    if (!debouncedQuery.trim()) {
      return adherents;
    }

    const query = debouncedQuery.toLowerCase().trim();
    
    return adherents.filter((adherent) => {
      const nameMatch = adherent.name.toLowerCase().includes(query);
      const companyMatch = adherent.company.toLowerCase().includes(query);
      
      return nameMatch || companyMatch;
    });
  }, [adherents, debouncedQuery]);

  const handleSearchChange = useCallback((value: string) => {
    setSearchQuery(value);
  }, []);

  const clearSearch = useCallback(() => {
    setSearchQuery('');
    setDebouncedQuery('');
  }, []);

  // Update filtered results when debounced query changes
  useEffect(() => {
    onFilteredResults(filteredAdherents);
  }, [filteredAdherents, onFilteredResults]);

  return (
    <div className="relative w-full max-w-2xl mx-auto mb-8">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MagnifyingGlassIcon 
            className="h-5 w-5 text-gray-400" 
            aria-hidden="true" 
          />
        </div>
        
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg 
                     !bg-white/30 backdrop-blur-sm
                     !text-gray-900 !placeholder-white
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                     dark:bg-gray-800/90 dark:border-gray-600 dark:text-white dark:placeholder-white
                     dark:focus:ring-indigo-400 dark:focus:border-indigo-400
                     transition-all duration-200 ease-in-out
                     shadow-sm hover:shadow-md focus:shadow-lg"
          placeholder={placeholder}
          aria-label="Rechercher parmi les adhérents"
          autoComplete="off"
          spellCheck="false"
        />
        
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-3 flex items-center
                       !text-black hover:text-gray-600 dark:hover:text-gray-300
                       transition-colors duration-200 ease-in-out
                       focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-r-lg"
            title="Effacer la recherche"
            type="button"
          >
            <span className="sr-only">Effacer la recherche</span>
            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        )}
      </div>
      
      {debouncedQuery && (
        <div className="mt-2 text-sm !text-black dark:text-gray-400">
          {filteredAdherents.length === 0 ? (
            <p className="!text-orange-400 dark:text-orange-400">
              Aucun résultat trouvé pour &ldquo;{debouncedQuery}&rdquo;
            </p>
          ) : (
            <p>
              {filteredAdherents.length} résultat{filteredAdherents.length > 1 ? 's' : ''} trouvé{filteredAdherents.length > 1 ? 's' : ''}
              {filteredAdherents.length !== adherents.length && (
                <span className="ml-1 text-black">
                  sur {adherents.length} adhérent{adherents.length > 1 ? 's' : ''}
                </span>
              )}
            </p>
          )}
        </div>
      )}
    </div>
  );
}