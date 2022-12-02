// @flow
import React from 'react';
import { useTranslation } from 'next-i18next';

import JsonLd from './jsonLd';

const i18nPrefix = 'breadcrumb';
const i18nCommonPrefix = 'common';

type Props = {
  destination: string,
};

const DestinationBreadcrumb = ({destination}: Props) => {
  const { t } = useTranslation([i18nCommonPrefix, i18nPrefix]);

  const destinationData = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@id': 'https://www.travelingmaude.com/destinations',
          name: t(`${i18nPrefix}:destinations`),
        },
      },
    ],
  };

  if (destination) {
    destinationData.itemListElement.push({
      '@type': 'ListItem',
      position: 2,
      item: {
        '@id': `https://www.travelingmaude.com/destinations/${destination}`,
        name: t(`${i18nCommonPrefix}:destinations.${destination}`),
      },
    });
  }

  return <JsonLd data={destinationData} />;
}

export default DestinationBreadcrumb;
