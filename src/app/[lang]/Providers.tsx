"use client";

import { I18nextProvider } from "react-i18next";
import { initI18n } from "@/app/i18n/index";
import { useEffect } from "react";
import { ThemeContextProvider } from "@/context/themeContext";
import { TLang } from "@/types/lang.type";

export function Providers({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: TLang;
}) {
  const i18n = initI18n(lang);

  useEffect(() => {
    localStorage.setItem("lng", lang);
  }, [lang]);

  return (
    <>
      <ThemeContextProvider lang={lang}>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      </ThemeContextProvider>
    </>
  );
}
