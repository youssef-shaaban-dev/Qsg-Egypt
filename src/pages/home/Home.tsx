import React, { Suspense, useEffect } from "react";
import Banner from "./sections/Banner";



// Lazy load sections
const AboutSection = React.lazy(() => import("./sections/AboutSection"));
const ServicesSection = React.lazy(() => import("./sections/ServicesSection"));
const ClientsSection = React.lazy(() => import("./sections/ClientsSection"));

const Home: React.FC = () => {


  useEffect(() => {
    
  })
  
  return <>
    <Banner />

    <Suspense fallback={<div className="text-center py-16">Loading...</div>}>
      <AboutSection />
      <ServicesSection />
      <ClientsSection />
      {/* <MajorProjectsSection /> */}
      {/* <NewsSection /> */}
    </Suspense>
  </>
};

export default Home;
