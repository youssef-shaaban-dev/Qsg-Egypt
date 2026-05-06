export interface NavLink {
  label: { en: string; ar: string };
  href: string;
  submenu?: { label: { en: string; ar: string }; href: string }[];
}

export const navLinks: NavLink[] = [
  {
    label: { en: "About Us", ar: "من نحن" },
    href: "#",
    submenu: [
      { label: { en: "The Company", ar: "الشركة" }, href: "/about-us/the-company" },
      { label: { en: "Our Team", ar: "فريق العمل" }, href: "/about-us/our-team" },
      {
        label: { en: "Our Global Representatives", ar: "وكلاء الشركة حول العالم" },
        href: "/about-us/our-global-representatives",
      },
    ],
  },
  { label: { en: "Accreditations", ar: "الإعتمادات" }, href: "/accreditations" },
  {
    label: { en: "Our Services", ar: "خدماتنا" },
    href: "#",
    submenu: [
      {
        label: { en: "Inspection & Expediting", ar: "الفحص والتفتيش" },
        href: "/services/inspection-and-expediting",
      },
      {
        label: { en: "Assets Valuation & Surveying", ar: "تقييم الأصول" },
        href: "/services/assets-valuation-and-surveying",
      },
      {
        label: { en: "Oil, Gas & Power (ASME & TPI)", ar: "خدمات البترول والغاز والطاقة (ASME & TPI)" },
        href: "/services/oil-gas-and-power-ASME-TPI",
      },
      {
        label: { en: "Feasibility Studies & Consulting Services", ar: "دراسات الجدوى والخدمات الاستشارية" },
        href: "/services/feasibility-studies-and-consulting-services",
      },
    ],
  },
  { label: { en: "Major Clients", ar: "عملاؤنا" }, href: "/major-clients" },
  { label: { en: "Contact Us", ar: "تواصل معنا" }, href: "/contact-us" },
];
