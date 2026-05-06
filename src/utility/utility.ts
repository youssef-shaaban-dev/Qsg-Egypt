import type { Lang } from "../interfaces/Components";
import { pageMetadata } from "../static/metadata";

export function applyMeta(path: string) {
  // remove /ar prefix
  const cleanPath = path.replace(/^\/ar/, "") || "/";

  const meta = pageMetadata.find(p => p.path === cleanPath);

  if (!meta) return;

  // detect lang from URL
  const isArabic = path.startsWith("/ar");
  const lang = isArabic ? "ar" : "en";

  const title = typeof meta.title === "string"
    ? meta.title
    : meta.title[lang];

  const description = typeof meta.description === "string"
    ? meta.description
    : meta.description[lang];

  document.title = title;

  const desc = document.querySelector('meta[name="description"]');
  const ogDesc = document.querySelector('meta[property="og:description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogUrl = document.querySelector('meta[property="og:url"]');

  if (desc) desc.setAttribute("content", description);
  if (ogDesc) ogDesc.setAttribute("content", description);
  if (ogTitle) ogTitle.setAttribute("content", title);

  // مهم: خلي الرابط حسب اللغة
  const fullUrl = `https://www.qsgegypt.net${
    lang === "ar" ? `/ar${cleanPath}` : cleanPath
  }`;

  if (ogUrl) ogUrl.setAttribute("content", fullUrl);
}

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
