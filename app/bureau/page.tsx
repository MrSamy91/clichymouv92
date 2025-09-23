import { Metadata } from 'next';
import AdherantList from '@/components/adherant-list';
import HeroSection from '@/components/hero-section';

export const metadata: Metadata = {
  title: 'Bureau - ClichyMouv',
  description: 'Découvrez les membres du bureau qui dirigent et organisent ClichyMouv',
};

interface BureauMember {
  id: number;
  name: string;
  company: string;
  description: string;
  website?: string;
  phone?: string;
  logo: string;
  address: string;
}

async function getBureauMembers(): Promise<BureauMember[]> {
  // Membres du bureau/comité dirigeant de l'association
  return [
    {
      id: 7,
      name: "Ilies Ajouid",
      company: "Président",
      description: "Gérant des restaurant L'Esplanade et Le Palais.",
      website: "https://esplanadeclichy.com/",
      logo: "/images/bureau/ilies-ajouid.jpg",
      address: "Clichy-la-Garenne, 92110"
    },
    {
      id: 2,
      name: "Guillaume Ortega",
      company: "Vice-président",
      description: "Gérant de MisterBlad Encadrements.",
      website: "https://misterblad.com/",
      logo: "/images/bureau/guilaume-ortega.jpg",
      address: "Clichy-la-Garenne, 92110"
    },
    {
      id: 1,
      name: "Delphine Rizzo",
      company: "Trésorière",
      description: "Agent Immo depuis 2004 et gérante de Avantage Immobilier.",
      website: "https://avantage-immobilier.fr/",
      logo: "/images/bureau/delphine-rizzo.jpg",
      address: "Clichy-la-Garenne, 92110"
    },
    {
      id: 4,
      name: "Julien Gremy",
      company: "Secrétaire général",
      description: "Gestionnaire administratif au seins du Posto 9.",
      website: "",
      logo: "/images/bureau/julien-gremy.jpg",
      address: "Clichy-la-Garenne, 92110"
    },
    {
      id: 8,
      name: "Pascale Carrere",
      company: "Secrétaire",
      description: "Ancienne commercante à Clichy.",
      website: "",
      logo: "/images/bureau/pascale-carrere.jpg",
      address: "Clichy-la-Garenne, 92110"
    },
    {
      id: 3,
      name: "Elodie Muzzin",
      company: "Administratrice",
      description: "Coach professionnel.",
      website: "https://www.elodiemuzzin-coaching.fr/",
      logo: "/images/bureau/elodie-muzzin.jpg",
      address: "Clichy-la-Garenne, 92110"
    },
    {
      id: 5,
      name: "Jessica Da Veiga",
      company: "Administratrice",
      description: "Gérante du Restaurant Le Cap-Vert",
      website: "",
      logo: "/images/bureau/jessica-da-veiga.jpg",
      address: "Clichy-la-Garenne, 92110"
    },
    {
      id: 6,
      name: "Karine Granger",
      company: "Administratrice",
      description: "Gérante du Salon de coiffure Karine Granger.",
      website: "",
      logo: "/images/bureau/karine-granger.jpg",
      address: "Clichy-la-Garenne, 92110"
    },
    
    {
      id: 9,
      name: "Sandrine Mevil Blanche",
      company: "Administratrice",
      description: "Gérante de deux boutiques Léon Bulle et Léa Bulle.",
      website: "",
      logo: "/images/bureau/sandrine-mevil-blanche.jpg",
      address: "Clichy-la-Garenne, 92110"
    }
  ];
}

export default async function BureauPage() {
  const bureauMembers = await getBureauMembers();

  return (
    <div className="min-h-screen">
      <HeroSection 
        description="Découvrez les membres du bureau qui dirigent et organisent ClichyMouv pour vous offrir les meilleures activités de mouvement et bien-être."
        showLogo={true}
      />

      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Le bureau de ClichyMouv est composé de bénévoles passionnés qui consacrent leur temps et leur énergie 
            à la gestion et au développement de l&apos;association. Chaque membre apporte son expertise pour faire 
            vivre notre communauté et développer nos activités.
          </p>
        </div>
        
        <AdherantList adherants={bureauMembers} />
        
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