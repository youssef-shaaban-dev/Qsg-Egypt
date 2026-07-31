import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Seo from "../seo/Seo";
import { pageMetadata } from "../../static/metadata";
import { useTranslation } from "react-i18next";

const BaseLayout: React.FC = () => {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();
  const lang = i18n.language || 'en';

  // Find metadata for the current path
  const cleanPath = pathname.replace(/^\/ar/, "") || "/";
  const meta = pageMetadata.find(p => p.path === cleanPath);

  const title = meta 
    ? (typeof meta.title === "string" ? meta.title : meta.title[lang as keyof typeof meta.title])
    : "QSG Egypt";
    
  const description = meta 
    ? (typeof meta.description === "string" ? meta.description : meta.description[lang as keyof typeof meta.description])
    : "QSG Egypt - Asset Valuation, Inspection, and Consulting Services";

  return (
    <div className="flex flex-col min-h-screen" role="document">
      <Seo 
        title={title} 
        description={description} 
        canonicalPath={cleanPath} 
      />
      {/* 🌐 Global Header */}
      <Header />

      {/* 🧭 Main page content */}
      <main
        id="main-content"
        className="flex-1"
        role="main"
        aria-label="Main page content"
        tabIndex={-1}
      >
        <Outlet />
      </main>

      {/* 📍 Global Footer */}
      <Footer />
    </div>
  );
};

export default BaseLayout;
