// components/AccreditationPage.tsx
import { AccreditationList } from '../components/accreditaion/AccreditationList';
import PageBanner from '../components/banner/PageBanner';
import BGImage from '../assets/Banner/accreditations.webp';
import BGImageAR from '../assets/Banner/accreditations-ar.webp';
import { CertificateGrid } from '../components/CertificateGrid';

import { useEffect } from 'react';
import { lang } from '../utility/utility';


export default function Accreditation() {



  useEffect(() => {
    
  })

  return <>
  
    <PageBanner currentCrumb="accreditations" pageTitle="accreditations" Imageurl={lang ==='en'? BGImage: BGImageAR} />

    <AccreditationList />

    <CertificateGrid />
  
  </>
    
}
