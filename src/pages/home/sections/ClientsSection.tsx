import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

import { clients } from "../../../static/clientData";
import { Link } from "react-router-dom";

const ClientsSection: React.FC = () => {
  const { t } = useTranslation();

  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      id="clients"
      className="py-16 bg-white mt-20 relative overflow-hidden"
      aria-labelledby="clients-heading"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2
          id="clients-heading"
          className="text-3xl md:text-4xl font-bold text-dark-red mb-6 text-center"
        >
          <Link to="#clients" aria-label={t("clients.ariaLabel")}>
            {t("clients.heading")}
          </Link>
        </h2>

        <p className="text-gold text-center mb-12">
          {t("clients.description")}
        </p>

        <Slider
          {...settings}
          className="client-slider w-full"
          aria-label={t("clients.carouselAria")}
        >
          {clients.map((client, idx) => (
            <div key={idx} className="px-3">
              {/* Fixed container */}
              <div className="h-20 flex items-center justify-center">
                <img
                  src={client.default}
                  alt={`${t("clients.clientLogo")} ${idx + 1}`}
                  className="max-h-full max-w-full"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ClientsSection;