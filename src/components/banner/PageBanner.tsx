import type React from "react";
import { Link } from "react-router-dom";
import type { pageBannerProps } from "../../interfaces/Components";
import { useTranslation } from "react-i18next";

const PageBanner: React.FC<pageBannerProps> = ({ Imageurl, pageTitle, currentCrumb }) => {
  const { t } = useTranslation();

  return (
    <section
      className="relative overflow-hidden bg-light-navy text-off-white"
      role="region"
      aria-label={`${t(pageTitle)} page banner`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 sm:bg-cover bg-size-[auto_200px] ltr:bg-right rtl:bg-left-top sm:ltr:bg-right-bottom sm:rtl:bg-left-bottom bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${Imageurl})` }}
        role="img"
        aria-label={`Background image for ${t(pageTitle)}`}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-navy/10 bg-opacity-70" aria-hidden="true"></div>

      {/* Content */}
      <div
        className="relative z-10 max-w-6xl mx-auto px-6 py-29 flex flex-col gap-6"
        aria-labelledby="page-banner-title"
      >
        {/* Breadcrumb Navigation */}
        <nav aria-label={t("breadcrumb")}>
          <ul className="flex items-center space-x-3 text-2xl text-off-white/80">
            <li>
              <Link
                to="/"
                className="transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded-sm"
                aria-label={t("goHome")}
              >
                {t("home")}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium" aria-current="page">
              {t(currentCrumb)}
            </li>
          </ul>
        </nav>

        {/* Title */}
        <h1
          id="page-banner-title"
          className="text-lg md:text-6xl font-bold leading-tight"
        >
          {t(pageTitle)}
        </h1>
      </div>
    </section>
  );
};

export default PageBanner;

