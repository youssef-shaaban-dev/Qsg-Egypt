import React from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const FooterBottom: React.FC = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-white border-t border-gray-300 mt-10 text-dark-red"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* 🌐 Social Links */}
        <nav aria-label="Social media links" className="flex gap-4">
          <a
            href="https://www.linkedin.com/company/qsgegypt/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("footerBottom.social.linkedin")}
            className="hover:text-gold focus:ring-2 focus:ring-gold rounded-sm"
          >
            <Icon icon="mdi:linkedin" className="w-6 h-6" />
          </a>

          <a
            href="https://www.facebook.com/qsgegypt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("footerBottom.social.facebook")}
            className="hover:text-gold focus:ring-2 focus:ring-gold rounded-sm"
          >
            <Icon icon="mdi:facebook" className="w-6 h-6" />
          </a>
        </nav>

        {/* 📄 Text */}
        <div className="text-center md:text-right text-sm">
          <p>
            {t("footerBottom.copyright", { year })}{" "}
            <a
              href="https://mrco-egypt.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("footerBottom.developerAria")}
              className="text-gold hover:underline"
            >
              {t("footerBottom.developer")}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterBottom;
