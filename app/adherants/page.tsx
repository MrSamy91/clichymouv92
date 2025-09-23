import { Metadata } from 'next';
import AdherantList from '@/components/adherant-list';
import HeroSection from '@/components/hero-section';

export const metadata: Metadata = {
  title: 'Adhérents - ClichyMouv',
  description: 'Découvrez nos adhérents commerçants et entrepreneurs engagés dans notre démarche d\'entraide locale',
};

interface Adherent {
  id: number;
  name: string;
  company: string;
  description: string;
  website?: string;
  phone?: string;
  logo: string;
  address: string;
}

async function getAdherents(): Promise<Adherent[]> {
  // Commerçants et entrepreneurs adhérents à notre démarche d'entraide
  return [
    {
      id: 1,
      name: "Café des Sports",
      company: "Bar-Restaurant",
      description: "Établissement convivial au cœur de Clichy, le Café des Sports propose une cuisine traditionnelle dans une ambiance chaleureuse. Partenaire de nos événements associatifs et lieu de rassemblement pour notre communauté.",
      website: "https://cafe-des-sports-clichy.fr",
      phone: "01 47 37 92 15",
      logo: "/images/adherents/cafe-des-sports.png",
      address: "15 Avenue Victor Hugo, 92110 Clichy-la-Garenne"
    },
    {
      id: 2,
      name: "Tech Solutions",
      company: "Services informatiques",
      description: "Entreprise locale spécialisée dans les solutions informatiques pour les PME. Tech Solutions accompagne ClichyMouv dans la digitalisation de ses activités et offre des formations numériques aux adhérents.",
      website: "https://tech-solutions-clichy.fr",
      phone: "01 47 37 92 28",
      logo: "/images/adherents/tech-solutions.png",
      address: "28 Rue de la République, 92110 Clichy-la-Garenne"
    },
    {
      id: 3,
      name: "Boulangerie Artisan",
      company: "Boulangerie-Pâtisserie",
      description: "Boulangerie familiale proposant des produits artisanaux de qualité. Engagée dans notre démarche d'entraide, elle fournit régulièrement nos événements et soutient les initiatives locales de bien-être.",
      website: "",
      phone: "01 47 37 92 05",
      logo: "/images/adherents/boulangerie-artisan.png",
      address: "5 Place de la Mairie, 92110 Clichy-la-Garenne"
    }
  ];
}

export default async function AdherantsPage() {
  const adherents = await getAdherents();

  return (
    <div className="min-h-screen">
      <HeroSection 
        description="Découvrez les commerçants et entrepreneurs locaux qui soutiennent notre démarche d'entraide et contribuent au dynamisme de Clichy-la-Garenne."
        showLogo={true}
      />

      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            ClichyMouv rassemble des commerçants et entrepreneurs dynamiques unis par une vision commune : 
            créer une économie locale solidaire basée sur l&apos;entraide mutuelle. Ensemble, nous développons 
            des synergies qui profitent à tous et renforcent le tissu économique local.
          </p>
        </div>
        
        <AdherantList adherants={adherents} />
        
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