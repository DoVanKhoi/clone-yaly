import { TLang } from "@/types/lang.type";

export type ILang = {
  [key in TLang]: {
    text: string;
    lng: TLang;
  };
};

const LANG: ILang = {
  en: {
    text: "English",
    lng: "en",
  },
  vi: {
    text: "Tiếng Việt",
    lng: "vi",
  },
};

export default LANG;
