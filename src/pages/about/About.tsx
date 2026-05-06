import type React from "react";
import PageBanner from "../../components/banner/PageBanner";
import AboutSectionFour from "./whoWeAre/AboutSectionFour";
import AboutQuickLinks from "./whoWeAre/AboutQuickLinks";
import CompanyInfo from "./whoWeAre/CompanyInfo";

import BGImage from '../../assets/about/company.png';
import BGImageAR from '../../assets/about/company-ar.png';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { applyMeta, lang } from "../../utility/utility";

const About: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    applyMeta(pathname);
  }, [pathname]);

  return (
    <>
      {/* Page Banner */}
      <PageBanner
        currentCrumb={"aboutUs"}       // "About Us" translated
        pageTitle={"company.title"}          // "The Company" translated
        Imageurl={lang === 'en' ? BGImage : BGImageAR}
      />

      {/* About Sections */}
      <AboutSectionFour />
      <CompanyInfo />
      <AboutQuickLinks />
    </>
  );
};

export default About;
