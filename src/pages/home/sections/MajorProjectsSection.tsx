import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ProjectCarousel from "../../../components/majorProjectsSection/ProjectCarousel";
import { sectionVariants } from "../../../components/appVariants";

const MajorProjectsSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      id="major-projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      aria-labelledby="major-projects-title"
      role="region"
      className="relative bg-cover bg-center py-16 overflow-hidden"
      style={{
        backgroundImage:
          'url("http://www.domeint.com/templates/project/image/ssddf.jpg")',
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]" aria-hidden="true"></div>

      <div className="relative container mx-auto px-4 z-10">
        {/* Section Title */}
        <motion.div
          variants={sectionVariants}
          className="text-left mb-12"
        >
          <a
            href="#major-projects"
            className="transition-colors duration-300 text-dark-red hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold rounded"
            aria-label={t("majorProjects.readMore")}
          >
            <h3
              id="major-projects-title"
              className="text-3xl md:text-4xl font-bold leading-tight"
            >
              {t("majorProjects.heading")}
            </h3>
          </a>

          {/* Accent Line */}
          <div
            className="flex items-center mt-4 space-x-2"
            aria-hidden="true"
          >
            <span className="h-1 w-8 bg-gold" />
            <span className="h-2 w-2 bg-gold rounded-full" />
            <span className="h-2 w-2 bg-gold rounded-full" />
            <span className="h-2 w-2 bg-gold rounded-full" />
          </div>
        </motion.div>

        {/* Carousel */}
        <ProjectCarousel />
      </div>
    </motion.section>
  );
};

export default MajorProjectsSection;
