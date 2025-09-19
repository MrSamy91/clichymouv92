import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projets - Clichymouv92',
  description: 'Découvrez les projets et initiatives de l\'association Clichymouv92',
};

interface Project {
  id: number;
  title: string;
  status: 'En cours' | 'Terminé' | 'À venir';
  category: string;
  description: string;
  longDescription: string;
  startDate: string;
  endDate?: string;
  participants?: number;
  image: string;
}

async function getProjects(): Promise<Project[]> {
  return [
    {
      id: 1,
      title: "Clichy en Mouvement",
      status: "En cours",
      category: "Sport communautaire",
      description: "Programme d'activités sportives gratuites dans les parcs de la ville.",
      longDescription: "Un programme ambitieux qui propose des cours de fitness, yoga et danse en plein air tous les week-ends. Accessible à tous les niveaux, ce projet vise à démocratiser l'accès au sport dans notre commune.",
      startDate: "2024-03-01",
      participants: 150,
      image: "🏃‍♀️"
    },
    {
      id: 2,
      title: "Seniors Actifs",
      status: "En cours",
      category: "Bien-être",
      description: "Activités adaptées pour maintenir la forme et le lien social chez les seniors.",
      longDescription: "Programme spécialement conçu pour les personnes de plus de 60 ans, incluant gym douce, marche nordique et ateliers mémoire. L'objectif est de favoriser le vieillissement actif et de lutter contre l'isolement.",
      startDate: "2024-01-15",
      participants: 80,
      image: "👥"
    },
    {
      id: 3,
      title: "Sport & Études",
      status: "À venir",
      category: "Jeunesse",
      description: "Partenariat avec les écoles locales pour intégrer plus de sport dans l'éducation.",
      longDescription: "Collaboration avec les établissements scolaires de Clichy pour proposer des activités périscolaires sportives et éducatives. Comprend des initiations à de nouveaux sports et des programmes de sensibilisation à la nutrition.",
      startDate: "2024-09-01",
      image: "🎓"
    },
    {
      id: 4,
      title: "Défi Solidaire",
      status: "Terminé",
      category: "Événement",
      description: "Course caritative pour soutenir les associations locales.",
      longDescription: "Événement caritatif organisé en partenariat avec d'autres associations de la ville. Plus de 300 participants ont couru pour récolter des fonds destinés aux actions sociales locales.",
      startDate: "2023-10-15",
      endDate: "2023-10-15",
      participants: 320,
      image: "🏃‍♂️"
    },
    {
      id: 5,
      title: "Bien-être au Travail",
      status: "En cours",
      category: "Entreprise",
      description: "Sessions de relaxation et sport pour les entreprises locales.",
      longDescription: "Programme B2B proposant des interventions dans les entreprises de Clichy. Pause détente, cours de yoga et sensibilisation aux troubles musculo-squelettiques pour améliorer le bien-être au travail.",
      startDate: "2024-02-01",
      participants: 200,
      image: "💼"
    },
    {
      id: 6,
      title: "Festival du Mouvement",
      status: "À venir",
      category: "Événement",
      description: "Grand festival annuel célébrant le sport et le bien-être.",
      longDescription: "Événement phare de l'association prévu pour l'été 2024. Trois jours de démonstrations, ateliers, conférences et spectacles autour du thème du mouvement et de la santé. Ouvert à tous gratuitement.",
      startDate: "2024-07-15",
      endDate: "2024-07-17",
      image: "🎪"
    }
  ];
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  const activeProjects = projects.filter(p => p.status === 'En cours');
  const completedProjects = projects.filter(p => p.status === 'Terminé');
  const upcomingProjects = projects.filter(p => p.status === 'À venir');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En cours':
        return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
      case 'Terminé':
        return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200';
      case 'À venir':
        return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200';
      default:
        return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200';
    }
  };

  const ProjectCard = ({ project }: { project: Project }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl">{project.image}</div>
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(project.status)}`}>
          {project.status}
        </span>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {project.title}
      </h3>
      
      <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-3">
        {project.category}
      </p>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        {project.description}
      </p>
      
      <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
        <p>📅 Début: {new Date(project.startDate).toLocaleDateString('fr-FR')}</p>
        {project.endDate && (
          <p>🏁 Fin: {new Date(project.endDate).toLocaleDateString('fr-FR')}</p>
        )}
        {project.participants && (
          <p>👥 Participants: {project.participants}</p>
        )}
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
        {project.longDescription}
      </p>
    </div>
  );

  return (
    <div>
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-8 text-center">
            Nos Projets
          </h2>

          <div className="text-center mb-12">
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Découvrez les initiatives et projets que nous menons pour promouvoir 
              le mouvement et le bien-être dans notre communauté.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {activeProjects.length} Projets Actifs
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                En cours de réalisation
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <div className="text-3xl mb-4">✅</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {completedProjects.length} Projets Terminés
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Réalisés avec succès
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <div className="text-3xl mb-4">⏳</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {upcomingProjects.length} Projets À Venir
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                En préparation
              </p>
            </div>
          </div>

          {activeProjects.length > 0 && (
            <div className="mb-12">
              <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
                Projets En Cours
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}

          {upcomingProjects.length > 0 && (
            <div className="mb-12">
              <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
                Projets À Venir
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}

          {completedProjects.length > 0 && (
            <div className="mb-12">
              <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
                Projets Terminés
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {completedProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Proposer un Projet
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Vous avez une idée de projet en lien avec nos activités ? 
              N'hésitez pas à nous la soumettre !
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Nous contacter
            </a>
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