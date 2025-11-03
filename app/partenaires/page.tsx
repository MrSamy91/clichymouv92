import { Metadata } from 'next';
import Link from 'next/link';
import LogoPartnerList from '@/components/logo-partner-list';
import HeroSection from '@/components/hero-section';

export const metadata: Metadata = {
  title: 'Partenaires - ClichyMouv',
  description: 'Découvrez nos partenaires qui soutiennent les activités de ClichyMouv',
};

interface Partner {
  id: number;
  name: string;
  company: string;
  type: string;
  description: string;
  website?: string;
  logo: string;
  address: string;
}

async function getPartners(): Promise<Partner[]> {
  return [
    {
      id: 1,
      name: "Ville de Clichy",
      company: "Mairie de Clichy-la-Garenne",
      type: "Partenaire institutionnel",
      description: "Partenaire institutionnel principal soutenant le développement des activités sportives et de bien-être dans la commune.",
      website: "https://www.ville-clichy.fr/",
      logo: "/images/partners/ville-clichy.svg",
      address: "Place du 11 Novembre 1918, 92110 Clichy-la-Garenne"
    },
    {
      id: 2,
      name: "Département des Hauts-de-Seine",
      company: "Conseil Départemental des Hauts-de-Seine",
      type: "Partenaire institutionnel",
      description: "Soutien départemental pour les initiatives associatives et les projets de développement local.",
      website: "https://www.hauts-de-seine.fr/",
      logo: "/images/partners/hauts-de-seine.webp",
      address: "92 Avenue André Morizet, 92100 Boulogne-Billancourt"
    },
    {
      id: 3,
      name: "Clichy Mécénat",
      company: "Fondation Clichy Mécénat",
      type: "Partenaire mécénat",
      description: "Fondation locale dédiée au soutien des projets associatifs et culturels de Clichy-la-Garenne.",
      website: "",
      logo: "/images/partners/clichy-mecenat.webp",
      address: "Clichy-la-Garenne, 92110"
    },
    {
      id: 4,
      name: "CCI Hauts-de-Seine",
      company: "Chambre de Commerce et d'Industrie des Hauts-de-Seine",
      type: "Partenaire économique",
      description: "Chambre de Commerce et d'Industrie accompagnant le développement économique local et les partenariats entreprises-associations.",
      website: "https://www.hauts-de-seine.cci.fr/",
      logo: "/images/partners/cci-hauts-de-seine.svg",
      address: "179 Avenue Georges Clemenceau, 92000 Nanterre"
    }
  ];
}

export default async function PartnersPage() {
  const partners = await getPartners();

  return (
    <div>
      <HeroSection 
        title="Ils nous font confiance"
        description="ClichyMouv travaille avec des partenaires de confiance pour offrir les meilleures activités et services à notre communauté."
        showLogo={true}
      />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">

          <div id="nos-partenaires" className="mb-12">
            <LogoPartnerList partners={partners} />
          </div>

          <div className="!bg-white/10 dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 font-subtitle">
              Devenir Partenaire
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Vous souhaitez soutenir notre association et nos activités ? 
              Rejoignez notre réseau de partenaires et contribuez au bien-être de notre communauté.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link
                href="/contact"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}