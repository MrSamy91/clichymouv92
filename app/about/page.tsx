import { Metadata } from 'next';
import HeroSection from '@/components/hero-section';

export const metadata: Metadata = {
  title: 'À propos - ClichyMouv',
  description: 'Découvrez l\'histoire et la mission de l\'association ClichyMouv',
};

export default async function AboutPage() {
  return (
    <div>
      <HeroSection 
        description="Découvrez qui nous sommes, notre mission et ce qui nous anime au quotidien dans notre association de mouvement et bien-être."
        showLogo={true}
      />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">

          {/* Notre But */}
          <div className="!bg-white/20 dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 text-center font-subtitle">
              Notre But
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  ClichyMouv a pour mission de promouvoir le bien-être et l&apos;activité physique 
                  pour tous les habitants de Clichy-la-Garenne et des environs.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Nous visons à créer une communauté unie autour du mouvement, de la santé 
                  et du développement personnel, en offrant des activités accessibles et 
                  adaptées à chaque profil.
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-subtitle">
                  Bien-être pour tous
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Une communauté active et épanouie
                </p>
              </div>
            </div>
          </div>

          {/* Nos Moyens */}
          <div className="!bg-white/20 dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 text-center font-subtitle">
              Nos Moyens
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="text-4xl mb-4">🏋️‍♀️</div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 font-subtitle">
                  Équipements Modernes
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Matériel de fitness dernière génération et espaces dédiés
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-4">👨‍🏫</div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 font-subtitle">
                  Coaches Certifiés
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Professionnels diplômés et expérimentés
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-4">📅</div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 font-subtitle">
                  Programmes Variés
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Planning riche et adapté à tous les niveaux
                </p>
              </div>
            </div>
          </div>

          {/* Notre Réseau */}
          <div className="!bg-white/20 dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 text-center font-subtitle">
              Notre Réseau
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 font-subtitle">
                  Partenaires Locaux
                </h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                  <li>• Commerces de proximité à Clichy</li>
                  <li>• Professionnels de santé</li>
                  <li>• Institutions municipales</li>
                  <li>• Associations sportives locales</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 font-subtitle">
                  Communauté Active
                </h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-indigo-50 dark:bg-indigo-900 rounded-lg p-4">
                    <div className="text-2xl font-bold !text-indigo-600">200+</div>
                    <div className="text-sm !text-white dark:text-gray-300">Membres actifs</div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900 rounded-lg p-4">
                    <div className="text-2xl font-bold !text-green-600">15+</div>
                    <div className="text-sm !text-white dark:text-gray-300">Partenaires</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nos Valeurs */}
          <div className="!bg-white/20 dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 text-center font-subtitle">
              Nos Valeurs
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 border !border-gray-200/50 dark:border-gray-700 rounded-lg">
                <div className="text-3xl mb-3">🤝</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 font-subtitle">
                  Inclusivité
                </h4>
                <p className="!text-white dark:text-gray-300 text-sm">
                  Accueil et respect de tous, sans distinction
                </p>
              </div>
              <div className="text-center p-4 border !border-gray-200/50 dark:border-gray-700 rounded-lg">
                <div className="text-3xl mb-3">💪</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 font-subtitle">
                  Excellence
                </h4>
                <p className="!text-white dark:text-gray-300 text-sm">
                  Qualité et professionnalisme dans nos services
                </p>
              </div>
              <div className="text-center p-4 border !border-gray-200/50 dark:border-gray-700 rounded-lg">
                <div className="text-3xl mb-3">❤️</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 font-subtitle">
                  Bienveillance
                </h4>
                <p className="!text-white dark:text-gray-300 text-sm">
                  Accompagnement dans la bienveillance et l&apos;écoute
                </p>
              </div>
              <div className="text-center p-4 border !border-gray-200/50 dark:border-gray-700 rounded-lg">
                <div className="text-3xl mb-3">🌟</div>
                <h4 className="font-semibold !text-white dark:text-white mb-2 font-subtitle">
                  Innovation
                </h4>
                <p className="!text-white dark:text-gray-300 text-sm">
                  Adaptation constante aux besoins de nos membres
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}