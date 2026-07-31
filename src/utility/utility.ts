import type { Lang } from "../interfaces/Components";


const getLang = () => {
  if (location.pathname.startsWith("/ar")) {
      return 'ar';
    }
    return 'en';
};

export const lang: Lang = getLang() as Lang; // if using react-i18next



export const localizePath = (path: string, lang: string) => {
  return lang === "ar" ? `/ar${path}` : path;
};
