import React from 'react';
import { setUtms } from '../../utils';

type Props = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  label?: string;
};

const ExternalLink = ({ href, label, children, ...props }: Props) => {
  // add referral to href
  const utmHref = setUtms(href as string);
  return (
    <a
      {...props}
      href={utmHref?.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
