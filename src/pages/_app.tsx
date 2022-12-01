import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import getConfig from 'next/config';

import { appWithTranslation } from 'next-i18next';

import tracker from '../tracking';
import Layout from '../layout';

import '../assets/index.less';

const { publicRuntimeConfig } = getConfig();
const trackerInstance = tracker();

const App = ({ Component, pageProps, router }: AppProps) => {
  useEffect(() => {
    trackerInstance.initialize(publicRuntimeConfig.googleAnalyticsTrackingCode);

    const handleRouterChangeComplete = () => {
      trackerInstance.trackPageView();
    };

    router.events.on('routeChangeComplete', handleRouterChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', handleRouterChangeComplete);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default appWithTranslation(App);
