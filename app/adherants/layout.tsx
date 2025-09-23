import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adhérents - ClichyMouv',
  description: 'Découvrez nos adhérents commerçants et entrepreneurs engagés dans notre démarche d\'entraide locale',
};

export default function AdherantsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}