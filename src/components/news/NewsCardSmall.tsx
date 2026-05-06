import React from "react";
import { motion, type Variants } from "framer-motion";
import type { NewsProps } from "../../interfaces/Components";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const NewsCardSmall: React.FC<NewsProps> = ({ news, index = 0 }) => {
  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex bg-white/95 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden mb-6 group"
      role="article"
      aria-label={news.title}
    >
      {/* Thumbnail */}
      <div className="w-1/3 overflow-hidden">
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
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </a>
      </div>

      {/* Content */}
      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-dark-red leading-snug hover:text-gold transition-colors line-clamp-2">
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
            <p className="text-gray-700 text-sm mt-1 line-clamp-2">
              {news.description}
            </p>
          )}
        </div>

        <footer className="mt-3">
          <div className="text-xs text-medium-gray mb-1">
            📅 Posted on | {news.date}
          </div>
          <a
            href={news.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-dark-red font-semibold text-sm transition-colors"
          >
            Read More →
          </a>
        </footer>
      </div>
    </motion.article>
  );
};

export default NewsCardSmall;
