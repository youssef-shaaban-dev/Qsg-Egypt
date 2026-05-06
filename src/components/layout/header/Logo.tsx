import { Link } from "react-router-dom";
import SiteLogo from "../../../assets/logo-qsg-1.png";
import { localizePath } from "../../../utility/utility";
import i18n from "../../../i18n";

export default function Logo() {
  return (
    <Link
      to={localizePath('/',i18n.language)}
      className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-gold rounded-md"
      aria-label="Go to QSG Egypt homepage"
    >
      {/* 🌞 Light Mode Logo */}
      <img
        src={SiteLogo}
        alt="QSG Egypt company logo"
        className="block dark:hidden h-30 w-auto"
        aria-hidden="false"
      />

      {/* 🌙 Dark Mode Logo */}
      <img
        src={SiteLogo}
        alt=""
        className="hidden dark:block h-30 w-auto"
        aria-hidden="true"
      />
    </Link>
  );
}
