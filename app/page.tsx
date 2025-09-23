import { Metadata } from 'next';
import CarousselPartner from '@/components/caroussel-partner';
import HeroSection from '@/components/hero-section';

export const metadata: Metadata = {
  title: 'Accueil - ClichyMouv',
  description: 'Association de mouvement et de bien-être à Clichy-la-Garenne',
};

async function getPartnersData() {
  // Données d'exemple - en production, cela viendrait d'une API ou base de données
  return [
    {
      id: 1,
      src: "/images/photos_entreprises/esplanade_clichy.png",
      alt: "Logo et photos de l'Entreprise ",
      title: "L'ESPLANADE",
      description: "Voici l'esplanade clichy le restaurant de notre partenaire Ilies.",
      link: "https://esplanadeclichy.com"
    },
    {
      id: 2,
      src: "/images/photos_entreprises/avantage_immo.webp", 
      alt: "Locaux de Avantage Immo",
      title: "AVANTAGE IMMOBILIER",
      description: "Avantage immo de Delphine propose des d'exceptionnels pour l'achat, la vente et la location de biens immobiliers.",
      link: "https://avantage-immobilier.fr/"
    },
    {
      id: 3,
      src: "/images/photos_entreprises/mimetism.png",
      alt: "Équipe de Mimetism",
      title: "MIMETISM",
      description: "Jade de chez Mimetism avec son agence.",
      link: "https://mimetism.fr/"
    }
  ];
}

export default async function HomePage() {
  const partnersData = await getPartnersData();
  return (
    <div>
      <HeroSection
      title='Entreprises de nos Adhérents'
      description="Découvrez les entreprises créées et dirigées par nos membres. 
              Une communauté d&apos;entrepreneurs engagés dans le mouvement et le bien-être."
 />

      <main className="container mx-auto px-6 py-12">
        <div className="text-center max-w-4xl mx-auto">

          

          <div className="mt-12">
            <a 
              href="/contact"
              className="!bg-indigo-800/60 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-8 py-3 rounded-lg transition-colors border border-white/30"
            >
              Nous contacter
            </a>
          </div>
        </div>

        {/* Section des entreprises partenaires */}
        <section className="mt-20">
          <CarousselPartner partners={partnersData} />
        </section>
      </main>
    </div>
  );
}