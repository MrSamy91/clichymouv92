import CardDisplay from './card-display';
import CardSkeleton from './card-skeleton';
import type { Adherent } from '@/lib/list-of-adherants';

interface AdherantListProps {
  adherants: Adherent[];
  isLoadingMore?: boolean;
  itemsPerPage?: number;
}

export default function AdherantList({ 
  adherants, 
  isLoadingMore = false, 
  itemsPerPage = 6 
}: AdherantListProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Affichage des cartes réelles */}
      {adherants.map((adherant) => (
        <CardDisplay
          key={adherant.id}
          item={adherant}
          idPrefix="adherant"
          linkPrefix="adherants"
        />
      ))}
      
      {/* Affichage des skeletons pendant le chargement */}
      {isLoadingMore && Array.from({ length: itemsPerPage }).map((_, index) => (
        <CardSkeleton key={`skeleton-${index}`} />
      ))}
    </div>
  );
}