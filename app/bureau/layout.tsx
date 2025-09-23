import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bureau - ClichyMouv',
  description: 'Découvrez les membres du bureau qui dirigent et organisent ClichyMouv',
};

export default function BureauLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}