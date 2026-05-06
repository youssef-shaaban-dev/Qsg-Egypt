import React from "react";
import { motion, type Variants } from "framer-motion";
import NewsList from "../../../components/news/NewsList";
import { newsData } from "../../../static/newsData";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const NewsSection: React.FC = () => {
  return (
    <section
      className="py-20 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('http://www.domeint.com/templates/project/image/newss.jpg')",
      }}
      role="region"
      aria-labelledby="news-heading"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header with Animation */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2
            id="news-heading"
            className="text-4xl font-bold text-dark-red"
          >
            <a
              href="https://www.domeint.com/news"
              className="hover:text-gold transition-colors"
              aria-label="Visit our News and Updates page for more articles"
            >
              News &amp; Updates
            </a>
          </h2>

          {/* Decorative underline — hidden from screen readers */}
          <div
            className="flex justify-center gap-2 mt-4"
            aria-hidden="true"
          >
            <span className="w-6 h-1 bg-gold rounded" />
            <span className="w-2 h-1 bg-gold rounded" />
            <span className="w-2 h-1 bg-gold rounded" />
          </div>
        </motion.div>

        {/* News Cards */}
        <div role="list" aria-label="Latest news and updates from QSG Egypt">
          <NewsList news={newsData} />
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
