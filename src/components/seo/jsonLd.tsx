import React from 'react';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
};

/* eslint-disable */
const JsonLd = ({ data }: Props) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
);
/* eslint-enable */

export default JsonLd;
