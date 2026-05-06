import React from 'react';
import { motion } from 'framer-motion';

interface GlobalReachProps {
  title?: string;
  imageSrc: string;
  imageAlt?: string;
}

const GlobalReach: React.FC<GlobalReachProps> = ({
  title = "وكلاء الشركة حول العالم",
  imageSrc,
  imageAlt = "وكلاء الشركة حول العالم لشركة QSG",
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative bg-off-white p-8 md:p-16 rounded-2xl flex flex-col items-center text-center gap-6 md:gap-8 overflow-hidden"
      role="region"
      aria-labelledby="global-reach-title"
    >
      {/* Title */}
      <motion.h2
        id="global-reach-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="text-3xl md:text-4xl font-bold text-dark-red mb-6"
      >
        {title}
      </motion.h2>

      {/* Image */}
      <motion.img
        src={imageSrc}
        alt={imageAlt}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
        className="max-w-full rounded-xl shadow-2xl z-10 object-cover"
      />
    </motion.section>
  );
};

export default GlobalReach;
