import React from 'react';
import ExternalLink from './externalLink';
import InternalLink from 'next/link';

type Props = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  label?: string;
  as?: string;
};

// /
// Manage external and internal links
// /
const Link = ({ href, children, ...props }: Props) => {
  if (!href) {
    return <a {...props}>{children}</a>;
  }

  // External link
  if (href && (href.indexOf('http://') > -1 || href.indexOf('https://') > -1)) {
    return (
      <ExternalLink href={href} {...props}>
        {children}
      </ExternalLink>
    );
  }

  // Internal link
  const { key, label, as, ...remainingProps } = props;
  return (
    <InternalLink href={href} as={as} key={key}>
      <a {...remainingProps} aria-label={label}>
        {children}
      </a>
    </InternalLink>
  );
};

export default Link;
