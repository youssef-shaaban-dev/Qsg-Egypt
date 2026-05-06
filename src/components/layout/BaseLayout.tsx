import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const BaseLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen" role="document">
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
