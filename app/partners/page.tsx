import { Metadata } from 'next';
import PartnerList from '@/components/partner-list';

export const metadata: Metadata = {
  title: 'Partenaires - Clichymouv92',
  description: 'Découvrez nos partenaires qui soutiennent les activités de Clichymouv92',
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
      name: "Delphine Martin",
      company: "Boutique Mode & Style",
      type: "Partenaire commercial",
      description: "Spécialiste en vêtements sportifs et casual, offre des réductions pour nos membres.",
      website: "https://www.mode-style-clichy.fr",
      logo: "/images/personnes/Delphine.png",
      address: "15 Rue Martre, 92110 Clichy"
    },
    {
      id: 2,
      name: "Iliès Benali",
      company: "Restaurant Le Maghreb",
      type: "Partenaire restauration",
      description: "Cuisine traditionnelle méditerranéenne, menus équilibrés pour sportifs.",
      website: "https://www.restaurant-maghreb-clichy.fr",
      logo: "/images/personnes/ilies.png",
      address: "32 Boulevard Jean Jaurès, 92110 Clichy"
    },
    {
      id: 3,
      name: "Marie Dupont",
      company: "Pharmacie de la Paix",
      type: "Partenaire santé",
      description: "Conseils santé, compléments alimentaires et suivi pour nos sportifs.",
      website: "https://www.pharmacie-paix-clichy.fr",
      logo: "/images/personnes/personne_1.png",
      address: "8 Place de la Paix, 92110 Clichy"
    },
    {
      id: 4,
      name: "Ahmed Kassim",
      company: "Coiffure Moderne",
      type: "Partenaire bien-être",
      description: "Salon de coiffure mixte, services de relaxation et soins capillaires.",
      website: "https://www.coiffure-moderne-clichy.fr",
      logo: "/images/personnes/personne_2.png",
      address: "45 Rue de la République, 92110 Clichy"
    },
    {
      id: 5,
      name: "Sophie Moreau",
      company: "Boulangerie des Délices",
      type: "Partenaire alimentaire",
      description: "Pain bio, pâtisseries santé et produits nutritionnels pour sportifs.",
      website: "https://www.delices-clichy.fr",
      logo: "/images/personnes/personne_3.png",
      address: "12 Avenue Victor Hugo, 92110 Clichy"
    },
    {
      id: 6,
      name: "Carlos Rodriguez",
      company: "Garage Auto Plus",
      type: "Partenaire automobile",
      description: "Entretien véhicules, réparations et tarifs préférentiels pour nos adhérents.",
      website: "https://www.autoplus-clichy.fr",
      logo: "/images/personnes/personne_4.png",
      address: "67 Rue Martre, 92110 Clichy"
    },
    {
      id: 7,
      name: "Fatima El Mansouri",
      company: "Épicerie du Monde",
      type: "Partenaire alimentaire",
      description: "Produits bio et internationaux, fruits secs et aliments énergétiques.",
      website: "https://www.epicerie-monde-clichy.fr",
      logo: "/images/personnes/personne_5.png",
      address: "23 Boulevard Victor Hugo, 92110 Clichy"
    },
    {
      id: 8,
      name: "Jean-Pierre Legrand",
      company: "Tabac Presse Central",
      type: "Partenaire services",
      description: "Point presse, services postaux et billetterie événements sportifs.",
      website: "https://www.tabac-central-clichy.fr",
      logo: "/images/personnes/personne_6.png",
      address: "4 Place du Marché, 92110 Clichy"
    },
    {
      id: 9,
      name: "Amina Benkirane",
      company: "Institut de Beauté Zen",
      type: "Partenaire bien-être",
      description: "Soins esthétiques, massages de récupération et relaxation.",
      website: "https://www.institut-zen-clichy.fr",
      logo: "/images/personnes/personne_7.png",
      address: "18 Rue de la Liberté, 92110 Clichy"
    }
  ];
}

export default async function PartnersPage() {
  const partners = await getPartners();

  const institutionalPartners = partners.filter(p => p.type.includes('institutionnel') || p.type.includes('public'));
  const businessPartners = partners.filter(p => !p.type.includes('institutionnel') && !p.type.includes('public'));

  return (
    <div>
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-8 text-center">
            Nos Partenaires
          </h2>

          <div className="text-center mb-12">
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Clichymouv92 travaille avec des partenaires de confiance pour offrir 
              les meilleures activités et services à notre communauté.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Partenaires Institutionnels
            </h3>
            <PartnerList partners={institutionalPartners} />
          </div>

          <div className="mb-12">
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Partenaires Privés
            </h3>
            <PartnerList partners={businessPartners} />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Devenir Partenaire
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Vous souhaitez soutenir notre association et nos activités ? 
              Rejoignez notre réseau de partenaires et contribuez au bien-être de notre communauté.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <a 
                href="/contact" 
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Nous contacter
              </a>
              <button className="inline-block border border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                Télécharger notre dossier
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Clichymouv92. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}