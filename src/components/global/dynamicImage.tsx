import React from 'react';
import classNames from 'classnames';

type Props = {
  src: string,
  className: string,
  alt: string,
};

type State = {
  status: 'pending' | 'loading' | 'success' | 'failed' | null,
  img: HTMLImageElement | null
};

class DynamicImage extends React.Component<Props, State> {
  public state = {
    status: null,
    img: null
  };

  componentDidMount() {
    this.reload(this.props);
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps(nextProps: Props) {
    // reload only when image src is changed.
    if (this.props.src !== nextProps.src) {
      this.reload(nextProps);
    }
  }

  componentWillUnmount() {
    const {img} = this.state;
    if (img) {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      img.onload = () => {};
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      img.onerror = () => {};
      this.setState({ img: null })
    }
  }

  reload = (props: Props) => {
    this.setState({ img: new Image()}, () => {
      const { img } = this.state;
      img.onload = this.handleLoad;
      img.onerror = this.handleError;
      img.src = props.src;
    })
  };

  // eslint-disable-next-line
  handleLoad = () => {
    this.setState({ status: 'success' });
  };

  // eslint-disable-next-line
  handleError = () => {
    this.setState({ status: 'failed' });
  };

  render() {
    const { src, className, alt } = this.props;
    const { status } = this.state;
    const dynamicImageClassName = classNames(
      `dynamic-image ${status === 'success' ? '' : 'placeholder'} ${className}`,
    );
    return (
      <div className={dynamicImageClassName}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {status === 'success' && <img src={src} alt={alt} />}
      </div>
    );
  }
}

export default DynamicImage;