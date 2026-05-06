import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [langOpenDesktop, setLangOpenDesktop] = useState(false);
  const [langOpenMobile, setLangOpenMobile] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const { i18n } = useTranslation();
  const desktopDropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  // Sticky header
  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    
    const handleClickOutside = (event: MouseEvent) => {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target as Node)
      ) {
        setLangOpenDesktop(false);
      }
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target as Node)
      ) {
        setLangOpenMobile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

const changeLanguage = (lang: string) => {
  let path = location.pathname;

  // remove existing /ar
  path = path.replace(/^\/ar/, "");

  if (lang === "ar") {
    navigate(`/ar${path}`);
  } else {
    navigate(path || "/");
  }

  i18n.changeLanguage(lang);
  
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  setLangOpenDesktop(false);
  setLangOpenMobile(false);
  window.location.reload();

};

  const languages = [
    { code: "en", label: "English" },
    { code: "ar", label: "عربى" },
  ];

  const currentLangObj =
    languages.find((l) => i18n.language && i18n.language.startsWith(l.code)) ||
    languages[0];
  const currentLangChar = currentLangObj.label[0];

  return (
    <header
      className={clsx(
        "transition-all duration-300",
        sticky
          ? "bg-white/90 text-dark-red shadow-lg backdrop-blur fixed top-0 left-0 w-full z-50"
          : "bg-white text-dark-red"
      )}
      role="banner"
      aria-label="Main website header"
    >
      <div
        className="flex items-center justify-between rtl:flex-row-reverse px-6 py-3 max-w-7xl mx-auto"
        role="navigation"
        aria-label="Primary navigation"
      >
        <Logo />

        <div className="flex items-center rtl:flex-row-reverse gap-4">
          <DesktopNav />

          {/* Desktop Language Dropdown */}
          <div className="relative hidden lg:inline-block" ref={desktopDropdownRef}>
            <button
              onClick={() => setLangOpenDesktop(!langOpenDesktop)}
              className="flex items-center gap-1 px-3 py-1 border rounded text-sm bg-gray-100 hover:bg-gray-200 transition"
            >
              {currentLangChar}
              <ChevronDown size={16} />
            </button>

            {langOpenDesktop && (
              <ul className="absolute right-0 mt-1 w-28 bg-white border rounded shadow-lg z-50">
                {languages.map((lang) => (
                  <li key={lang.code}>
                    <button
                      onClick={() => changeLanguage(lang.code)}
                      className={clsx(
                        "w-full text-left px-3 py-1 hover:bg-gray-100 transition flex items-center justify-between",
                        i18n.language === lang.code && "font-bold bg-gray-100"
                      )}
                    >
                      {lang.label} {i18n.language === lang.code && "✓"}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center lg:hidden gap-2">
          {/* Mobile Language Dropdown */}
          <div className="relative" ref={mobileDropdownRef}>
            <button
              onClick={() => setLangOpenMobile(!langOpenMobile)}
              className="flex items-center gap-1 px-2 py-1 border rounded text-sm bg-gray-100 hover:bg-gray-200 transition"
            >
              {currentLangChar}
              <ChevronDown size={14} />
            </button>

            {langOpenMobile && (
              <ul className="absolute right-0 mt-1 w-28 bg-white border rounded shadow-lg z-50">
                {languages.map((lang) => (
                  <li key={lang.code}>
                    <button
                      onClick={() => changeLanguage(lang.code)}
                      className={clsx(
                        "w-full text-left px-3 py-1 hover:bg-gray-100 transition flex items-center justify-between",
                        i18n.language === lang.code && "font-bold bg-gray-100"
                      )}
                    >
                      {lang.label} {i18n.language === lang.code && "✓"}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="cursor-pointer text-dark-red"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <nav id="mobile-navigation" aria-label="Mobile navigation">
        <MobileNav isOpen={mobileOpen} close={setMobileOpen} />
      </nav>
    </header>
  );
}
