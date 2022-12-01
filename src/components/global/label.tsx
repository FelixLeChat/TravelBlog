import React from 'react';

type Props = {
  children: React.ReactNode,
  className: string,
};

const Badge = (props: Props) => <span className={`ant-label ${props.className ? props.className : ''}`}>{props.children}</span>;

export default Badge;
