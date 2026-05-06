import type React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import PageBanner from "../../components/banner/PageBanner";
import BulletList from "../../components/service/BulletList";
import { ImageBlock } from "../../components/service/ImageBlock";
import { applyMeta, lang } from "../../utility/utility";

import BGImage from "../../assets/Banner/7.png";
import BGImageAR from "../../assets/Banner/7ar.jpg";
import ImageSection1 from "../../assets/inspection/dummy/petrolum.jpg";
import ImageSection2 from "../../assets/inspection/engineering/40D21C65-780F-4CC8-AB8E-F4655A1E7411-432-0000003804B53918_tmp.jpg";
import ImageSection3 from "../../assets/inspection/engineering/Picture2.png";
import ImageSection4 from "../../assets/inspection/food/WhatsApp Image 2025-08-27 at 11.50.01 AM.jpeg";
import ImageSection5 from "../../assets/inspection/food/WhatsApp Image 2025-08-27 at 11.50.02 AM (1).jpeg";
import ImageSection6 from "../../assets/inspection/chemicals/6321746674974_.pic.jpg";
import ImageSection7 from "../../assets/inspection/ships/58f0389c-d6fd-4c0a-bec5-439e5c7945d1.jpg";
import ImageSection8 from "../../assets/inspection/ships/310520111880.jpg";
import { ArabicNumber } from "../../utility/ArabicNumber";

const Inspection: React.FC = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    applyMeta(pathname);
  }, [pathname]);

  return (
    <>
      <PageBanner
        currentCrumb={t("inspection.breadcrumb")}
        pageTitle={t("inspection.pageTitle")}
        Imageurl={lang === 'en' ? BGImage : BGImageAR}
      />

      <main className="bg-off-white min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="px-4 py-12">
            <div className="p-4 space-y-3">
              <p className="text-gold">{t("inspection.intro.p1")}</p>
              <p className="text-gold">{t("inspection.intro.p2")}</p>
            </div>

            <div className="mt-6 bg-white rounded-lg p-4 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-red mb-6">
                {t("inspection.process.title")}
              </h2>

              <BulletList items={t("inspection.process.items", { returnObjects: true }) as string[]} />

              <p className="mt-2 text-gold">{t("inspection.process.note")}</p>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center mb-3">
            <ImageBlock
              src={ImageSection1}
              alt={t("inspection.images.general")}
              className="w-full h-80 object-cover rounded-md"
            />
          </div>

          {/* Engineering */}
          <div className="mt-6 bg-white rounded-lg p-4 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-red mb-6">
              {t("inspection.exports.title")}
            </h2>

            <h3 className="text-2xl md:text-3xl font-bold text-dark-red mb-6">
              <ArabicNumber text={t("inspection.engineering.title")} />
            </h3>

            <BulletList
              items={t("inspection.engineering.items", { returnObjects: true }) as string[]}
            />

            <div className="ms-12">
              <ul className={`list-none list-inside text-gold ms-6 ${
                                lang === "ar" ? "rtl-arrow-list" : "ltr-arrow-list"
                              }`}>
                {(t("inspection.engineering.lifting", { returnObjects: true })as string[]).map(
                  (item: string, i: number) => (
                    <li key={i}>{item}</li>
                  )
                )}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
              <ImageBlock
                src={ImageSection2}
                alt={t("inspection.images.engineering")}
                className="w-full h-80 object-cover rounded-md"
              />
              <ImageBlock
                src={ImageSection3}
                alt={t("inspection.images.engineering")}
                className="w-full h-80 object-cover rounded-md"
              />
            </div>
          </div>

          {/* Food */}
          <div className="mt-6 p-4">
            <h3 className="text-2xl md:text-3xl font-bold text-dark-red mb-6">
              
              <ArabicNumber text={t("inspection.food.title")} />

            </h3>

            <BulletList items={t("inspection.food.items", { returnObjects: true })as string[]} />

            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-5">
              <ImageBlock
                src={ImageSection4}
                alt={t("inspection.images.food")}
                className="w-full h-80 object-cover rounded-md"
              />
              <ImageBlock
                src={ImageSection5}
                alt={t("inspection.images.food")}
                className="w-full h-80 object-cover rounded-md"
              />
            </div>
          </div>

          {/* Industrial */}
          <div className="mt-6 bg-white rounded-lg p-4 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-red mb-6">
              {t("inspection.industrial.title")}
            </h2>

            <p className="text-gold">{t("inspection.industrial.p1")}</p>
            <p className="text-gold">{t("inspection.industrial.p2")}</p>
            <p className="text-gold">{t("inspection.industrial.p3")}</p>

            <BulletList
              items={t("inspection.industrial.items", { returnObjects: true })as string[]}
            />

            <ImageBlock
              src={ImageSection6}
              alt={t("inspection.images.industrial")}
              className="w-full h-160 object-cover rounded-md"
            />
          </div>

          {/* Ships */}
          <div className="mt-6 p-4">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-red mb-6">
              {t("inspection.ships.title")}
            </h2>

            <BulletList
              title={t("inspection.ships.checkingTitle")}
              items={t("inspection.ships.checking", { returnObjects: true })as string[]}
            />

            <BulletList
              title={t("inspection.ships.additionalTitle")}
              items={t("inspection.ships.additional", { returnObjects: true })as string[]}
            />

            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-5">
              <ImageBlock
                src={ImageSection7}
                alt={t("inspection.images.ships")}
                className="w-full h-80 object-cover rounded-md"
              />
              <ImageBlock
                src={ImageSection8}
                alt={t("inspection.images.ships")}
                className="w-full h-80 object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Inspection;
