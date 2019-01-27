// @flow
import React from 'react';
import AD from 'react-google-publisher-tag';

const SideArticlePageAd = () => (
  <div style={{ textAlign: 'center', minWidth: 300, minHeight: 250 }}>
    {typeof window !== 'undefined' && <AD path="/21784165674/article_side_ad" />}
  </div>
);

export default SideArticlePageAd;
