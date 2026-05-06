import React, { useRef, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import ISO from '../../../assets/about/ISO.jpeg';


const CompanyInfo: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const workMethodology = t("company.workMethodology", { returnObjects: true }) as string[];
  const achievements = t("company.achievements", { returnObjects: true }) as string[];

  return (
    <section
      ref={sectionRef}
      className="text-dark-red py-16 lg:py-24 overflow-hidden"
      role="region"
      aria-labelledby="company-info-heading"
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* LEFT SIDE — Content */}
        <div className="space-y-10" role="article" aria-labelledby="company-info-heading">
          {/* Company Overview */}
          <div>
            <h2 id="company-info-heading" className="text-3xl lg:text-4xl font-bold mb-4">
              {t("company.title")}
            </h2>
            <p className="text-base lg:text-lg leading-relaxed text-gold">
              {t("company.overview")}
            </p>
          </div>

          {/* Mission */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold mb-3">{t("company.missionTitle")}</h3>
            <p className="text-base lg:text-lg leading-relaxed text-gold">
              {t("company.mission")}
            </p>
          </div>

          {/* Work Methodology */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold mb-3">{t("company.workMethodologyTitle")}</h3>
            <ul className="space-y-2 list-disc pl-6" aria-label={t("company.workMethodologyTitle")}>
              {workMethodology.map((item, index) => (
                <li
                  key={index}
                  className={`flex items-start space-x-3 text-base lg:text-lg text-gold transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 0.15}s` }}
                >
                  <Icon
                    icon="mdi:check-circle"
                    className="mt-1 text-dark-red flex-shrink-0 w-5 h-5"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Objectives */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold mb-3">{t("company.objectivesTitle")}</h3>
            <p className="text-base lg:text-lg leading-relaxed text-gold">
              {t("company.objectives")}
            </p>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold mb-3">{t("company.achievementsTitle")}</h3>
            <ul className="space-y-2 list-disc pl-6" aria-label={t("company.achievementsTitle")}>
              {achievements.map((item, index) => (
                <li
                  key={index}
                  className={`flex items-start space-x-3 text-base lg:text-lg text-gold transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 0.15}s` }}
                >
                  <Icon
                    icon="mdi:check-circle"
                    className="mt-1 text-dark-red flex-shrink-0 w-5 h-5"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE — Image */}
        <div
          className={`relative w-full flex justify-center transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-95 translate-x-10"
          }`}
        >
          <img
            src={ISO}
            alt={t("company.isoImageAlt")}
            className="rounded-2xl shadow-lg object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
