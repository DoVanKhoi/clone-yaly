"use client";

import { TLang } from "@/types/lang.type";
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
}

export const ThemeContextProvider: FC<IThemeContextProviderProps> = ({
  children,
}) => {
  /**
   * Language
   */
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<TLang>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("lng") as TLang) || "en";
    }
    return "en";
  });

  useLayoutEffect(() => {
    localStorage.setItem("lng", language);

    i18n
      .changeLanguage(language)
      .then(() => {
        document.documentElement.setAttribute("dir", i18n.dir());
        document.documentElement.setAttribute("lang", i18n.language);
      })
      .catch(() => {});

    // Changing the global locale doesn't affect existing instances.
    // more information: https://day.js.org/docs/en/i18n/changing-locale
    // If you want the current instances to change instantly: dayjs().locale(i18n.language)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

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
