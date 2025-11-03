'use client';

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

interface LogoPartnerListProps {
  partners: Partner[];
}

export default function LogoPartnerList({ partners }: LogoPartnerListProps) {
  console.log('Partners:', partners.length, partners.map(p => ({ id: p.id, name: p.name, logo: p.logo })));

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {partners.map((partner) => (
        <div 
          key={partner.id} 
          className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:shadow-2xl hover:scale-105"
        >
          {/* Container du logo avec effet de transparence */}
          <div className="flex flex-col items-center space-y-6">
            <div className="relative w-60 h-40 group-hover:scale-110 transition-transform duration-300 p-6">
              <div className="absolute inset-0 bg-white/0 rounded-lg group-hover:transition-all duration-300"></div>
              <div className="relative w-full h-full p-1">
                <Image
                  src={partner.logo}
                  alt={`Logo de ${partner.name}`}
                  fill
                  sizes="(max-width: 768px) 200px, 280px"
                  className="object-contain filter group-hover:brightness-110 transition-all duration-300"
                  onError={() => {
                    console.error('Image failed to load:', partner.name, partner.logo);
                  }}
                />
              </div>
            </div>
            
            {/* Informations du partenaire */}
            <div className="text-center space-y-2">
              <h4 className="text-lg font-bold text-white group-hover:text-white/95 transition-colors font-subtitle">
                {partner.name}
              </h4>
              <p className="text-sm text-white/80 group-hover:text-white/90 transition-colors">
                {partner.company}
              </p>
            </div>
            
            {/* Description courte */}
            <p className="text-xs text-white/70 text-center leading-relaxed group-hover:text-white/85 transition-colors">
              {partner.description}
            </p>
            
            {/* Bouton site web avec effet glassmorphism */}
            {partner.website && (
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 inline-block bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-xs font-medium px-4 py-2 rounded-full transition-all duration-300 hover:shadow-lg border border-white/20 hover:border-white/40"
              >
                Visiter le site
              </a>
            )}
          </div>
          
          {/* Effet de brillance au survol */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      ))}
    </div>
  );
}