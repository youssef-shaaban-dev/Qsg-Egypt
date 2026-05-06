import React from "react";
import { motion } from "framer-motion";
import { sectionVariants, cardVariants } from "../../../components/appVariants";
import { aboutCards } from "../../../static/aboutData";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { localizePath } from "../../../utility/utility";

const MotionLink = motion.create(Link);

const AboutQuickLinks: React.FC = () => {
  const { t } = useTranslation();
const { i18n } = useTranslation();
  const lang = i18n.language.startsWith("ar") ? "ar" : "en";

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-20 bg-off-white"
      role="region"
      aria-labelledby="about-quick-links-heading"
    >
      <div className="container mx-auto px-6">
        {/* Hidden Heading for Screen Readers */}
        <h2 id="about-quick-links-heading" className="sr-only">
          {t("about.quickLinksHeading")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutCards.map((card, i) => (
            <MotionLink
              key={card.key}
              to={localizePath(card.link,lang)}
              rel="noopener noreferrer"
              variants={cardVariants}
              custom={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl overflow-hidden group shadow-lg bg-white hover:shadow-2xl transition-shadow"
              aria-label={t("about.navigateTo", { title: t(`aboutCards.${card.key}`) })}
            >
              {/* Background Image */}
              <img
                src={lang ==='ar'?card.imageAR:card.image}
                alt={t(`aboutCards.${card.key}`)}
                className="w-full h-64 object-cover ltr:object-right rtl:object-left transform transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500"
                aria-hidden="true"
              />

              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6 text-white pointer-events-none">
                <h3 className="text-2xl font-semibold leading-snug mb-2">
                  {t(`aboutCards.${card.key}`)}
                </h3>

                <div className="flex items-center text-white font-medium space-x-2 group-hover:translate-x-1 transition-transform duration-300">
                  <span>{t("about.readMore")}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="10"
                    viewBox="0 0 26 10"
                    aria-hidden="true"
                    className="rtl:rotate-180"
                  >
                    <path
                      d="M5,0l5,6H0Z"
                      transform="translate(26) rotate(90)"
                      fill="#ffffff"
                    />
                    <rect
                      width="20"
                      height="2"
                      transform="translate(0 4)"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
              </div>
            </MotionLink>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AboutQuickLinks;
