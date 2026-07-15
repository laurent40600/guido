export const SITE_URL = "https://guido.fr";
export const SITE_NAME = "Guido";

export function absoluteUrl(path: string): string {
  return path.startsWith("http") ? path : `${SITE_URL}${path}`;
}
