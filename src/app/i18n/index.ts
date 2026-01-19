import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationVI from "./locales/vi/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  vi: {
    translation: translationVI,
  },
};

export function initI18n(initialLang: string) {
  const instance = i18n.createInstance();
  instance.use(initReactI18next).init({
    lng: initialLang,
    fallbackLng: "en",
    resources,
    react: { useSuspense: true },
  });
  return instance;
}
