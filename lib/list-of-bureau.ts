import type { CardItem } from './types';

export type BureauMember = CardItem;

// Membres du bureau/comité dirigeant de l'association
export const bureauMembers: BureauMember[] = [
  {
    id: 7,
    name: "Ilies Ajouid",
    company: "Président",
    description: "Gérant des restaurant L'Esplanade et Le Palais.",
    website: "https://esplanadeclichy.com/",
    logo: "/images/bureau/ilies-ajouid.jpg",
    address: "Clichy-la-Garenne, 92110"
  },
  {
    id: 2,
    name: "Guillaume Ortega",
    company: "Vice-président",
    description: "Gérant de MisterBlad Encadrements.",
    website: "https://misterblad.com/",
    logo: "/images/bureau/guilaume-ortega.jpg",
    address: "Clichy-la-Garenne, 92110"
  },
  {
    id: 1,
    name: "Delphine Rizzo",
    company: "Trésorière",
    description: "Agent Immo depuis 2004 et gérante de Avantage Immobilier.",
    website: "https://avantage-immobilier.fr/",
    logo: "/images/bureau/delphine-rizzo.jpg",
    address: "Clichy-la-Garenne, 92110"
  },
  {
    id: 4,
    name: "Julien Gremy",
    company: "Secrétaire général",
    description: "Gestionnaire administratif au seins du Posto 9.",
    website: "",
    logo: "/images/bureau/julien-gremy.jpg",
    address: "Clichy-la-Garenne, 92110"
  },
  {
    id: 8,
    name: "Pascale Carrere",
    company: "Secrétaire",
    description: "Ancienne commercante à Clichy.",
    website: "",
    logo: "/images/bureau/pascale-carrere.jpg",
    address: "Clichy-la-Garenne, 92110"
  },
  {
    id: 3,
    name: "Elodie Muzzin",
    company: "Administratrice",
    description: "Coach professionnel.",
    website: "https://www.elodiemuzzin-coaching.fr/",
    logo: "/images/bureau/elodie-muzzin.jpg",
    address: "Clichy-la-Garenne, 92110"
  },
  {
    id: 5,
    name: "Jessica Da Veiga",
    company: "Administratrice",
    description: "Gérante du Restaurant Le Cap-Vert",
    website: "",
    logo: "/images/bureau/jessica-da-veiga.jpg",
    address: "Clichy-la-Garenne, 92110"
  },
  {
    id: 6,
    name: "Karine Granger",
    company: "Administratrice",
    description: "Gérante du Salon de coiffure Karine Granger.",
    website: "",
    logo: "/images/bureau/karine-granger.jpg",
    address: "Clichy-la-Garenne, 92110"
  },
  {
    id: 9,
    name: "Sandrine Mevil Blanche",
    company: "Administratrice",
    description: "Gérante de deux boutiques Léon Bulle et Léa Bulle.",
    website: "",
    logo: "/images/bureau/sandrine-mevil-blanche.jpg",
    address: "Clichy-la-Garenne, 92110"
  }
];