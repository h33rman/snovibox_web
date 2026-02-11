import { fr } from "./fr";
import { en } from "./en";

export type Translations = typeof fr;
export type Locale = "fr" | "en";

export const translations: Record<Locale, Translations> = { fr, en };
export { fr, en };
