import React from "react";
import { motion } from "framer-motion";
import type { ProjectImageProps } from "../../interfaces/Components";

const ProjectImage: React.FC<ProjectImageProps> = ({ image, link }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View project details"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="block overflow-hidden"
    >
      <motion.img
        src={image}
        alt="Project showcase image"
        loading="lazy"
        decoding="async"
        className="w-full h-80 object-cover rounded-none transition-transform duration-700 ease-out"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </motion.a>
  );
};

export default ProjectImage;
