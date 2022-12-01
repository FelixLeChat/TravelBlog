import * as React from 'react';

type Size =  'small' | 'normal' | 'large';

type Props = {
  children: React.ReactNode,
  size?: Size,
  className?: string,
};

const Container = ({ children, size, className }: Props) => {
  let newClassName = className;

  switch (size) {
    case 'large':
      newClassName = `ant-container-large ${className}`;
      break;

    default:
      newClassName = `ant-container ${className}`;
      break;
  }

  return (<div className={newClassName}>{children}</div>);
};

Container.defaultProps = {
  size: 'normal',
  className: '',
};

export default Container;
