import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  className?:string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, className = '' }) => (
  <motion.header
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    role="heading"
    aria-label={title}
    className="mb-10"
  >
    <h2
      className={`text-3xl md:text-4xl font-bold text-dark-red mb-6 ${className}`}
      aria-level={2}
    >
      {title}
    </h2>

  </motion.header>
);

export default SectionTitle;
