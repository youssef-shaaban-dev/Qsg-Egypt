import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import imageAshraf from "../../../assets/Staff Photos/Ashraf-Yassin.png";
import { ArabicNumber } from "../../../utility/ArabicNumber";

const AshrafHero: React.FC = () => {
  const { t } = useTranslation();
  const [offsetY, setOffsetY] = useState(0);

  // Scroll parallax
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.3);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative bg-gradient-to-r from-off-white to-white overflow-hidden"
      role="region"
      aria-labelledby="ashraf-hero-heading"
    >
      <div className="max-w-7xl text-gold mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 flex flex-col lg:flex-row rtl:lg:flex-row-reverse items-center gap-10">

        {/* Image with motion */}
        <div className="relative flex-shrink-0" role="img" aria-label={t("ashrafHero.alt")}>
          {/* Glow behind image */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gold opacity-20 blur-3xl"
            style={{ transform: `translateY(${offsetY * 0.5}px)` }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />

          <motion.img
            src={imageAshraf}
            alt={t("ashrafHero.alt")}
            className="max-w-sm w-full h-auto rounded-xl shadow-2xl object-contain"
            style={{ transform: `translateY(${offsetY}px)` }}
            animate={{ y: [0, -10, 0], scale: [1, 1.02, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Text Content with motion */}
        <motion.div
          className="flex-1 text-center lg:text-left rtl:lg:text-right"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h2 id="ashraf-hero-heading" className="text-3xl md:text-4xl font-bold text-dark-red mb-6">
            {t("ashrafHero.name")}
          </h2>
          <h3 className="text-xl lg:text-2xl font-semibold mb-6 text-gold">
            {t("ashrafHero.position")}
          </h3>

          <p className="text-base lg:text-lg leading-relaxed whitespace-pre-line">
            <ArabicNumber text={t("ashrafHero.education")} />
          </p>

          <ol className="my-3 list-none" aria-label={t("ashrafHero.experienceLabel")}>
            {(t("ashrafHero.experience", { returnObjects: true }) as string[]).map(
              (item, idx) => (
                <li key={idx} className="mb-3 text-gold"><ArabicNumber text={item} /></li>
              )
            )}
          </ol>

          <p className="text-base lg:text-lg leading-relaxed whitespace-pre-line">
            {t("ashrafHero.expertise")}
          </p>
        </motion.div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-0" aria-hidden="true">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-24">
          <path d="M0.00,49.98 C150.00,150.00 349.50,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" className="fill-off-white" />
        </svg>
      </div>
    </section>
  );
};

export default AshrafHero;
