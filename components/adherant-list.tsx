import Image from 'next/image';

interface Adherant {
  id: number;
  name: string;
  company: string;
  description: string;
  website?: string;
  phone?: string;
  logo: string;
  address: string;
}

interface AdherantListProps {
  adherants: Adherant[];
}

export default function AdherantList({ adherants }: AdherantListProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {adherants.map((adherant) => (
        <div 
          key={adherant.id} 
          id={`adherant-${adherant.id}`}
          className="!bg-white/15 dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow flex flex-col h-full"
        >
          <div className="flex items-start space-x-4 mb-4">
            <div className="flex-shrink-0">
              <Image
                src={adherant.logo}
                alt={`Logo de ${adherant.name}`}
                width={64}
                height={64}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 font-subtitle">
                {adherant.name}
              </h4>
              <p className="text-sm !text-white dark:text-gray-400 mb-2">
                {adherant.company}
              </p>
            </div>
          </div>
          
          <div className="flex-1">
            <p className="!text-white dark:text-gray-300 text-sm leading-relaxed mb-4">
              {adherant.description}
            </p>
            
            <div className="text-sm !text-white dark:text-gray-400 mb-4">
              <p>📍 {adherant.address}</p>
            </div>
          </div>
          
          <div className="space-y-2 mt-auto">
            {adherant.phone && (
              <a 
                href={`tel:${adherant.phone}`}
                className="w-full bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Appeler
              </a>
            )}
            
            {adherant.website && (
              <a 
                href={adherant.website}
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
      ))}
    </div>
  );
}