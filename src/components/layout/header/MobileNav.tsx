import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";
import { navLinks } from "../../../static/navLinks";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { localizePath } from "../../../utility/utility";

interface MobileNavProps {
  isOpen: boolean;
  close: (open: boolean) => void; // function to close the mobile nav
}

export default function MobileNav({ isOpen, close }: MobileNavProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith("ar") ? "ar" : "en";

  const toggleDropdown = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  if (!isOpen) return null;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={clsx(
        "lg:hidden bg-off-white border-t border-off-white",
        lang === "ar" && "text-right"
      )}
      role="navigation"
      aria-label="Mobile Navigation"
    >
      <ul className="flex flex-col p-4 space-y-2" role="menu">
        {navLinks.map((item) => {
          const hasSubmenu = !!item.submenu;
          const isExpanded = activeDropdown === item.label.en; // use en as key
          const submenuId = `${item.label.en.toLowerCase().replace(/\s+/g, "-")}-submenu`;

          return (
            <li key={item.label.en} role="none">
              {hasSubmenu ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.label.en)}
                    className="w-full cursor-pointer flex justify-between items-center text-dark-red py-2 text-left"
                    aria-haspopup="menu"
                    aria-expanded={isExpanded}
                    aria-controls={submenuId}
                  >
                    <span>{item.label[lang]}</span>
                    <ChevronDown
                      size={16}
                      aria-hidden="true"
                      className={clsx(
                        "transition-transform",
                        isExpanded && "rotate-180"
                      )}
                    />
                  </button>

                  {isExpanded && (
                    <div
                      id={submenuId}
                      role="menu"
                      aria-label={`${item.label[lang]} submenu`}
                      className={clsx("pl-4", lang === "ar" && "pr-4 pl-0")}
                    >
                      {item.submenu?.map((sub) => (
                        <Link
                          key={sub.label.en}
                          to={localizePath(sub.href,lang)}
                          role="menuitem"
                          tabIndex={0}
                          onClick={() => close(false)} // Close menu on link click
                          className="block py-2 text-gold hover:text-dark-red transition-colors duration-200"
                        >
                          {sub.label[lang]}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={localizePath(item.href,lang)}
                  role="menuitem"
                  tabIndex={0}
                  onClick={() => close(false)} // Close menu on link click
                  className="block py-2 text-dark-red hover:text-gold transition-colors duration-200"
                >
                  {item.label[lang]}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}
