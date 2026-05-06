// components/AccreditationPage.tsx
import { AccreditationList } from '../components/accreditaion/AccreditationList';
import PageBanner from '../components/banner/PageBanner';
import BGImage from '../assets/Banner/accreditations.png';
import BGImageAR from '../assets/Banner/accreditations-ar.jpg';
import { CertificateGrid } from '../components/CertificateGrid';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { applyMeta, lang } from '../utility/utility';


export default function Accreditation() {

  const {pathname} = useLocation();

  useEffect(() => {
    applyMeta(pathname)
    
  })

  return <>
  
    <PageBanner currentCrumb="accreditations" pageTitle="accreditations" Imageurl={lang ==='en'? BGImage: BGImageAR} />

    <AccreditationList />

    <CertificateGrid />
  
  </>
    
}
