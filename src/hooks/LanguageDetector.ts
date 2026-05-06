import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import i18n from "../i18n";

export function LanguageDetector() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/ar")) {
      i18n.changeLanguage("ar");
      document.documentElement.dir = "rtl";
    } else {
      i18n.changeLanguage("en");
      document.documentElement.dir = "ltr";
    }
  }, [location.pathname]);

  return null;
}