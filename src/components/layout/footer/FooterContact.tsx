import React from "react";
import { useTranslation } from "react-i18next";
import { lang } from "../../../utility/utility";
import { ArabicNumber } from "../../../utility/ArabicNumber";

const FooterContact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      aria-labelledby="footer-contact-heading"
      role="region"
      className="text-gold"
    >
      <h3
        id="footer-contact-heading"
        className="text-lg font-semibold mb-4 text-dark-red"
      >
        {t("footer.contact.title")}
      </h3>

      <div className="flex flex-col md:flex-row gap-6">
        {/* 🏢 Cairo Office */}
        <address
          className="flex-1 space-y-3 not-italic"
          aria-labelledby="cairo-office-heading"
        >
          <h4
            id="cairo-office-heading"
            className="block text-md font-semibold text-dark-red"
          >
            {t("footer.contact.cairo.title")}
          </h4>

          <p
            className="text-sm whitespace-pre-line"
            aria-label={t("footer.contact.cairo.title")}
          >
          <ArabicNumber text={t("footer.contact.cairo.address")} /> 

          </p>

          <p>
            <strong>{t("footer.contact.tel")}:</strong>{" "}
            <a
              href="tel:+20227923043"
              dir={lang === 'en'? 'ltr':'ltr'}
              className="hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold rounded-sm" 
            >
              <ArabicNumber text={"+20227923043"} /> 
            </a>
          </p>

          <p>
            <strong>{t("footer.contact.email")}:</strong>{" "}
            <a
              href="mailto:qsg@qsg-egypt.net"
              className="hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold rounded-sm"
            >
              qsg@qsg-egypt.net
            </a>
          </p>
        </address>

        {/* 🏢 Alexandria Office */}
        <address
          className="flex-1 space-y-3 not-italic"
          aria-labelledby="alex-office-heading"
        >
          <h4
            id="alex-office-heading"
            className="block text-md font-semibold text-dark-red"
          >
            {t("footer.contact.alex.title")}
          </h4>

          <p
            className="text-sm whitespace-pre-line"
            aria-label={t("footer.contact.alex.title")}
          >
              <ArabicNumber text={t("footer.contact.alex.address")} /> 

          </p>

          <p>
            <strong>{t("footer.contact.tel")}:</strong>{" "}
            <a
              href="tel:+2035443445"
              dir={lang === 'en'? 'ltr':'ltr'}
              className="hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold rounded-sm"
            >
              <ArabicNumber text={"+2035443445"} /> 
            </a>
          </p>

          <p>
            <strong>{t("footer.contact.email")}:</strong>{" "}
            <a
              href="mailto:inspect@qsgegypt.net"
              className="hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold rounded-sm"
            >
              inspect@qsgegypt.net
            </a>
          </p>
        </address>
      </div>
    </section>
  );
};

export default FooterContact;
