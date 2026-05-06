import { Route, Routes } from 'react-router-dom';
import './App.css';

// Layout & Utility Components
import BaseLayout from './components/layout/BaseLayout';
import ScrollToTop from './components/layout/ScrollToTop';

// Pages
import Home from './pages/home/Home';
import About from './pages/about/About';
import Teampage from './pages/about/Teampage';
import Global from './pages/about/Global';
import Accreditation from './pages/Accreditaion';
import MajorClient from './pages/MajorClient';
import ContactUs from './pages/ContactUs';

// Service Pages
import AssetValuation from './pages/service/AssetValuation';
import Oil from './pages/service/Oil';
import Inspection from './pages/service/Inspection';
import Feasibility from './pages/service/Feasibility';

// 404 Page
import NotFound from './pages/NotFound';
import DirectionHandler from './DirectionHandler';

function App() {
  return (
    <>
      {/* Scroll to top on route change */}
      <ScrollToTop />
      <DirectionHandler />


      <Routes>
  {/* Support both / and /ar */}
  <Route path="/:lang?" element={<BaseLayout />}>
    
    {/* Home */}
    <Route index element={<Home />} />

    {/* About */}
    <Route path="about-us/the-company" element={<About />} />
    <Route path="about-us/our-team" element={<Teampage />} />
    <Route path="about-us/our-global-representatives" element={<Global />} />

    {/* Services */}
    <Route path="services/assets-valuation-and-surveying" element={<AssetValuation />} />
    <Route path="services/oil-gas-and-power-ASME-TPI" element={<Oil />} />
    <Route path="services/inspection-and-expediting" element={<Inspection />} />
    <Route path="services/feasibility-studies-and-consulting-services" element={<Feasibility />} />

    {/* Other Pages */}
    <Route path="accreditations" element={<Accreditation />} />
    <Route path="major-clients" element={<MajorClient />} />
    <Route path="contact-us" element={<ContactUs />} />

    {/* 404 */}
    <Route path="*" element={<NotFound />} />
  </Route>
</Routes>
    </>
  );
}

export default App;
