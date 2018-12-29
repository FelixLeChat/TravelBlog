// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { I18nProps } from 'react-i18next';

// import { fetchDestinationDetailsStart } from '../../app/reducers/destination';
import { withI18next } from '../../lib/withI18next';
import SEOHead from '../../app/shared/seo/SEOHead';
import { i18nextNamespaces } from '../../app/utils';
import DestinationBreadcrumb from '../../app/shared/seo/DestinationsBreadcrumb';
import DestinationsIndex from '../../app/destinations/DestinationsIndex';

const i18nPrefix = 'pages/destinations';

type Props = {
  t: TFunction,
  i18n: I18nProps,
  currentRoute: Object,
};

const mapStateToProps = state => ({
  currentRoute: state.global.data.currentRoute,
});

@withI18next(i18nextNamespaces)
@connect(mapStateToProps)
class Index extends React.Component<Props> {
  render() {
    const { t, i18n, currentRoute } = this.props;
    return (
      <>
        <SEOHead
          title={t(`${i18nPrefix}:seo.title`)}
          description={t(`${i18nPrefix}:seo.description`)}
          currentLocale={i18n.language}
          currentUrl={currentRoute ? currentRoute.parsedUrl.path : ''}
        />
        <DestinationsIndex />
        <DestinationBreadcrumb />
      </>
    );
  }
}

export default Index;
