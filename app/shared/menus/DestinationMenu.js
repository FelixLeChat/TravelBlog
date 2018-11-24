// @flow
import React from 'react';
import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';

import type { GlobalStore } from '../../models/global';
import { groupBy } from '../../utils/utils';

const i18nCommonPrefix = 'common';

type Props = {
  t: TFunction,
  global: GlobalStore,
};

const mapStateToProps = state => ({
  global: state.global,
});

@withNamespaces([i18nCommonPrefix])
@connect(mapStateToProps)
class DestinationMenu extends React.Component<Props> {
  render() {
    const {
      t,
      global: {
        data: { destinations },
      },
    } = this.props;

    let groupedDestinations = {};
    if (destinations) {
      groupedDestinations = groupBy(destinations, 'continent');
    }
    return (
      <div className="destinations-menu-container ant-margin-left">
        {Object.keys(groupedDestinations).map(key => (
          <>
            <h3 className="border-box">{t(`${i18nCommonPrefix}:continents.${key}`)}</h3>
            <ul>
              {groupedDestinations[key].sort().map((destination, index) => (
                <li key={destination.name}>
                  <div
                    className={`destination-with-image${
                      index === groupedDestinations[key].length - 1 ? ' remove-border-bottom' : ''
                    }`}
                  >
                    {destination.thumbnail && (
                      <img src={destination.thumbnail} alt={`Thumbnail of ${destination.name}`} />
                    )}
                    <div className="destination-name">
                      {t(`${i18nCommonPrefix}:destinations.${destination.name}`)}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </>
        ))}
      </div>
    );
  }
}

export default DestinationMenu;
