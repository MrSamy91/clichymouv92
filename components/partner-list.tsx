import Image from 'next/image';

interface Partner {
  id: number;
  name: string;
  company: string;
  description: string;
  website?: string;
  logo: string;
  address: string;
}

interface PartnerListProps {
  partners: Partner[];
}

export default function PartnerList({ partners }: PartnerListProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {partners.map((partner) => (
        <div key={partner.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-start space-x-4 mb-4">
            <div className="flex-shrink-0">
              <Image
                src={partner.logo}
                alt={`Logo de ${partner.name}`}
                width={64}
                height={64}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {partner.name}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {partner.company}
              </p>
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
            {partner.description}
          </p>
          
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            <p>📍 {partner.address}</p>
          </div>
          
          {partner.website && (
            <div className="text-center">
              <a 
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
              >
                Visiter le site
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}