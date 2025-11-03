import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { CardItem } from '@/lib/types';

interface CardDisplayProps {
  item: CardItem;
  idPrefix?: string;
  linkPrefix?: string; // 'adherants' ou 'bureau'
}

function CardDisplay({ item, idPrefix = "item", linkPrefix }: CardDisplayProps) {
  return (
    <div
      id={`${idPrefix}-${item.id}`}
      className="!bg-white/15 dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all flex flex-col h-full group"
    >
      {/* En-tête avec lien vers page individuelle */}
      {linkPrefix ? (
        <Link href={`/${linkPrefix}/${item.slug}`} className="block mb-4 group-hover:scale-[1.02] transition-transform">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <Image
                src={item.logo}
                alt={`Logo de ${item.name}`}
                width={64}
                height={64}
                className="rounded-lg object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 font-subtitle group-hover:text-indigo-400 transition-colors">
                {item.name}
              </h4>
              <p className="text-sm !text-white dark:text-gray-400 mb-2">
                {item.company}
              </p>
            </div>
          </div>
        </Link>
      ) : (
        <div className="flex items-start space-x-4 mb-4">
          <div className="flex-shrink-0">
            <Image
              src={item.logo}
              alt={`Logo de ${item.name}`}
              width={64}
              height={64}
              className="rounded-lg object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 font-subtitle">
              {item.name}
            </h4>
            <p className="text-sm !text-white dark:text-gray-400 mb-2">
              {item.company}
            </p>
          </div>
        </div>
      )}
      
      <div className="flex-1">
        <p className="!text-white dark:text-gray-300 text-sm leading-relaxed mb-4">
          {item.description}
        </p>
        
        <div className="text-sm !text-white dark:text-gray-400 mb-4">
          <p>📍 {item.address}</p>
        </div>
      </div>
      
      <div className="space-y-2 mt-auto">
        {linkPrefix && (
          <Link
            href={`/${linkPrefix}/${item.slug}`}
            className="w-full bg-indigo-800/60 hover:bg-indigo-800/80 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 border border-white/20"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            En savoir plus
          </Link>
        )}

        {item.phone && (
          <a
            href={`tel:${item.phone}`}
            className="w-full bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Appeler
          </a>
        )}

        {item.website && (
          <a
            href={item.website}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
            </svg>
            Visiter le site
          </a>
        )}
      </div>
    </div>
  );
}

export default memo(CardDisplay);