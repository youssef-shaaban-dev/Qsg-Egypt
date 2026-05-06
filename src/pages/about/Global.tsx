import PageBanner from "../../components/banner/PageBanner";
import BGImage from '../../assets/Banner/mds.jpg';
import BGImageAR from '../../assets/Banner/mds-ar.png';
import AboutQuickLinks from "./whoWeAre/AboutQuickLinks";
import GlobalImage from "./../../assets/about/map.png";
import GlobalImageAR from "./../../assets/about/map-ar.png";
import GlobalReach from "./global/GlobalReach";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { applyMeta, lang } from "../../utility/utility";
import { useTranslation } from "react-i18next";

function Global() {
  const { pathname } = useLocation();
  const { t } = useTranslation(); // i18n translation hook


  useEffect(() => {
    applyMeta(pathname);
  }, [pathname]);

  return (
    <>
      {/* Page Banner */}
      <PageBanner
        currentCrumb={"aboutUs"}             // "About Us" translated
        pageTitle={"globalRepresentatives"}  // "Our Global Representatives" translated
        Imageurl={lang ==="en" ? BGImage : BGImageAR}
      />

      {/* Global Reach Section */}
      <GlobalReach
        title={t("globalReachAndNetwork")}      // optional title translation
        imageSrc={lang === 'en'?GlobalImage:GlobalImageAR}
        imageAlt={t("globalReachImageAlt")}     // accessible alt text translated
      />

      {/* Quick Links */}
      <AboutQuickLinks />
    </>
  );
}

export default Global;
