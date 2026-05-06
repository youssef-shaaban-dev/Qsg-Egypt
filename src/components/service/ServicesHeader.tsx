import React from "react"
import { motion } from "framer-motion"

interface Props {
  title: string
}

const ServicesHeader: React.FC<Props> = ({ title }) => {
  return (
    <motion.header
      className="text-center md:text-left rtl:md:text-right mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      aria-label={`Section header for ${title}`}
    >
      {/* Section title */}
      <h2
        className="text-3xl md:text-4xl font-bold text-dark-red mb-6"
        role="heading"
        aria-level={2}
      >
        {title}
      </h2>

    </motion.header>
  )
}

export default ServicesHeader
