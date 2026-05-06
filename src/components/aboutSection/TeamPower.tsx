import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { TeamPowerProps } from '../../interfaces/Components';
import { ArabicNumber } from '../../utility/ArabicNumber';

const TeamPower: React.FC<TeamPowerProps> = ({
  title = "The group’s technical and managerial years of experience",
  subtitle = "QSG has a total of",
  years = 840,
  imageSrc,
  subExperience,
  imageAlt = "team power",
}) => {
  const [count, setCount] = useState(0);

  // Animate years count
  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = years / (duration / 50);
    const counter = setInterval(() => {
      start += increment;
      if (start >= years) {
        start = years;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 50);

    return () => clearInterval(counter);
  }, [years]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="bg-off-white p-6 md:p-12 rounded-xl shadow-md flex flex-col md:flex-row items-center gap-6 md:gap-12"
      aria-labelledby="team-power-title"
      role="region"
    >
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-center md:text-left rtl:md:text-right md:flex-1"
      >
        <h3
          id="team-power-title"
          className="text-xl md:text-2xl font-semibold text-gold mb-2"
        >
          {title}
        </h3>
        <p className="text-dark-red text-2xl md:text-3xl font-bold" aria-live="polite">
          {subtitle}{' '}
          <span className="text-secondary"><ArabicNumber text={count.toLocaleString()} /></span> {subExperience}
        </p>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="flex-1 flex justify-center md:justify-end max-w-full"
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="max-w-full md:max-w-lg rounded-lg shadow-lg"
        />
      </motion.div>
    </motion.section>
  );
};

export default TeamPower;
