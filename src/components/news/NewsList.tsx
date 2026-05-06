import React from "react";
import { motion } from "framer-motion";
import NewsCardLarge from "./NewsCardLarge";
import NewsCardSmall from "./NewsCardSmall";
import type { NewsItem } from "../../interfaces/Components";

interface Props {
  news: NewsItem[];
}

const NewsList: React.FC<Props> = ({ news }) => {
  if (!news || news.length === 0) {
    return (
      <div className="text-center text-gray-500 py-16">
        📰 <span className="font-medium">No news available at the moment.</span>
        <p className="mt-2 text-sm">Please check back later for the latest updates.</p>
      </div>
    );
  }

  const [first, ...rest] = news;

  return (
    <motion.div
      className="grid lg:grid-cols-2 gap-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      aria-label="Latest news articles"
      role="region"
    >
      {/* Featured / Large News Card */}
      <NewsCardLarge news={first} index={0} />

      {/* Smaller List of Remaining News */}
      <div className="space-y-6">
        {rest.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <NewsCardSmall news={item} index={idx + 1} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default NewsList;
