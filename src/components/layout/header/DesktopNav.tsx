import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { navLinks } from "../../../static/navLinks";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { localizePath } from "../../../utility/utility";

const MotionLink = motion(Link);

export default function DesktopNav() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith("ar") ? "ar" : "en";

  return (
    <nav
      className="hidden lg:flex gap-8 relative"
      aria-label="Main Navigation"
      role="navigation"
    >
      {navLinks.map((item) => {
        const hasSubmenu = !!item.submenu;
        const isActive = activeMenu === item.label.en; // Using English as key
        const menuId = `${item.label.en.toLowerCase().replace(/\s+/g, "-")}-menu`;

        return (
          <div
            key={item.label.en}
            className="relative"
            onMouseEnter={() => hasSubmenu && setActiveMenu(item.label.en)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            {/* 🔹 Main Navigation Link */}
            <Link
              to={localizePath(item.href,lang)}
              aria-haspopup={hasSubmenu ? "menu" : undefined}
              aria-expanded={hasSubmenu ? isActive : undefined}
              aria-controls={hasSubmenu ? menuId : undefined}
              onClick={(e) => hasSubmenu && e.preventDefault()}
              className={`font-medium flex items-center gap-1 transition-colors duration-300 ${
                isActive ? "text-gold" : "text-dark-red hover:text-gold"
              }`}
              role="menuitem"
            >
              {item.label[lang]}
              {hasSubmenu && (
                <ChevronDown
                  size={16}
                  aria-hidden="true"
                  className={`transition-transform duration-300 ${
                    isActive ? "rotate-180 text-gold" : "text-dark-red/70"
                  }`}
                />
              )}
            </Link>

            {/* ✨ Animated Dropdown Menu */}
            <AnimatePresence>
              {hasSubmenu && isActive && (
                <motion.div
                  id={menuId}
                  role="menu"
                  aria-label={`${item.label[lang]} submenu`}
                  key={item.label.en}
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 18,
                  }}
                  className="absolute top-full rtl:right-0 left-0 mt-2 min-w-[220px] overflow-hidden z-50
                    bg-off-white/70 backdrop-blur-md border border-white/10 
                    shadow-[0_8px_20px_rgba(0,0,0,0.25)] rounded-xl"
                >
                  {item.submenu?.map((sub) => (
                    <MotionLink
                      key={sub.label.en}
                      to={localizePath(sub.href,lang)}
                      role="menuitem"
                      tabIndex={0}
                      whileHover={{
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        color: "#747940",
                        transition: { duration: 0.2 },
                      }}
                      className="block px-5 py-3 text-dark-red/90 text-sm font-medium 
                                 hover:text-dark-red transition-all duration-200 border-b border-white/5
                                 last:border-b-0"
                    >
                      {sub.label[lang]}
                    </MotionLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </nav>
  );
}
