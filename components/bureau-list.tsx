import CardDisplay from './card-display';
import CardSkeleton from './card-skeleton';
import type { BureauMember } from '@/lib/list-of-bureau';

interface BureauListProps {
  members: BureauMember[];
  isLoadingMore?: boolean;
  itemsPerPage?: number;
}

export default function BureauList({ 
  members, 
  isLoadingMore = false, 
  itemsPerPage = 6 
}: BureauListProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Affichage des cartes réelles */}
      {members
        .filter((member) => member && member.id !== undefined)
        .map((member) => (
          <CardDisplay key={member.id} item={member} idPrefix="bureau" />
        ))}
      
      {/* Affichage des skeletons pendant le chargement */}
      {isLoadingMore && Array.from({ length: itemsPerPage }).map((_, index) => (
        <CardSkeleton key={`skeleton-${index}`} />
      ))}
    </div>
  );
}