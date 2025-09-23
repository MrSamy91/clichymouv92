import { Metadata } from 'next';
import HeroSection from '@/components/hero-section';

export const metadata: Metadata = {
  title: 'Événements & Projets - ClichyMouv',
  description: 'Découvrez les événements et initiatives du réseau ClichyMouv : Journées commerçants, animations thématiques, Festival du Commerce Local et moments de partage.',
};

interface Event {
  id: number;
  title: string;
  status: 'Récurrent' | 'Annuel' | 'Saisonnier' | 'Mensuel';
  category: string;
  description: string;
  longDescription: string;
  frequency: string;
  participants?: string;
  image: string;
}

async function getEvents(): Promise<Event[]> {
  return [
    {
      id: 1,
      title: "Les Journées Clichy Mouv'",
      status: "Récurrent",
      category: "Événements Commerçants",
      description: "Promotions exclusives, démonstrations, ateliers, dégustations et rencontres avec les commerçants.",
      longDescription: "Événements récurrents organisés pour mettre en avant nos commerçants adhérents. Ces journées permettent aux habitants de découvrir les produits et services locaux à travers des promotions spéciales, des démonstrations en direct et des moments de convivialité.",
      frequency: "Plusieurs fois par an",
      participants: "150+ commerçants participants",
      image: "🛍️"
    },
    {
      id: 2,
      title: "Animations Thématiques",
      status: "Saisonnier",
      category: "Événements Festifs",
      description: "Marchés nocturnes, journées Noël, Halloween, Téléthon, Loto enfants avec lots commerçants.",
      longDescription: "Animations organisées tout au long de l&apos;année selon les saisons et événements spéciaux. Marchés nocturnes l&apos;été, animations de Noël et Halloween, participation au Téléthon, organisation de lotos pour les enfants avec de nombreux lots offerts par nos commerçants partenaires.",
      frequency: "Selon les saisons",
      participants: "Toute la famille",
      image: "🎄"
    },
    {
      id: 3,
      title: "Festival du Commerce Local",
      status: "Annuel",
      category: "Grand Événement",
      description: "LE grand rendez-vous annuel avec stands extérieur, concerts, animations enfants et food trucks.",
      longDescription: "L&apos;événement phare de ClichyMouv ! Un festival d&apos;envergure avec des stands en extérieur permettant aux commerçants de présenter leurs produits et services, des concerts, des animations spécialement conçues pour les enfants, des food trucks et une ambiance festive pour toute la famille.",
      frequency: "Une fois par an",
      participants: "Toute la ville de Clichy",
      image: "🎪"
    },
    {
      id: 4,
      title: "Moments de Rencontre & Partage",
      status: "Mensuel",
      category: "Networking & Solidarité",
      description: "Apéro-réunions collaboratives, événements commerçants-clients, actions solidaires.",
      longDescription: "Événements dédiés au networking et à la cohésion du réseau. Apéros-réunions dans une ambiance collaborative et conviviale, événements mixtes commerçants-clients pour créer du lien, et actions solidaires menées en partenariat avec les associations locales.",
      frequency: "Mensuellement",
      participants: "Réseau ClichyMouv & partenaires",
      image: "🤝"
    },
    {
      id: 5,
      title: "Développement du Réseau",
      status: "Récurrent",
      category: "Croissance & Accompagnement",
      description: "Accompagnement des nouveaux adhérents et actions pour atteindre 200+ membres.",
      longDescription: "Actions continues pour développer et renforcer notre réseau de commerçants et entrepreneurs. Avec déjà plus de 150 membres, notre objectif est de créer une communauté encore plus large et solidaire, en accompagnant chaque nouvel adhérent dans son intégration.",
      frequency: "En continu",
      participants: "150+ commerçants déjà unis",
      image: "📈"
    },
    {
      id: 6,
      title: "Actions de Communication",
      status: "Récurrent",
      category: "Visibilité & Promotion",
      description: "Mise en avant sur réseaux sociaux, site web et campagnes promotionnelles.",
      longDescription: "Programme de communication pour valoriser nos adhérents : mise en avant sur nos réseaux sociaux, présentation sur notre site web, campagnes promotionnelles ciblées. L'objectif est d'offrir une visibilité accrue à chaque commerçant du réseau.",
      frequency: "Quotidiennement",
      participants: "Tous les adhérents",
      image: "📱"
    }
  ];
}

export default async function ProjectsPage() {
  const events = await getEvents();

  const recurringEvents = events.filter(e => e.status === 'Récurrent');
  const annualEvents = events.filter(e => e.status === 'Annuel');
  const seasonalEvents = events.filter(e => e.status === 'Saisonnier');
  const monthlyEvents = events.filter(e => e.status === 'Mensuel');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Récurrent':
        return '!bg-green-100 dark:bg-green-900 !text-green-800 dark:text-green-200';
      case 'Annuel':
        return '!bg-purple-100 dark:bg-purple-900 !text-purple-800 dark:text-purple-200';
      case 'Saisonnier':
        return '!bg-orange-100 dark:bg-orange-900 !text-orange-800 dark:text-orange-200';
      case 'Mensuel':
        return '!bg-blue-100 dark:bg-blue-900 !text-blue-800 dark:text-blue-200';
      default:
        return '!bg-gray-100 dark:bg-gray-700 !text-gray-800 dark:text-gray-200';
    }
  };

  const EventCard = ({ event }: { event: Event }) => (
    <div className="!bg-white/20 dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl">{event.image}</div>
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(event.status)}`}>
          {event.status}
        </span>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-subtitle">
        {event.title}
      </h3>
      
      <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-3">
        {event.category}
      </p>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        {event.description}
      </p>
      
      <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
        <p>⏰ Fréquence: {event.frequency}</p>
        {event.participants && (
          <p>👥 Participants: {event.participants}</p>
        )}
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
        {event.longDescription}
      </p>
    </div>
  );

  return (
    <div>
      <HeroSection 
        description="Découvrez les événements et initiatives du réseau ClichyMouv pour dynamiser le commerce local et créer du lien entre commerçants et habitants."
        showLogo={true}
      />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">

          {/* Section Statistiques du Réseau */}
          <div className="grid lg:grid-cols-4 gap-6 mb-12">
            <div className="!bg-white/20 dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <div className="text-3xl mb-4">🏪</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-subtitle">
                150+
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Commerçants & Entrepreneurs unis
              </p>
            </div>

            <div className="!bg-white/20 dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <div className="text-3xl mb-4">📅</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-subtitle">
                {recurringEvents.length} Événements
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Récurrents toute l&apos;année
              </p>
            </div>

            <div className="!bg-white/20 dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <div className="text-3xl mb-4">🎪</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-subtitle">
                {annualEvents.length} Festival
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Grand rendez-vous annuel
              </p>
            </div>

            <div className="!bg-white/20 dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-subtitle">
                4 Missions
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Réseau • Événements • Promotion • Soutien
              </p>
            </div>
          </div>

          {/* Événements Récurrents */}
          {recurringEvents.length > 0 && (
            <div className="mb-12">
              <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center font-subtitle">
                Événements Récurrents
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recurringEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          )}

          {/* Festival Annuel */}
          {annualEvents.length > 0 && (
            <div className="mb-12">
              <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center font-subtitle">
                Grand Événement Annuel
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {annualEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          )}

          {/* Animations Saisonnières */}
          {seasonalEvents.length > 0 && (
            <div className="mb-12">
              <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center font-subtitle">
                Animations Saisonnières
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {seasonalEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          )}

          {/* Rencontres Mensuelles */}
          {monthlyEvents.length > 0 && (
            <div className="mb-12">
              <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center font-subtitle">
                Rencontres & Networking
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {monthlyEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          )}

          {/* Section d'engagement - Rejoindre le réseau */}
          <div className="!bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-8 text-center text-white">
            <h3 className="text-3xl font-semibold mb-4 font-subtitle">
              Rejoignez le Mouvement !
            </h3>
            <p className="text-lg leading-relaxed mb-6 opacity-90">
              Plus de 150 commerçants et entrepreneurs nous font déjà confiance.<br/>
              <strong>4 raisons de nous rejoindre :</strong> Visibilité accrue • Participation aux événements • Soutien quotidien • Réseau solidaire
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-block bg-white text-indigo-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Nous rejoindre
              </a>
              <a 
                href="/adherants" 
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-indigo-600 font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Voir nos adhérents
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}