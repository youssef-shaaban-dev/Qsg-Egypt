import type React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import PageBanner from "../../components/banner/PageBanner";
import BulletList from "../../components/service/BulletList";
import { ImageBlock } from "../../components/service/ImageBlock";
import BGImage from '../../assets/Banner/5.png';
import BGImageAR from '../../assets/Banner/5ar.jpg';
import ImageSection1 from '../../assets/oil & gas/old.png';
import { applyMeta, lang } from "../../utility/utility";

interface OilGasData {
  introTitle: string;
  items: string[];
}

const Oil: React.FC = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    applyMeta(pathname);
  }, [pathname]);

  // Get data from translation JSON
  const oilData = t("oilGas", { returnObjects: true }) as OilGasData;

  return (
    <>
      {/* Page Banner */}
      <PageBanner
        currentCrumb={t("oilGas.breadcrumb")}
        pageTitle={t("oilGas.pageTitle")}
        Imageurl={lang === 'en' ? BGImage : BGImageAR}
      />

      <main className="bg-off-white min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="px-4 py-12">
            <div className="mt-6 bg-white p-4 rounded shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-red mb-6">
                {oilData.introTitle}
              </h2>

              <BulletList
                items={oilData.items}
              />
            </div>
          </div>

          <div className="flex justify-center mb-3">
            <ImageBlock
              src={ImageSection1}
              alt={t("oilGas.imageAlt")}
              className="w-1/2 object-cover rounded-md"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Oil;
