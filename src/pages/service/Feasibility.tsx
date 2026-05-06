import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageBanner from "../../components/banner/PageBanner";
import BulletList from "../../components/service/BulletList";
import { ImageBlock } from "../../components/service/ImageBlock";
import BGImage from '../../assets/Banner/8.png';
import BGImageAR from '../../assets/Banner/8ar.jpg';
import ImageSection2 from "../../assets/consulting/6.jpeg";
import ImageSection3 from "../../assets/consulting/7.png";
import ImageSection3Ar from "../../assets/consulting/7-ar.png";
import { applyMeta, lang } from "../../utility/utility";
import { ArabicNumber } from "../../utility/ArabicNumber";


interface Example {
  title: string;
  items: string[];
}

interface FeasibilityExample {
  title: string;
  items: string[];
}

interface FeasibilityData {
  title: string;
  visionTitle: string;
  paragraphs: string[];
  examplesTitle: string;
  examples: Record<string, FeasibilityExample>;
}

interface ConsultingData {
  title: string;
  paragraphs: string[];
}

interface FeasibilityImages {
  chart: string;
  consulting: string;
}


const Feasibility: React.FC = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  useEffect(() => {
    applyMeta(pathname);
  }, [pathname]);

  // Get feasibility data from translation
const feasibility = t("feasibility.feasibility", {
  returnObjects: true,
}) as FeasibilityData;

const consulting = t("feasibility.consulting", {
  returnObjects: true,
}) as ConsultingData;

const images = t("feasibility.images", {
  returnObjects: true,
}) as FeasibilityImages;


  return (
    <>
      {/* Page Banner */}
      <PageBanner
        currentCrumb={t("feasibility.breadcrumb")}
        pageTitle={t("feasibility.pageTitle")}
        Imageurl={lang === "en" ? BGImage : BGImageAR}
      />

      <main className="bg-off-white min-h-screen">
        <div className="max-w-6xl mx-auto">

          {/* Feasibility Studies Section */}
          <div className="px-4 py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-red mb-6">
              
              <ArabicNumber text={feasibility.title} />
              
            </h2>

            <h3 className="mb-6 font-medium text-gold">
              {feasibility.visionTitle}
            </h3>

            <div className="p-4">
              {feasibility.paragraphs.map((para: string, idx: number) => (
                <p key={idx} className="mt-2 text-gold">{para}</p>
              ))}
            </div>

            {/* Feasibility Examples */}
            <div className="mt-6 bg-white rounded-lg p-4 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-dark-red mb-6">
                {feasibility.examplesTitle}
              </h3>

              {Object.keys(feasibility.examples).map((key) => {
                const example: Example = feasibility.examples[key];
                return (
                  <BulletList
                    key={key}
                    title={example.title}
                    items={example.items}
                  />
                );
              })}
            </div>

            <div className="flex justify-center mt-3">
              <ImageBlock
                src={lang === 'en'? ImageSection3 : ImageSection3Ar}
                alt={images.chart}
                className="object-fit rounded-md"
              />
            </div>
          </div>

          {/* Consulting Services Section */}
          <div className="px-4 py-12 bg-white rounded-lg shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-red mb-6">
              <ArabicNumber text={consulting.title} />

            </h2>

            <div className="p-4">
              {consulting.paragraphs.map((para: string, idx: number) => (
                <p key={idx} className="mt-2 text-gold">{para}</p>
              ))}
            </div>

            <div className="flex justify-center mb-3">
              <ImageBlock
                src={ImageSection2}
                alt={images.consulting}
                className="w-full object-cover rounded-md"
              />
            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export default Feasibility;
