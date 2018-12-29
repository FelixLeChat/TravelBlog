// @flow
import React from 'react';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';
import Dotdotdot from 'react-dotdotdot';
import { Col, Row } from 'antd';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMap } from '@fortawesome/free-regular-svg-icons';

import { Link } from '../../../config/routes';

const i18nPrefix = 'articles/common';
const i18nCommonPrefix = 'common';

type Props = {
  t: TFunction,
  article: any,
  global: any,
  className: string,
};

type State = {
  isMounted: boolean,
};

const mapStateToProps = state => ({
  global: state.global,
});

@withNamespaces([i18nCommonPrefix, i18nPrefix])
@connect(mapStateToProps)
class ArticleCard extends React.Component<Props, State> {
  state = {
    isMounted: false,
  };

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  render() {
    const {
      t,
      article,
      className,
      global: {
        data: { themes, destinations },
      },
    } = this.props;
    const { isMounted } = this.state;

    let theme = null;
    for (let i = 0; i < themes.length; i += 1) {
      if (themes[i].id === article.theme_id) theme = t(`${i18nCommonPrefix}:themes.${themes[i].name}`);
    }

    let destination = null;
    let destinationSlug = null;
    for (let i = 0; i < destinations.length; i += 1) {
      if (destinations[i].id === article.destination_id) {
        destinationSlug = destinations[i].name;
        destination = t(`${i18nCommonPrefix}:destinations.${destinationSlug}`);
      }
    }

    return (
      <Link route="article" params={{ destination: destinationSlug, article: article.slug }}>
        <a className={className || ''} style={{ display: 'block' }}>
          <div className="article-card">
            <div className="article-card-image ant-visible@m">
              <div
                className="article-card-image-background"
                style={{ backgroundImage: `url(${article.thumbnail})` }}
              />
              {theme && <div className="article-card-theme">{theme}</div>}
            </div>
            <div className="article-card-content">
              <Dotdotdot clamp={2}>
                <h2>{article.title}</h2>
              </Dotdotdot>
              {isMounted && (
                <Dotdotdot clamp={3}>
                  <p
                    style={{ marginBottom: 0 }}
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                </Dotdotdot>
              )}
              <div className="info-block">
                <Row>
                  <Col span={12}>
                    {isMounted && <FontAwesomeIcon icon={faClock} />}
                    {isMounted && <Moment format="MMM D YYYY" date={article.published_at} />}
                  </Col>
                  <Col span={12}>
                    {isMounted && <FontAwesomeIcon icon={faMap} />}
                    {isMounted && destination}
                  </Col>
                </Row>
              </div>
            </div>
          </div>
          <div className="article-card-image-mobile ant-hidden@m">
            <div
              className="article-card-image-background"
              style={{ backgroundImage: `url(${article.thumbnail})` }}
            />
            {theme && <div className="article-card-theme">{theme}</div>}
          </div>
        </a>
      </Link>
    );
  }
}

export default ArticleCard;
