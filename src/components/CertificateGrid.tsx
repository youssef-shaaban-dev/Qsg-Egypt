import { cards } from "../static/accreditionData";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function CertificateGrid() {
  const { t } = useTranslation("certificates");

  return (
    <motion.section
      className="container mx-auto grid grid-cols-1 sm:grid-cols-8 gap-4 py-8"
      initial="hidden"
      animate="show"
      variants={{
        show: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      aria-labelledby="certificate-grid-title"
      role="region"
    >
      <h2
        id="certificate-grid-title"
        className="sr-only"
      >
        {t("title")}
      </h2>

      {cards.map((card, idx) => {
        const label = t("certificate", { number: idx + 1 });

        return (
          <motion.div
            key={idx}
            className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 flex items-center justify-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            role="group"
            aria-label={label}
          >
            <img
              src={card.image}
              alt={label}
              className="object-cover rounded-md"
              loading="lazy"
            />
          </motion.div>
        );
      })}
    </motion.section>
  );
}
