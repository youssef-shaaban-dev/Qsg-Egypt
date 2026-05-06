import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";

interface NotFoundProps {
  title?: string;
  description?: string;
  showSearch?: boolean;
}

export default function NotFound({
  title,
  description,
  showSearch = false,
}: NotFoundProps) {
  
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem("q") as HTMLInputElement | null;
    const q = input?.value?.trim();
    if (!q) return;
    navigate(`/?q=${encodeURIComponent(q)}`);
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center bg-off-white text-light-navy p-6 mt-16"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-40 h-40 rounded-full bg-light-navy/10 mx-auto mb-6 flex items-center justify-center"
        >
          <span className="text-6xl font-extrabold text-dark-red">404</span>
        </motion.div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-dark-red mb-3">
          {title ?? t("title")}
        </h1>

        <p className="text-medium-gray mb-6">
          {description ?? t("description")}
        </p>

        {/* Actions */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Link
            to="/"
            className="px-5 py-2 rounded-lg bg-dark-red text-white hover:bg-light-red"
          >
            {t("home")}
          </Link>

          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 rounded-lg border cursor-pointer text-light-navy hover:bg-off-white"
          >
            {t("goBack")}
          </button>
        </div>

        {/* Optional Search */}
        {showSearch && (
          <form onSubmit={onSearch} className="mt-6 flex justify-center">
            <input
              name="q"
              placeholder={t("searchPlaceholder")}
              className="px-4 py-2 border rounded-s-lg focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-light-navy text-white rounded-e-lg"
            >
              {t("search")}
            </button>
          </form>
        )}

        {/* Footer */}
        <div className="mt-8 text-sm text-medium-gray">
          <p className="font-semibold text-gold mb-2">
            {t("errorCode")}
          </p>
          <Link to="/contact" className="hover:underline">
            {t("contact")}
          </Link>
          <p className="mt-4 text-xs">{t("hint")}</p>
        </div>
      </motion.div>
    </main>
  );
}
