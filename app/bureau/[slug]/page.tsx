import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { bureauMembers } from '@/lib/list-of-bureau';
import { findBySlug } from '@/lib/utils';
import { HiArrowLeft, HiGlobeAlt, HiMapPin, HiUserGroup } from 'react-icons/hi2';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Génère les paramètres statiques pour toutes les pages
export async function generateStaticParams() {
  return bureauMembers.map((member) => ({
    slug: member.slug,
  }));
}

// Génère les metadata dynamiques pour chaque membre
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = findBySlug(bureauMembers, slug);

  if (!member) {
    return {
      title: 'Membre non trouvé - ClichyMouv',
    };
  }

  const title = `${member.name} - ${member.company} de ClichyMouv | Bureau`;
  const description = `${member.name}, ${member.company} de l'association ClichyMouv. ${member.description} Membre bénévole du réseau de commerçants et entrepreneurs de Clichy-la-Garenne.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'profile',
      locale: 'fr_FR',
      siteName: 'ClichyMouv',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function BureauMemberDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const member = findBySlug(bureauMembers, slug);

  if (!member) {
    notFound();
  }

  // Structure JSON-LD pour le SEO (Schema.org Person)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: member.name,
    jobTitle: member.company,
    description: member.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Clichy-la-Garenne',
      postalCode: '92110',
      addressCountry: 'FR',
    },
    ...(member.website && { url: member.website }),
    memberOf: {
      '@type': 'Organization',
      name: 'ClichyMouv',
      url: 'https://clichymouv92.fr',
    },
  };

  return (
    <>
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen">
        {/* Breadcrumb et retour */}
        <div className="container mx-auto px-6 py-6">
          <Link
            href="/bureau"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <HiArrowLeft className="text-xl" />
            <span>Retour au bureau</span>
          </Link>
        </div>

        {/* Contenu principal */}
        <main className="container mx-auto px-6 pb-12">
          <div className="max-w-4xl mx-auto">
            {/* Card principale */}
            <div className="!bg-white/20 dark:bg-gray-800 rounded-lg shadow-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                {/* Photo */}
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <div className="relative w-40 h-40 md:w-48 md:h-48">
                    <Image
                      src={member.logo}
                      alt={`Photo de ${member.name}`}
                      fill
                      className="rounded-full object-cover shadow-lg ring-4 ring-white/20"
                      priority
                    />
                  </div>
                </div>

                {/* Informations principales */}
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl md:text-4xl font-bold text-white dark:text-white mb-3 font-title">
                    {member.name}
                  </h1>
                  <div className="inline-block bg-indigo-600/80 text-white px-4 py-2 rounded-full mb-4">
                    <div className="flex items-center gap-2">
                      <HiUserGroup className="text-xl" />
                      <span className="font-semibold">{member.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2 !text-white dark:text-gray-300">
                    <HiMapPin className="text-xl flex-shrink-0" />
                    <span>{member.address}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-white dark:text-white mb-4 font-subtitle">
                  Biographie
                </h2>
                <p className="!text-white dark:text-gray-300 text-lg leading-relaxed">
                  {member.description}
                </p>
              </div>

              {/* Site web si disponible */}
              {member.website && (
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white dark:text-white mb-4 font-subtitle">
                    En savoir plus
                  </h2>
                  <a
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg max-w-md"
                  >
                    <HiGlobeAlt className="text-2xl" />
                    <div className="text-left">
                      <div className="text-sm opacity-90">Visiter</div>
                      <div className="font-bold">Site web professionnel</div>
                    </div>
                  </a>
                </div>
              )}

              {/* Badge ClichyMouv */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="flex flex-col items-center gap-4 !text-white dark:text-gray-300">
                  <Image
                    src="/logo-samy.svg"
                    alt="ClichyMouv"
                    width={50}
                    height={50}
                    className="opacity-80"
                  />
                  <div className="text-center">
                    <p className="font-semibold mb-1">
                      Membre bénévole du bureau de <strong>ClichyMouv</strong>
                    </p>
                    <p className="text-sm opacity-80">
                      Association de 150+ commerçants et entrepreneurs unis pour dynamiser Clichy-la-Garenne
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA vers liste complète */}
            <div className="mt-8 text-center space-y-4">
              <Link
                href="/bureau"
                className="inline-block bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-lg transition-colors border border-white/20 mr-4"
              >
                Voir toute l&apos;équipe
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
