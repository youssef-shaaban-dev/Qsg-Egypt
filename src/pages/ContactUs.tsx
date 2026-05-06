import { motion } from "framer-motion";
import { offices } from "../static/footerData";
import PageBanner from "../components/banner/PageBanner";
import BGImage from '../assets/Banner/Contact Us.png';
import BGImageAR from '../assets/Banner/Contact Us- ar.jpg';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { applyMeta, lang } from "../utility/utility";
import { useTranslation } from "react-i18next";
import { ArabicNumber } from "../utility/ArabicNumber";

export default function ContactUs() {

  const {pathname} = useLocation();
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language === "ar" ? "ar" : "en";

  useEffect(() => {
    applyMeta(pathname)
  })

  const getLocalizedMapUrl = (url: string) => {
    if (!url) return url;
    const updatedUrl = url
      .replace(/!3m2!1s(en|ar)!2seg/, `!3m2!1s${currentLang}!2seg`)
      .replace(/!5m2!1s(en|ar)!2seg/, `!5m2!1s${currentLang}!2seg`);
    try {
      const urlObj = new URL(updatedUrl);
      urlObj.searchParams.set("hl", currentLang);
      return urlObj.toString();
    } catch (error) {
      console.error("Error parsing map URL:", error);
      return updatedUrl + `&hl=${currentLang}`;
    }
  };

  return (
    <>
      <PageBanner
        currentCrumb="contactUs"
        pageTitle="contactUs"
        Imageurl={lang === 'en' ? BGImage : BGImageAR}
      />

      <main className="bg-off-white text-gold py-12" role="main">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office, idx) => (
              <motion.section
                key={idx}
                className="rounded-2xl p-6 shadow-sm bg-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                aria-labelledby={`office-title-${idx}`}
              >
                <h2
                  id={`office-title-${idx}`}
                  className="text-3xl md:text-4xl font-bold text-dark-red mb-6"
                >
                  {t(office.name)}
                </h2>

                  
                <p className="text-sm whitespace-pre-line mb-2">
                  
                  <ArabicNumber text={t(office.address)} />
                </p>

                <p className="text-sm mb-1">
                  <span className="font-semibold me-1" >{t("footer.contact.tel")}:</span> 
                  <a
                    href={`tel:+${office.tel}`}
                    className="hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold rounded-sm"
                    dir={lang === 'en'? 'ltr':'ltr'}            
                  >

                  <ArabicNumber text={office.tel} />
                  </a>
                </p>

                <p className="text-sm mb-4">
                  <span className="font-semibold">{t("footer.contact.email")}:</span>{" "}
                  <a
                    href={`mailto:${office.email}`}
                    className="hover:underline"
                  >
                    {office.email}
                  </a>
                </p>

                <div className="overflow-hidden rounded-lg shadow mt-4">
                  <iframe
                    src={getLocalizedMapUrl(office.mapEmbedUrl)}
                    width="100%"
                    height="250"
                    loading="lazy"
                    className="border-0"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${t(office.name)} Location Map`}
                  />
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
