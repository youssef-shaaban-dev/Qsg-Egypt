import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import BannerSlide from "../../../components/banner/BannerSlide";
import VideoApp from "../../../assets/egypt2.mp4";

export default function Banner() {
  const { t } = useTranslation();

  const slides = [
    {
      videoSrc: VideoApp,
      title: t("banner.slide1.title"),
      buttonText: t("banner.slide1.buttonText"),
      buttonLink: "/about-us/the-company",
    },
    // Add more slides if needed
    // {
    //   videoSrc: VideoApp2,
    //   title: t("banner.slide2.title"),
    //   buttonText: t("banner.slide2.buttonText"),
    //   buttonLink: "/another-link",
    // },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000); // autoplay every 6s
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label={t("banner.ariaLabel")}
    >
      {/* Animated Slide */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          role="group"
          aria-roledescription="slide"
          aria-label={`${t("banner.slide")} ${current + 1} ${t("banner.of")} ${slides.length}: ${slides[current].title.replace(/<[^>]+>/g, "")}`}
        >
          <BannerSlide {...slides[current]} />
        </motion.div>
      </AnimatePresence>

      {/* Dots Navigation */}
      {slides.length > 1 && (
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20"
          role="tablist"
          aria-label={t("banner.navigation")}
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current ? "bg-dark-red scale-125" : "bg-off-white/50 hover:bg-dark-red/60"
              }`}
              aria-label={`${t("banner.goToSlide")} ${i + 1}`}
              aria-selected={i === current}
              role="tab"
            />
          ))}
        </div>
      )}
    </section>
  );
}
