// @flow
import React from 'react';
import JsonLd from './jsonLd';

const WebsiteStructured = () => {
  const siteData = {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    url: 'https://travelingmaude.com',
  };

  return <JsonLd data={siteData} />;
};

export default WebsiteStructured;
