import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { adherents } from '@/lib/list-of-adherants';
import { findBySlug } from '@/lib/utils';
import { HiArrowLeft, HiPhone, HiGlobeAlt, HiMapPin } from 'react-icons/hi2';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Génère les paramètres statiques pour toutes les pages
export async function generateStaticParams() {
  return adherents.map((adherent) => ({
    slug: adherent.slug,
  }));
}

// Génère les metadata dynamiques pour chaque adhérent
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const adherent = findBySlug(adherents, slug);

  if (!adherent) {
    return {
      title: 'Adhérent non trouvé - ClichyMouv',
    };
  }

  const title = `${adherent.name} - ${adherent.company} à Clichy-la-Garenne | ClichyMouv`;
  const description = `${adherent.description} ${adherent.address}. ${adherent.phone ? `Tel: ${adherent.phone}.` : ''} Membre du réseau ClichyMouv.`;

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

export default async function AdherantDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const adherent = findBySlug(adherents, slug);

  if (!adherent) {
    notFound();
  }

  // Structure JSON-LD pour le SEO (Schema.org LocalBusiness)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: adherent.name,
    description: adherent.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: adherent.address.split(',')[0] || '',
      addressLocality: 'Clichy-la-Garenne',
      postalCode: '92110',
      addressCountry: 'FR',
    },
    ...(adherent.phone && { telephone: adherent.phone }),
    ...(adherent.website && { url: adherent.website }),
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
            href="/adherants"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <HiArrowLeft className="text-xl" />
            <span>Retour à l&apos;annuaire</span>
          </Link>
        </div>

        {/* Contenu principal */}
        <main className="container mx-auto px-6 pb-12">
          <div className="max-w-4xl mx-auto">
            {/* Card principale */}
            <div className="!bg-white/20 dark:bg-gray-800 rounded-lg shadow-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <div className="relative w-32 h-32 md:w-40 md:h-40">
                    <Image
                      src={adherent.logo}
                      alt={`Logo de ${adherent.name}`}
                      fill
                      className="rounded-lg object-cover shadow-lg"
                      priority
                    />
                  </div>
                </div>

                {/* Informations principales */}
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-bold text-white dark:text-white mb-3 font-title">
                    {adherent.name}
                  </h1>
                  <p className="text-xl !text-white dark:text-gray-400 mb-4">
                    {adherent.company}
                  </p>
                  <div className="flex items-start gap-2 !text-white dark:text-gray-300">
                    <HiMapPin className="text-xl mt-1 flex-shrink-0" />
                    <span>{adherent.address}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-white dark:text-white mb-4 font-subtitle">
                  À propos
                </h2>
                <p className="!text-white dark:text-gray-300 text-lg leading-relaxed">
                  {adherent.description}
                </p>
              </div>

              {/* Actions CTA */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white dark:text-white mb-4 font-subtitle">
                  Contact
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  {adherent.phone && (
                    <a
                      href={`tel:${adherent.phone}`}
                      className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      <HiPhone className="text-2xl" />
                      <div className="text-left">
                        <div className="text-sm opacity-90">Appeler</div>
                        <div className="font-bold">{adherent.phone}</div>
                      </div>
                    </a>
                  )}

                  {adherent.website && (
                    <a
                      href={adherent.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      <HiGlobeAlt className="text-2xl" />
                      <div className="text-left">
                        <div className="text-sm opacity-90">Visiter</div>
                        <div className="font-bold">Site web</div>
                      </div>
                    </a>
                  )}
                </div>

                {!adherent.phone && !adherent.website && (
                  <p className="text-gray-400 text-center italic py-4">
                    Informations de contact non disponibles
                  </p>
                )}
              </div>

              {/* Badge membre ClichyMouv */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="flex items-center justify-center gap-3 !text-white dark:text-gray-300">
                  <Image
                    src="/logo-samy.svg"
                    alt="ClichyMouv"
                    width={40}
                    height={40}
                    className="opacity-80"
                  />
                  <span className="text-sm">
                    Membre du réseau <strong>ClichyMouv</strong> • 150+ commerçants unis
                  </span>
                </div>
              </div>
            </div>

            {/* CTA vers liste complète */}
            <div className="mt-8 text-center">
              <Link
                href="/adherants"
                className="inline-block bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-lg transition-colors border border-white/20"
              >
                Découvrir tous nos adhérents
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
