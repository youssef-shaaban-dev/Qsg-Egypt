import React from "react";
import { motion } from "framer-motion";
import { sectionVariants } from "../../../components/appVariants";
import Logo from "../../../assets/logo-qsg-1.png";
import { useTranslation } from "react-i18next";
import { ArabicNumber } from "../../../utility/ArabicNumber";

const AboutSectionFour: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative py-16 bg-off-white"
      style={{ paddingBottom: 0 }}
      role="region"
      aria-labelledby="about-qsg-heading"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Left Image */}
          <motion.div
            variants={sectionVariants}
            className="flex-1"
            role="img"
            aria-label={t("aboutQSG.heading")}
          >
            <div className="flex justify-center">
              <img
                src={Logo}
                alt={t("aboutQSG.heading")}
                className="rounded-2xl shadow-lg object-cover w-1/2 h-auto"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            variants={sectionVariants}
            className="flex-1 text-dark-red"
            role="article"
            aria-labelledby="about-qsg-heading"
          >
            <div className="mb-6">
              <h2
                id="about-qsg-heading"
                className="text-3xl md:text-4xl font-bold text-dark-red mb-6"
              dangerouslySetInnerHTML={{__html:t("aboutQSG.heading")}}>
                
              </h2>
            </div>

            <div className="text-gold leading-relaxed space-y-4">
              <p><ArabicNumber text={t("aboutQSG.description1")} /></p>
              <p>{t("aboutQSG.description2")}</p>

              <ol className="list-decimal rtl:decimal-arabic px-4 m-0 mb-3 text-dark-red">
                {(t("aboutQSG.activities", { returnObjects: true }) as string[]).map((act, idx) => (
                  <li key={idx}>{act}</li>
                ))}

              </ol>

              <p>{t("aboutQSG.description3")}</p>
              <p>{t("aboutQSG.description4")}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default AboutSectionFour;
