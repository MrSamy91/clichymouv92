import { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/hero-section';

export const metadata: Metadata = {
  title: 'À propos - ClichyMouv',
  description: 'Découvrez le réseau ClichyMouv : 150+ commerçants et entrepreneurs unis pour dynamiser le commerce local à Clichy-la-Garenne.',
};

export default async function AboutPage() {
  return (
    <div>
      <HeroSection 
        description="Le réseau professionnel qui fait bouger Clichy ! Découvrez nos missions, nos actions et les valeurs qui unissent plus de 150 commerçants et entrepreneurs."
        showLogo={true}
      />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">

          {/* Notre Mission */}
          <div className="!bg-white/20 dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 text-center font-subtitle">
              Au cœur de la vie locale
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  <strong>Clichy Mouv&apos; est le réseau professionnel qui fait bouger sa ville.</strong> Commerçants, 
                  entrepreneurs, artisans, professions libérales : ensemble, nous rendons 
                  Clichy plus dynamique, attractive et conviviale.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Nous accompagnons nos adhérents et portons leurs projets locaux avec des actions 
                  concrètes, innovantes et fédératrices. Notre ambition : faire aimer Clichy à ses 
                  habitants en leur offrant une vraie richesse commerciale et entrepreneuriale.
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🏪</div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-subtitle">
                  Commerce local dynamique
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Une communauté entreprenante et solidaire
                </p>
              </div>
            </div>
          </div>

          {/* Nos Actions */}
          <div className="!bg-white/20 dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 text-center font-subtitle">
              Nos Actions Concrètes
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="text-4xl mb-4">📱</div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 font-subtitle">
                  Visibilité Accrue
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Mise en avant sur nos réseaux sociaux, site web et campagnes
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-4">🎪</div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 font-subtitle">
                  Événements Locaux
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Marchés, journées à thème, festival et animations
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-4">🤝</div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 font-subtitle">
                  Soutien Quotidien
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Conseils, contacts, idées, solutions dans le réseau
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-4">💼</div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 font-subtitle">
                  Synergies Business
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Quand les énergies se rencontrent, les opportunités naissent
                </p>
              </div>
            </div>
          </div>

          {/* Notre Réseau */}
          <div className="!bg-white/20 dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 text-center font-subtitle">
              Notre Réseau en Chiffres
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 font-subtitle">
                  Secteurs Représentés
                </h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                  <li>• Restaurants & Alimentation</li>
                  <li>• Commerce & Services</li>
                  <li>• Professions libérales</li>
                  <li>• Artisans & Créateurs</li>
                  <li>• Beauté & Bien-être</li>
                  <li>• Immobilier & Finance</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 font-subtitle">
                  Notre Impact
                </h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-indigo-50 dark:bg-indigo-900 rounded-lg p-4">
                    <div className="text-2xl font-bold !text-indigo-600">150+</div>
                    <div className="text-sm !text-white dark:text-gray-300">Commerçants unis</div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900 rounded-lg p-4">
                    <div className="text-2xl font-bold !text-green-600">10+</div>
                    <div className="text-sm !text-white dark:text-gray-300">Événements annuels</div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900 rounded-lg p-4">
                    <div className="text-2xl font-bold !text-purple-600">4</div>
                    <div className="text-sm !text-white dark:text-gray-300">Partenaires publics</div>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900 rounded-lg p-4">
                    <div className="text-2xl font-bold !text-orange-600">100%</div>
                    <div className="text-sm !text-white dark:text-gray-300">Local & solidaire</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nos Missions */}
          <div className="!bg-white/20 dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 text-center font-subtitle">
              Nos Missions : Dynamisme, Proximité, Solidarité
            </h3>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 border !border-indigo-200/50 dark:border-indigo-700 rounded-lg bg-indigo-50/50 dark:bg-indigo-900/20">
                <div className="text-4xl mb-4">📍</div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 font-subtitle">
                  Valoriser le Commerce Local
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  En adhérant, vous intégrez une communauté active et conviviale qui partage la même 
                  ambition : faire aimer Clichy à ses habitants en leur offrant une vraie richesse.
                </p>
              </div>
              <div className="text-center p-6 border !border-purple-200/50 dark:border-purple-700 rounded-lg bg-purple-50/50 dark:bg-purple-900/20">
                <div className="text-4xl mb-4">🛍️</div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 font-subtitle">
                  Dynamiser la Vie Clichoise
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Nos événements attirent, rassemblent et font rayonner le commerce local ! 
                  Des Journées ClichyMouv au Festival du Commerce, nous créons l&apos;animation.
                </p>
              </div>
              <div className="text-center p-6 border !border-green-200/50 dark:border-green-700 rounded-lg bg-green-50/50 dark:bg-green-900/20">
                <div className="text-4xl mb-4">🤝</div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 font-subtitle">
                  Créer du Lien et des Synergies
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Quand les énergies se rencontrent, les synergies business naissent et ouvrent 
                  la voie à des opportunités inédites entre nos membres.
                </p>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="mt-10 text-center">
              <div className="!bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-6 text-white">
                <h4 className="text-xl font-semibold mb-3">
                  Rejoignez plus de 150 commerçants et entrepreneurs déjà unis !
                </h4>
                <p className="mb-4 opacity-90">
                  4 piliers nous rassemblent : <strong>Réseau • Événements • Promotion • Soutien</strong>
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-indigo-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Rejoindre le mouvement
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}