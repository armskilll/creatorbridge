/**
 * Fichier d'utilitaires pour CreatorBridge
 */

/**
 * Formate un nombre en format lisible
 * Ex: 1000 -> 1k, 1000000 -> 1M
 */
export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  }
  return num.toString();
}

/**
 * Formate une date en format lisible
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

/**
 * Tronque un texte à une longueur maximale
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

/**
 * Calcule le temps de lecture en minutes
 */
export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Génère un slug à partir d'un titre
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Enlève les caractères spéciaux
    .replace(/\s+/g, '-') // Remplace les espaces par des tirets
    .replace(/--+/g, '-'); // Évite les tirets multiples
}

/**
 * Crée un ID unique
 */
export function generateUniqueId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

/**
 * Vérifie si un objet est vide
 */
export function isEmptyObject(obj: Record<string, any>): boolean {
  return Object.keys(obj).length === 0;
}

/**
 * Récupère un élément aléatoire d'un tableau
 */
export function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Formate un prix
 */
export function formatPrice(price: number, currency: string = '€'): string {
  return `${price.toFixed(2)} ${currency}`;
}

/**
 * Calcule le pourcentage
 */
export function calculatePercentage(value: number, total: number): number {
  return (value / total) * 100;
}
