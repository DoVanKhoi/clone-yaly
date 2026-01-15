"use client";

import { TLang } from "@/types/lang.type";
import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { useTranslation } from "react-i18next";

export interface IThemeContextProps {
  language: TLang;
  setLanguage: Dispatch<SetStateAction<TLang>>;
}

const ThemeContext = createContext<IThemeContextProps>(
  {} as IThemeContextProps,
);

interface IThemeContextProviderProps {
  children: ReactNode;
  lang: TLang;
}

export const ThemeContextProvider: FC<IThemeContextProviderProps> = ({
  children,
  lang,
}) => {
  /**
   * Language
   */
  const { i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const [language, setLanguage] = useState<TLang>(lang);

  useLayoutEffect(() => {
    // persist
    localStorage.setItem("lng", language);

    // update i18n
    i18n
      .changeLanguage(language)
      .then(() => {
        document.documentElement.setAttribute("dir", i18n.dir());
        document.documentElement.setAttribute("lang", i18n.language);

        // set cookies so that we can use it in proxy
        document.cookie = `lng=${language}; path=/`;
      })
      .catch(() => {});

    // Changing the global locale doesn't affect existing instances.
    // more information: https://day.js.org/docs/en/i18n/changing-locale
    // If you want the current instances to change instantly: dayjs().locale(i18n.language)

    // update URL: replace first segment with new language
    const segments = pathname.split("/");
    segments[1] = language;
    const newPath = segments.join("/");
    if (newPath !== pathname) {
      router.push(newPath);
    }
  }, [i18n, language, pathname, router]);

  const values: IThemeContextProps = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language],
  );

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
