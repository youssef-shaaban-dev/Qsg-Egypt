import type React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next"; // استدعاء i18n

import PageBanner from "../../components/banner/PageBanner";
import TeamSection from "./teams/TeamSection";
import AboutQuickLinks from "./whoWeAre/AboutQuickLinks";
import AshrafHero from "./teams/HeroSection";
import TeamPower from "../../components/aboutSection/TeamPower";

import { teamData } from "../../static/teamData";

import BGImage from '../../assets/about/team.png';
import BGImageAR from '../../assets/about/team-ar.png';

import PowerImage from '../../assets/about/power.png';
import PowerImageAR from '../../assets/about/Power-ar.png';

import { applyMeta, lang } from "../../utility/utility";


const Teampage: React.FC = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation(); // استدعاء الترجمة

  useEffect(() => {
    applyMeta(pathname);
  }, [pathname]);

  return (
    <>
      {/* Banner */}
      <PageBanner
        currentCrumb={'aboutUs'} // "About Us" / "من نحن"
        pageTitle={'ourTeam'} // "Our Team" / "فريقنا"
        Imageurl={lang ==='en' ? BGImage:BGImageAR}
      />

      {/* Hero Section */}
      <AshrafHero />

      {/* Team Members */}
      <TeamSection team={teamData} />

      {/* Team Power */}
      <TeamPower
        imageSrc={lang === 'en'? PowerImage : PowerImageAR}
        title={t('teamExperience')} 
       subtitle = {t('teamSubExperience')}
       subExperience={t('teamExperienceYears')}
       years={lang === 'en'? 840:840}
        // "The group’s technical and managerial years of experience"
        imageAlt={t('teamPower')}
      />

      {/* Quick Links */}
      <AboutQuickLinks />
    </>
  );
};

export default Teampage;
