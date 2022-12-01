import React from 'react';
import { useTranslation } from 'next-i18next';

import Home from '../app/home/Home';

const i18nPrefix = 'home';

const Home: NextPage = () => {
  const { i18n, t, } = useTranslation(PAGE_NAMESPACE);

  return (
    <>
      <SEOHead
        title={t(`${i18nPrefix}:seo.title`)}
        description={t(`${i18nPrefix}:seo.description`)}
        currentLocale={i18n.language}
        currentUrl={currentRoute ? currentRoute.parsedUrl.path : ''}
      />
      <Home />
    </>
  );
}

export default Homepage;
