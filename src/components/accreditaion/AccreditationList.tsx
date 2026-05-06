import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { accreditationDetailsKeys } from "../../static/accreditionData";
import { ArabicNumber } from "../../utility/ArabicNumber";

export function AccreditationList() {
  const { t } = useTranslation();

  return (
    <motion.section
      className="container mx-auto bg-white shadow-sm rounded-2xl p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      aria-labelledby="accreditation-list-title"
      role="region"
    >
      <h2
        id="accreditation-list-title"
        className="text-3xl md:text-4xl font-bold text-dark-red mb-6"
      >
        {t("accreditation.title", "Accreditations, Registrations and Agency Contracts")}
      </h2>

      <motion.ul
        className="space-y-3 mt-4"
        initial="hidden"
        animate="show"
        role="list"
        aria-label={t(
          "accreditation.listAria",
          "List of accreditations, registrations and agency contracts"
        )}
        transition={{ staggerChildren: 0.12 }}
      >
        {accreditationDetailsKeys.map((key, i) => (
          <motion.li
            key={key}
            variants={{
              hidden: { opacity: 0, y: 15 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.02, backgroundColor: "rgba(0,0,0,0.04)" }}
            className="flex items-start gap-3 p-3 rounded-lg"
            role="listitem"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 + i * 0.05 }}
            >
              <Icon
                icon="mdi:check-circle"
                width={20}
                className="text-dark-red mt-1"
                aria-hidden="true"
              />
            </motion.div>

            <p
              className="leading-relaxed text-gold"
              // dangerouslySetInnerHTML={{
              //   __html: t(`accreditation.${key}`),
              // }}
            >
              <ArabicNumber text={t(`accreditation.${key}`)} />
          </p>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}
