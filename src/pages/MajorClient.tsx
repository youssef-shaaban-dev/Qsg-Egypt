// pages/MajorClient.tsx
import PageBanner from '../components/banner/PageBanner';
import BGImage from '../assets/about/client.png';
import BGImageAR from '../assets/about/client-ar.png';

import MajorClientsSection from '../components/MajorClientsSection';
import {
  accountingClients,
  bankClients,
  companiesClients,
  realstateClients
} from '../static/clientData';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { applyMeta, lang } from '../utility/utility';
import { useTranslation } from 'react-i18next';

export default function MajorClient() {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    applyMeta(pathname);
  }, [pathname]);

  return (
    <>
      {/* Page Banner */}
      <PageBanner
        currentCrumb="clients.heading"
        pageTitle="clients.heading"
        Imageurl={lang === 'ar'? BGImageAR: BGImage}
      />

      {/* Clients Sections */}
      <main role="main" className="space-y-20">
        <MajorClientsSection
          title={t('banks')}
          clients={bankClients}
        />

        <MajorClientsSection
          title={t('companies')}
          clients={companiesClients}
        />

        <MajorClientsSection
          title={t('realEstate')}
          clients={realstateClients}
        />

        <MajorClientsSection
          title={t('accounting')}
          clients={accountingClients}
        />
      </main>
    </>
  );
}
