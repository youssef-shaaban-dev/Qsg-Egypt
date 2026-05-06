import React from "react";
import { useTranslation } from "react-i18next";
import { services } from "../../../static/servicesData";
import ServicesHeader from "../../../components/service/ServicesHeader";
import ServiceCard from "../../../components/service/ServiceCard";
import Bg from "../../../assets/Banner/4.png";

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();

  // ترجمة أسماء الخدمات
  const translatedServices = services.map((service) => ({
    ...service,
    title: t(`services.${service.key}.title`),
    description: t(`services.${service.key}.description`), // fallback لو ما فيه ترجمة
  }));

  return (
    <section
      className="relative py-20 mt-12 bg-cover bg-center"
      style={{
        backgroundImage: `url('${Bg}')`,
      }}
      aria-labelledby="services-heading"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      <div className="relative container mx-auto px-6">
        
        {/* Section Header */}
        <h2 id="services-heading" className="sr-only">
          {t("services.heading")}
        </h2>
        <ServicesHeader title={t("services.heading")} />

        {/* Services Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          aria-describedby="services-heading"
        >
          {translatedServices.map((service, index) => (
            <ServiceCard
              key={service.key}
              service={service}
              index={index}
              aria-label={`${t("services.serviceLabel")}: ${service.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
