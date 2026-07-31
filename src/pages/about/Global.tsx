import PageBanner from "../../components/banner/PageBanner";
import BGImage from '../../assets/Banner/mds.webp';
import BGImageAR from '../../assets/Banner/mds-ar.webp';
import AboutQuickLinks from "./whoWeAre/AboutQuickLinks";
import GlobalImage from "./../../assets/about/map.webp";
import GlobalImageAR from "./../../assets/about/map-ar.webp";
import GlobalReach from "./global/GlobalReach";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { lang } from "../../utility/utility";
import { useTranslation } from "react-i18next";

function Global() {
  const { pathname } = useLocation();
  const { t } = useTranslation(); // i18n translation hook


  useEffect(() => {
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
