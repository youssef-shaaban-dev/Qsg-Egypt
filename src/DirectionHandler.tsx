import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const DirectionHandler = () => {
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const isArabic = location.pathname.startsWith("/ar");

    const lang = isArabic ? "ar" : "en";

    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }

    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;

    if (lang === "ar") {
      document.body.classList.add("rtl");
    } else {
      document.body.classList.remove("rtl");
    }
  }, [location.pathname]);

  return null;
};

export default DirectionHandler;