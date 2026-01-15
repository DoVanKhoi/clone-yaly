import { TLang } from "@/types/lang.type";

export const LOCALES = [
  { id: 1, key: "en", label: "English", value: "en-US", currency: "USD" },
  { id: 2, key: "vi", label: "Tiếng Việt", value: "vi-VN", currency: "VND" },
] as const;

export const LocaleConfig = {
  defaultLocale: LOCALES[0].key,
  locales: LOCALES.map((l) => l.key),
  label: LOCALES.reduce((acc, l) => {
    acc[l.key] = { text: l.label, lng: l.key };
    return acc;
  }, {} as Record<TLang, { text: string; lng: TLang }>),
} as const;
