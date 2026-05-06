import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Chairman from "../../../assets/Staff Photos/Ashraf-Yassin.png";
import { ArabicNumber } from "../../../utility/ArabicNumber";

// Lazy-loaded Title
const SectionTitle = lazy(() => import("../../../components/aboutSection/SectionTitle"));

const Loader: React.FC = () => (
  <div
    className="flex justify-center py-10"
    role="status"
    aria-live="polite"
    aria-label="Loading section content"
  >
    <div className="w-6 h-6 border-4 border-navy border-t-transparent rounded-full animate-spin" />
  </div>
);

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="relative py-20 bg-off-white overflow-hidden"
      aria-labelledby="chairman-message"
      role="region"
    >
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <Suspense fallback={<Loader />}>
          <SectionTitle title={t("about.chairmanMessage")} className="text-center" aria-level={2} />
        </Suspense>

        {/* Two-column Layout */}
        <div
          className="flex flex-col lg:flex-row rtl:lg:flex-row-reverse items-center gap-10 mt-10"
          role="group"
          aria-label={t("about.chairmanIntroduction")}
        >
          {/* Chairman Image */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            role="img"
            aria-label={t("about.chairmanPortrait")}
          >
            <div className="flex justify-center">
              <img
                src={Chairman}
                alt={t("about.chairmanAlt")}
                className="max-w-sm w-full h-auto rounded-xl shadow-2xl object-contain"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="flex-1 text-gold leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            aria-labelledby="chairman-message-heading"
            role="article"
          >
            <h3
              id="chairman-message-heading"
              className="sr-only"
            >
              {t("about.chairmanMessageHeading")}
            </h3>

            <p className="mb-4">{t("about.paragraph1")}</p>
            <p className="mb-4">
              <ArabicNumber text={t("about.paragraph2")} />
            </p>
            <p className="mb-4">{t("about.paragraph3")}</p>
            <p><b>{t("about.paragraph4")}</b></p>

            <p
              className="text-dark-red mt-6 font-bold text-lg"
              aria-label={t("about.chairmanSignature")}
            >
              {t("about.chairmanName")} <br />
              <span className="text-dark-red text-base">
                {t("about.chairmanTitle")}
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
