// @flow
import React from 'react';
import { Drawer, Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-regular-svg-icons';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { groupBy, Link } from '../utils';

const { SubMenu, ItemGroup } = Menu;
const i18nPrefix = 'navigation/sideMenu';
const i18nCommonPrefix = 'common';

type Props = {
  setMobileMenuState: (state: boolean) => void
  isMobileMenuOpened: boolean
};

class Header extends React.PureComponent<Props> {
  onClose = () => {
    const { setMobileMenuState } = this.props;
    setMobileMenuState(false);
  };

  render() {
    const { isMobileMenuOpened } = this.props;

    let groupedDestinations = {};
    if (destinations) {
      groupedDestinations = groupBy(destinations, 'continent');
    }

    const selectedKeys = [];
    const openedKeys = [];
    if (currentRoute.route.name === 'destination-details') {
      openedKeys.push('sub-destinations');

      if (currentRoute.query.destination) {
        selectedKeys.push(currentRoute.query.destination);
      }
    } else if (currentRoute.route.name === 'destinations-index') {
      openedKeys.push('sub-destinations');
      selectedKeys.push('all-destinations');
    } else if (currentRoute.route.name === 'index') {
      selectedKeys.push('home');
    } else {
      selectedKeys.push(currentRoute.route.name);
    }

    return (
      <Drawer
        title="Traveling Maude"
        placement="left"
        closable
        onClose={this.onClose}
        visible={isMobileMenuOpened}
        className="ant-hidden@s side-menu"
      >
        <Menu
          style={{ width: '100%' }}
          defaultSelectedKeys={['1']}
          selectedKeys={selectedKeys}
          defaultOpenKeys={openedKeys}
          mode="inline"
        >
          <Menu.Item key="home">
            <Link href='/'>
              <a>{t(`${i18nPrefix}:navigation.home`)}</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link href="/about">
              <a>
                <FontAwesomeIcon icon={faCameraRetro} className="submenu-menu-icon" />
                {t(`${i18nPrefix}:navigation.about`)}
              </a>
            </Link>
          </Menu.Item>
          <SubMenu
            key="sub-destinations"
            title={(
              <span>
                <FontAwesomeIcon icon={faMap} className="submenu-menu-icon" />
                {t(`${i18nPrefix}:navigation.destinations`)}
              </span>
            )}
          >
            <Menu.Item key="all-destinations">
              <Link href="/destinations-index">
                <a>{t(`${i18nPrefix}:navigation.all_destinations`)}</a>
              </Link>
            </Menu.Item>
            {Object.keys(groupedDestinations).map(key => (
              <ItemGroup title={t(`${i18nCommonPrefix}:continents.${key}`)} key={key}>
                {groupedDestinations[key].sort().map(destination => (
                  <Menu.Item key={destination.name}>
                    <Link href={`/destination-details/${destination.name}`} >
                      <a>{t(`${i18nCommonPrefix}:destinations.${destination.name}`)}</a>
                    </Link>
                  </Menu.Item>
                ))}
              </ItemGroup>
            ))}
          </SubMenu>
        </Menu>

        <div
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            padding: '10px 16px',
            textAlign: 'center',
            left: 0,
            right: 0,
          }}
          className="mobile-sidemenu-socials"
        >
          <a
            href="https://www.instagram.com/traveling_maude/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com/company/traveling-maude/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </Drawer>
    );
  }
}

export default Header;
