import React from "react";
import { motion } from "framer-motion";
import type { ProjectSlideProps } from "../../interfaces/Components";
import ProjectImage from "./ProjectImage";
import ProjectContent from "./ProjectContent";
import { slideVariants } from "../appVariants";

const ProjectSlide: React.FC<ProjectSlideProps> = ({ project, index }) => {
  return (
    <motion.article
      custom={index}
      variants={slideVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col md:flex-row items-stretch overflow-hidden rounded-2xl shadow-lg border border-light-navy bg-off-white hover:shadow-xl transition-all duration-500"
      role="group"
      aria-label={`Project: ${project.title}`}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <ProjectImage image={project.image} link={project.link} />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center bg-white text-dark-red">
        <ProjectContent {...project} />
      </div>
    </motion.article>
  );
};

export default ProjectSlide;
