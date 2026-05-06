import type React from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import PageBanner from "../../components/banner/PageBanner";
import { ImageBlock } from "../../components/service/ImageBlock";
import BulletList from "../../components/service/BulletList";
import SectionCard from "../../components/service/Section";

import BGImage from "../../assets/Banner/6.png";
import BGImageAR from "../../assets/Banner/6ar.jpg";
import ImageSection1 from "../../assets/assets/Picture1.png";
import ImageSection2 from "../../assets/assets/Picture2.png";
import ImageSection3 from "../../assets/assets/Picture3.png";
import ImageSection4 from "../../assets/assets/Picture4.png";
import ImageSection5 from "../../assets/assets/Picture5.png";
import ImageSection6 from "../../assets/assets/Picture6.png";
import ImageSection7 from "../../assets/assets/3-en.png";
import ImageSection7AR from "../../assets/assets/3-ar.jpeg";

import { applyMeta, lang } from "../../utility/utility";
import { industries, manufacturing } from "../../static/servicesData";


const AssetValuation: React.FC = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    applyMeta(pathname);    
  }, [pathname]);

  return (
    <>
      <PageBanner
        currentCrumb={t("ourServices")}
        pageTitle={t("assetsValuation")}
        Imageurl={lang === "en" ? BGImage : BGImageAR}
      />

      <main className="bg-off-white min-h-screen">
        <div className="max-w-6xl mx-auto py-12 px-4">

          {/* Intro Section */}
          <div className="mt-6 gap-6">
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-red mb-6">
                {t("assetsValuationTitle")}
              </h2>
              <p className="mt-2 text-gold">{t("assetsValuationIntro1")}</p>
              <p className="mt-2 text-gold">{t("assetsValuationIntro2")}</p>
              <p className="mt-2 text-gold">{t("assetsValuationIntro3")}</p>
              <p className="mt-2 text-gold">{t("assetsValuationIntro4")}</p>
            </div>
          </div>

          {/* Purpose of Valuation */}
          <div className="mt-6 bg-white p-4 rounded shadow-sm">
            <h3 className="text-3xl md:text-4xl font-bold text-dark-red mb-6">
              {t("purposeOfValuation")}
            </h3>
            {/* <span className="text-gold">{t("purposeOfValuationDescription")}</span> */}
            <BulletList
              items={[
                t("valuationPurpose.secureBanks"),
                t("valuationPurpose.legalStatus"),
                t("valuationPurpose.corporateRestructuring"),
                t("valuationPurpose.liquidation"),
                t("valuationPurpose.mortgage"),
                t("valuationPurpose.insurance"),
              ]}
            />
          </div>

          {/* Images Grid 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <ImageBlock
                src={ImageSection5}
                alt={t("assetsValuation.realEstate")}
                title={t("assetsValuation.realEstate")}
                className="w-full h-80 object-cover rounded-md"
              />
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <ImageBlock
                src={ImageSection6}
                alt={t("assetsValuation.plant")}
                title={t("assetsValuation.plant")}
                className="w-full h-80 object-cover rounded-md"
              />
            </div>
          </div>

          {/* Service Details */}
          <SectionCard title={t("assetsValuation.includes")}>
            <BulletList
              items={[
                t("assetsValuation.land"),
                t("assetsValuation.buildings"),
                t("assetsValuation.machines"),
                t("assetsValuation.goods"),
                t("assetsValuation.vehicles"),
                t("assetsValuation.furniture"),
                t("assetsValuation.oilRigs"),
              ]}
            />
          </SectionCard>

          {/* Projects Follow-up */}
          <div className="mb-3">
            <h3 className="text-lg md:text-2xl font-bold text-dark-red mb-6">
              {t("projectsFollowUp")}
            </h3>
          </div>

          {/* Images Grid 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <ImageBlock
                src={ImageSection3}
                alt={t("assetsValuation.rawMaterial")}
                title={t("assetsValuation.rawMaterial")}
                className="w-full h-80 object-cover rounded-md"
              />
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <ImageBlock
                src={ImageSection4}
                alt={t("assetsValuation.rig")}
                title={t("assetsValuation.rig")}
                className="w-full h-80 object-cover rounded-md"
              />
            </div>
          </div>

          {/* Business Fields */}
          <SectionCard title={t("businessFields")}>
            <ul className="list-disc list-inside text-gold">
              <li>
                {t("variousIndustries")}
                <ul
                className={`list-none list-inside text-gold ms-12 ${
                  lang === "ar" ? "rtl-arrow-list" : "ltr-arrow-list"
                }`}
              >
                {manufacturing.map((item) => (
                  <li key={item.key}>{t(item.label)}</li>
                ))}
              </ul>

                </li>


                {industries.map((item) => (
                  <li key={item.key}>{t(item.label)}</li>
                ))}


            </ul>
            
          </SectionCard>

          {/* Integrated Projects */}
          <SectionCard title={t("integratedProjects")}>
            <BulletList
              items={[
                t("integratedProjects.transport"),
                t("integratedProjects.renewable"),
                t("integratedProjects.oilGas"),
                t("integratedProjects.rigs"),
                t("integratedProjects.variousRigs"),
                t("integratedProjects.infrastructure"),
                t("integratedProjects.bankAssets"),
                t("integratedProjects.antiques"),
              ]}
            />
          </SectionCard>

          {/* Images Grid 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <ImageBlock
                src={ImageSection1}
                alt={t("assetsValuation.hotels")}
                title={t("assetsValuation.hotels")}
                className="w-full h-80 object-cover rounded-md"
              />
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <ImageBlock
                src={ImageSection2}
                alt={t("assetsValuation.renewableProjects")}
                title={t("assetsValuation.renewableProjects")}
                className="w-full h-80 object-cover rounded-md"
              />
            </div>
          </div>

          {/* Total Assets */}
          <div className="mb-3 mt-6">
            {/* <h3 className="text-3xl md:text-4xl font-bold text-dark-red mb-6">
              {t("totalAssets2023_2024")}
            </h3> */}
            <div className="grid grid-cols-12 gap-1">
              <div className="col-span-12">
                <ImageBlock
                  src={lang === 'en' ? ImageSection7 : ImageSection7AR}
                  alt={t("totalAssets2023_2024")}
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="py-12">
            <div className="rounded-lg bg-white p-6 shadow-sm text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-dark-red mb-6">
                {t("tailoredValuation")}
              </h3>
              <p className="mt-2 text-gold">{t("tailoredValuationDesc")}</p>
              <Link
                to={"/contact-us"}
                className="mt-4 inline-block px-6 py-2 rounded-full bg-dark-red text-white hover:bg-light-red transition"
              >
                {t("contactUs")}
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AssetValuation;
