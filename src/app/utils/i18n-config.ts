import { COUNTRY } from "@/app/utils/country";

export const i18n = {
  defaultLocale: COUNTRY.at(0)!.KEY,
  locales: [COUNTRY.at(0)!.KEY, COUNTRY.at(1)!.KEY],
} as const;

export type Locale = (typeof i18n)["locales"][number];
