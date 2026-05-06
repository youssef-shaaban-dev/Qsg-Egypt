import React from "react";
import FooterColumn from "./FooterColumn";
import FooterContact from "./FooterContact";
import FooterBottom from "./FooterBottom";
import ScrollToTopButton from "./ScrollToTopButton";
import { companyLinks, servicesLinks } from "../../../static/footerData";
import QSGLOGO from "../../../assets/logo-qsg-1.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
      const { t } = useTranslation();
  
  return (
    <footer
      className="bg-[#f6f6f6] border-t-4 border-[#856130] relative overflow-hidden"
      role="contentinfo"
      aria-label="Website footer"
    >
      <div
        className="relative max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10"
        aria-label="Footer sections"
      >
        {/* Logo Section */}
        <div className="flex justify-center sm:justify-start">
          <Link
            to="/"
            aria-label="Go to homepage"
            className="focus:outline-none focus:ring-2 focus:ring-[#856130] rounded-sm"
          >
            <img
              src={QSGLOGO}
              alt="QSG Egypt company logo"
              className="mb-4 max-h-50"
            />
          </Link>
        </div>

        {/* Footer Columns */}
        <FooterColumn title={t('company.title')} links={companyLinks} ariaLabel="Company information links" />
        <FooterColumn title={t('ourServices')} links={servicesLinks} ariaLabel="Our services links" />

        {/* Contact Section */}
        <div
          className="sm:col-span-3 lg:col-span-3"
          role="region"
          aria-label="Contact information"
        >
          <FooterContact />
        </div>
      </div>

      {/* Bottom Section */}
      <FooterBottom />
      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
