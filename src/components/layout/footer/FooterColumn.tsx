import React from "react";
import { motion } from "framer-motion";
import type { FooterColumnProps } from "../../../interfaces/Components";
import { fadeUp } from "../../appVariants";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { localizePath } from "../../../utility/utility";
import i18n from "../../../i18n";

const FooterColumn: React.FC<FooterColumnProps> = ({
  title,
  links,
  ariaLabel,
  delay = 0,
}) => {

    const { t } = useTranslation();
  return <>
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    custom={delay}
    role="navigation"
    aria-label={`${title} links`}
  >
    <h3
      className="text-lg font-semibold mb-4 text-dark-red"
      id={`${title.replace(/\s+/g, "-").toLowerCase()}-heading`}
    >
      {t(title)}
    </h3>

    <ul
      className="space-y-2"
      aria-labelledby={`${title.replace(/\s+/g, "-").toLowerCase()}-heading`}
    >
      {links.map((link, idx) => (
        <li key={idx}>
          <Link
            to={localizePath(link.url,i18n.language)}
            className="text-gold hover:text-dark-red transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded-sm"
            aria-label={`${ariaLabel} (opens in a new tab)`}
          >
            {t(link.label)}
          </Link>
        </li>
      ))}
    </ul>
  </motion.div>
</>
}

export default FooterColumn;
