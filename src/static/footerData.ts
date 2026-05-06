import type { FooterLink, Office } from "../interfaces/Components";

/* ======================
   Services Links
====================== */
export const servicesLinks: FooterLink[] = [
  {
    label: "footer.services.inspection",
    url: "/services/inspection-and-expediting",
  },
  {
    label: "footer.services.valuation",
    url: "/services/assets-valuation-and-surveying",
  },
  {
    label: "footer.services.oilGas",
    url: "/services/oil-gas-and-power-ASME-TPI",
  },
  {
    label: "footer.services.feasibility",
    url: "/services/feasibility-studies-and-consulting-services",
  },
];

/* ======================
   Company Links
====================== */
export const companyLinks: FooterLink[] = [
  {
    label: "footer.company.theCompany",
    url: "/about-us/the-company",
  },
  {
    label: "footer.company.ourTeam",
    url: "/about-us/our-team",
  },
  {
    label: "footer.company.globalReps",
    url: "/about-us/our-global-representatives",
  },
  {
    label: "footer.company.accreditations",
    url: "/accreditations",
  },
  {
    label: "footer.company.majorClients",
    url: "/major-clients",
  },
  {
    label: "footer.company.contact",
    url: "/contact-us",
  },
];

/* ======================
   Offices
====================== */
export const offices: Office[] = [
  {
    name: "footer.offices.cairo.name",
    address: "footer.offices.cairo.address",
    tel: "+20227923043",
    email: "qsg@qsg-egypt.net",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.959160777142!2d31.229969275390562!3d30.03802947492682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145841ea6a5a20ab%3A0xbacd7bc7486776a8!2sQuality%20services%20group%20-%20QSG!5e0!3m2!1sen!2seg!4v1764163075979!5m2!1sen!2seg",
  },
  {
    name: "footer.offices.alex.name",
    address: "footer.offices.alex.address",
    tel: "+2035443445",
    email: "inspect@qsgegypt.net",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.807593481513!2d29.939383399999997!3d31.2260596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c4ed8a989e8d%3A0x78a5a4702a971456!2zNDIg2LnYqNivINin2YTZhNi32YrZgSDYp9mE2LXZiNmB2KfZhtmK2Iwg2LPZitiv2Yog2KzYp9io2LHYjCDZgtiz2YUg2LPZitiv2Ykg2KzYp9io2LHYjCDZhdit2KfZgdi42Kkg2KfZhNil2LPZg9mG2K_YsdmK2KkgNTQzNDAyMw!5e0!3m2!1sar!2seg!4v1763234065090!5m2!1sar!2seg",
  },
];
