import { motion } from "framer-motion";
import type { BannerSlideProps } from "../../interfaces/Components";
import { Link } from "react-router-dom";
import { ArabicNumber } from "../../utility/ArabicNumber";

export default function BannerSlide({
  videoSrc,
  title,
  buttonText,
  buttonLink,
}: BannerSlideProps) {
  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      aria-label={`${title} section`}
      role="region"
    >
      {/* 🎥 Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* 🔹 Overlay */}
      <div
        className="absolute inset-0 bg-navy/10 backdrop-blur-[1px]"
        aria-hidden="true"
      />

      {/* ✨ Text Content */}
      <div
        className="relative z-10 flex flex-col justify-center items-center h-full text-center text-off-white px-6"
        role="presentation"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl md:text-3xl font-bold leading-tight drop-shadow-lg"
          // dangerouslySetInnerHTML={{ __html: lang === 'ar'?toArabicDigits(title):title }}
        >

          <ArabicNumber text={title} />
          
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8"
        >
          <Link
            to={buttonLink}
            className="bg-dark-red hover:bg-dark-red/90 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all focus:outline-none focus:ring-4 focus:ring-gold/60"
            role="button"
            aria-label={`Learn more about ${title}`}
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
