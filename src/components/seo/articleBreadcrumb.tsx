import React from 'react';
import { useTranslation } from 'next-i18next';

import JsonLd from './jsonLd';
import { getDestinations } from '../../data';

const i18nPrefix = 'breadcrumb';
const i18nCommonPrefix = 'common';

type Props = {
  article: {
    destination_id: string,
    title: string,
    slug: string
  }
};

const ArticleBreadcrumb = ({article}: Props) => {
    const destinations = getDestinations()?.destinations;
    const { t } = useTranslation([i18nCommonPrefix, i18nPrefix]);

    const articleData = {
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

    if (article && article.destination_id && article.title && article.slug) {
      let destination = null;
      let destinationTranslation: string | null = null;
      for (let i = 0; i < destinations.length; i += 1) {
        if (destinations[i].id === article.destination_id) {
          destination = destinations[i].name;
          destinationTranslation = t(`${i18nCommonPrefix}:destinations.${destination}`);
        }
      }

      articleData.itemListElement.push({
        '@type': 'ListItem',
        position: 2,
        item: {
          '@id': `https://www.travelingmaude.com/destinations/${destination}`,
          name: destinationTranslation as string,
        },
      });

      articleData.itemListElement.push({
        '@type': 'ListItem',
        position: 3,
        item: {
          '@id': `https://www.travelingmaude.com/destinations/${destination}/${article.slug}`,
          name: article.title,
        },
      });
    }

    return <JsonLd data={articleData} />;
  }

export default ArticleBreadcrumb;
