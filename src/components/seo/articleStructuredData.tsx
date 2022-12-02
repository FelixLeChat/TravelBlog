// @flow
import React from 'react';
import { useRouter } from 'next/router';

import JsonLd from './jsonLd';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  article: any
};

const ArticleStructuredData = ({article}: Props) => {
  const router = useRouter();

  const articleData = {
    '@context': 'http://schema.org',
    '@type': 'Article',
    headline: '',
    image: [],
    datePublished: '',
    dateModified: '',
    author: {
      '@type': 'Organization',
      name: 'Traveling Maude',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Traveling Maude',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.travelingmaude.com/static/images/logo/logo_3.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.travelingmaude.com${router.asPath}`,
    },
  };

  if (article) {
    if (article.title) articleData.headline = article.title;

    if (article.image) articleData.image.push(article.image);

    if (article.top_images) {
      for (let index = 0; index < article.top_images.length; index += 1) {
        articleData.image.push(article.top_images[index]);
      }
    }

    if (article.published_at) {
      articleData.datePublished = article.published_at;
      articleData.dateModified = article.published_at;
    }
  }

  return <JsonLd data={articleData} />;
}

export default ArticleStructuredData;
