import React from "react";
import { motion } from "framer-motion";
import type { ProjectContentProps } from "../../interfaces/Components";

const ProjectContent: React.FC<ProjectContentProps> = ({
  category,
  categoryLink,
  title,
  description,
  link,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-dark-red"
    >
      {/* Category Link */}
      {category && (
        <a
          href={categoryLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm uppercase tracking-wide text-gold hover:text-dark-red transition-colors duration-300"
          aria-label={`View more in ${category}`}
        >
          {category}
        </a>
      )}

      {/* Project Title */}
      <h3 className="text-2xl font-bold mt-2 mb-3 leading-snug text-dark-red">
        {title}
      </h3>

      {/* Description */}
      <p className="text-medium-gray mb-5 leading-relaxed text-[15px]">
        {description}
      </p>

      {/* Read More Button */}
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="inline-block px-5 py-2 border border-gold text-gold rounded-full font-medium hover:bg-gold hover:text-dark-red transition-all duration-300"
        aria-label={`Read more about ${title}`}
      >
        Read More →
      </motion.a>
    </motion.div>
  );
};

export default ProjectContent;
