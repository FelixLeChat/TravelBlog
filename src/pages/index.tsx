import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// import Home from '../app/home/Home';
import SEOHead from 'src/components/seo/seoHead';

const i18nPrefix = 'home';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  if (locale === 'default') {
    return {
      notFound: true,
    };
  }

  const i18nProps = await serverSideTranslations(locale, [
    'common',
    i18nPrefix,
    'header',
    'footer'
  ]);

  return {
    props: {
      ...i18nProps,
    },
  };
};

const Homepage: NextPage = () => {
  const { i18n, t } = useTranslation(["common", i18nPrefix, "header", 'footer']);
  const router = useRouter()

  return (
    <>
      <SEOHead
        title={t(`${i18nPrefix}:seo.title`)}
        description={t(`${i18nPrefix}:seo.description`)}
        currentLocale={i18n.language}
        currentUrl={router ? router.asPath : ''}
      />
      {/* <Home /> */}
    </>
  );
}

export default Homepage;
