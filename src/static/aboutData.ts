import type { AboutCard } from "../interfaces/Components";

import BGImage1 from '../assets/about/card.jpeg';
import BGImage1AR from '../assets/about/card-ar.jpeg';
import BGImage2 from '../assets/Banner/mds.jpg';
import BGImage2AR from '../assets/Banner/mds-ar.png';
import BGImage3 from '../assets/about/card-1.jpg';
import BGImage3AR from '../assets/about/card-1 ar.png';

export const aboutCards: AboutCard[] = [
  {
    key: "company",
    title: "The Company",
    image: BGImage3,
    imageAR:BGImage3AR,
    link: "/about-us/the-company",
  },
  {
    key: "team",
    title: "Our Team",
    image: BGImage1,
    imageAR: BGImage1AR,
    link: "/about-us/our-team",
  },
  {
    key: "globalReps",
    title: "Our Global Representatives",
    image: BGImage2,
    imageAR: BGImage2AR,
    link: "/about-us/our-global-representatives",
  },
  // يمكنك إضافة باقي البطاقات لاحقاً بنفس الطريقة
  // {
  //   key: "awards",
  //   title: "Awards & Appreciation",
  //   image: "https://www.domeint.com/templates/project/image/ab42.jpg",
  //   link: "https://www.domeint.com/awards.html",
  // },
];
