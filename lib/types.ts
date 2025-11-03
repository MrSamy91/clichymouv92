// Interface commune pour les cartes (adhérents et bureau)
export interface CardItem {
  id: number;
  name: string;
  company: string;
  description: string;
  website?: string;
  phone?: string;
  logo: string;
  address: string;
  slug: string; // Slug pour URL individuelle
}