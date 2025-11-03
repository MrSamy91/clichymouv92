/**
 * Génère un slug URL-friendly à partir d'une chaîne de caractères
 * Gère les caractères spéciaux français et les espaces
 *
 * @param text - Le texte à convertir en slug
 * @returns Le slug généré
 *
 * @example
 * generateSlug("AGENCE AVIVA") // "agence-aviva"
 * generateSlug("L'Esplanade Café") // "l-esplanade-cafe"
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD') // Normalise les caractères accentués
    .replace(/[\u0300-\u036f]/g, '') // Supprime les accents
    .replace(/[^a-z0-9\s-]/g, '') // Garde uniquement lettres, chiffres, espaces et tirets
    .trim()
    .replace(/\s+/g, '-') // Remplace espaces par tirets
    .replace(/-+/g, '-'); // Supprime les tirets multiples
}

/**
 * Trouve un adhérent par son slug
 *
 * @param adherents - Liste des adhérents
 * @param slug - Le slug à rechercher
 * @returns L'adhérent trouvé ou undefined
 */
export function findBySlug<T extends { slug: string }>(items: T[], slug: string): T | undefined {
  return items.find(item => item.slug === slug);
}
