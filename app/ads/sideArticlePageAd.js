// @flow
import React from 'react';

import GoogleAds from './google/googleAds';

const SideArticlePageAd = (key: string) => (
  <GoogleAds
    key={key}
    client="ca-pub-7083575751291349"
    slot="4780305778"
    style={{ display: 'inline-block', width: 250, height: 250 }}
    format="auto"
    responsive="true"
  />
);

export default SideArticlePageAd;
