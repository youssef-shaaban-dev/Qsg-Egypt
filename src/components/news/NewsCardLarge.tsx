import React from "react";
import { motion, type Variants } from "framer-motion";
import type { NewsProps } from "../../interfaces/Components";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const NewsCardLarge: React.FC<NewsProps> = ({ news, index = 0 }) => {
  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white/95 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
      role="article"
      aria-label={news.title}
    >
      {/* Image */}
      <div className="overflow-hidden">
        <a
          href={news.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Read more about ${news.title}`}
        >
          <img
            src={news.image}
            alt={news.title}
            loading="lazy"
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </a>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-dark-red mb-3 leading-snug hover:text-gold transition-colors">
            <a
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              className="focus:outline-none focus:ring-2 focus:ring-gold focus:rounded-sm"
            >
              {news.title}
            </a>
          </h3>
          {news.description && (
            <p className="text-gray-700 mb-4 leading-relaxed">
              {news.description}
            </p>
          )}
        </div>

        <footer className="mt-auto">
          <div className="text-sm text-medium-gray mb-2">
            📅 Posted on | {news.date}
          </div>
          <a
            href={news.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-gold hover:text-dark-red font-semibold transition-colors"
          >
            Read More →
          </a>
        </footer>
      </div>
    </motion.article>
  );
};

export default NewsCardLarge;
