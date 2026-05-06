import type { Service } from "../interfaces/Components";
import Image4 from '../assets/home/consulting & feasability/Picture1.png';
import Image3 from '../assets/home/oil & gas/2.jpg';
import Image2 from '../assets/home/valuation/Pickalbatros-Hotel.png';
import Image1 from '../assets/inspection/ships/Inspecation-01.webp';

export const services: Service[] = [
  {
    key: "service1",
    title: "Inspection & Expediting",
    image: Image1,
    link: "/services/inspection-and-expediting",
  },
  {
    key: "service2",
    title: "Assets Valuation & Surveying",
    image: Image2,
    link: "/services/assets-valuation-and-surveying",
  },
  {
    key: "service3",
    title: "Oil, Gas & Power (ASME & TPI)",
    image: Image3,
    link: "/services/oil-gas-and-power-ASME-TPI",
  },
  {
    key: "service4",
    title: "Feasibility Studies & Consulting Services",
    image: Image4,
    link: "/services/feasibility-studies-and-consulting-services",
  },
];

export const industries: { key: string; label: string }[] = 
// industries data (with i18n keys)
[
  { key: "hospitals", label: "industries.hospitals" },
  { key: "education", label: "industries.education" },
  { key: "touristicVillages", label: "industries.touristicVillages" },
  {key:"printing", label: "industries.printing"},
  { key: "hotels", label: "industries.hotels" },
  { key: "petroleum", label: "industries.petroleum" },
  { key: "contracting", label: "industries.contracting" },
  { key: "land", label: "industries.land" },
  { key: "trucking", label: "industries.trucking" },
  { key: "wholesale", label: "industries.wholesale" },
  { key: "wholesaleDurable", label: "industries.wholesaleDurable" },
  { key: "autoService", label: "industries.autoService" },
  { key: "autoDealers", label: "industries.autoDealers" },
  { key: "restaurants", label: "industries.restaurants" },
  { key: "amusement", label: "industries.amusement" },
];

export const manufacturing: { key: string; label: string }[] = 
[
  { key: "textiles", label: "industries.textiles" },
  { key: "paperProducts", label: "industries.paperProducts" },
  { key: "chemicals", label: "industries.chemicals" },
  { key: "foodManufacturing", label: "industries.foodManufacturing" },
  { key: "woodWorking", label: "industries.woodWorking" },
  { key: "nonMetallicMaterials", label: "industries.nonMetallicMaterials" },
  { key: "electronics", label: "industries.electronics" },
  { key: "pipelines", label: "industries.pipelines" },
  { key: "buildingMaterials", label: "industries.buildingMaterials" },
  { key: "rubberPlastic", label: "industries.rubberPlastic" },
  { key: "leatherProducts", label: "industries.leatherProducts" },
  { key: "stoneClayGlass", label: "industries.stoneClayGlass" },
  { key: "primaryMetals", label: "industries.primaryMetals" },
  { key: "fabricatedMetals", label: "industries.fabricatedMetals" },
  { key: "homeAppliances", label: "industries.homeAppliances" },
]
