import React from "react";
import { motion } from "framer-motion";
import type { SeriveProps } from "../../interfaces/Components";
import { cardVariants } from "../appVariants";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { localizePath } from "../../utility/utility";

const ServiceCard: React.FC<SeriveProps> = ({ service, index }) => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
    const lang = i18n.language.startsWith("ar") ? "ar" : "en";
    
  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative group rounded-2xl overflow-hidden shadow-lg"
      role="region"
      aria-labelledby={`service-title-${index}`}
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={service.image}
          alt={`${t(`services.${service.key}.title`)}`}
          className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* Hover Overlay */}
      <div
        className="absolute inset-0 bg-white/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center text-center p-4"
        aria-hidden="true"
      >
        <div className="text-dark-red">
          <h3 id={`service-title-${index}`} className="text-xl font-semibold mb-3">
            {t(`services.${service.key}.title`)}
          </h3>
          <Link
            to={localizePath(service.link,lang)}
            className="inline-flex items-center gap-2 text-gold hover:text-gold transition-colors"
            aria-label={`${t("services.learnMore")} ${t(`services.${service.key}.title`)}`}
          >
            {t("services.learnMore")}
            <span className="rtl:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            </span>
          </Link>
        </div>
      </div>

      {/* Card Footer */}
      <div className="bg-white py-4 text-center">
        <h4
          id={`service-footer-title-${index}`}
          className="text-dark-red font-semibold text-[14px]"
        >
          {t(`services.${service.key}.title`)}
        </h4>
      </div>
    </motion.article>
  );
};

export default ServiceCard;
