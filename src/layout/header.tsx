// @flow
import React, { useState } from 'react';
import {
  Layout, Row, Col, Menu
} from 'antd';
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';
import Sticky from 'react-stickynode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'next-i18next';

import Container from '../components/global/container';
import { groupBy, Link } from '../utils';
import { getDestinations } from '../data'

const i18nPrefix = 'header';
const i18nCommonPrefix = 'common';

const AntHeader = Layout.Header;
const { SubMenu, ItemGroup } = Menu;


const Header = () => {
  const { t } = useTranslation([i18nCommonPrefix, i18nPrefix]);
  const [isMobileMenuOpened, setMobileMenuOpened] = useState(false);
  const destinations = getDestinations();
  if(destinations) {
    const groupedDestinations = groupBy(destinations, 'continent');

    return (
    <>
      <Sticky enabled className="header">
        <AntHeader>
          <Container>
            {/* Menu for Desktop app */}
            <Row className="ant-visible@s">
              <Col span={4}>
                <Link href='/'>
                  <a>
                    <img
                      src="images/logo/logo_3.png"
                      width="45px"
                      height="45px"
                      alt="Traveling Maude Logo"
                    />
                  </a>
                </Link>
              </Col>
              <Col span={16} className="ant-text-center">
                <Menu mode="horizontal">
                  <Menu.Item key="1">
                    <Link href='/'>
                      <a>{t(`${i18nPrefix}:navigation.home`)}</a>
                    </Link>
                  </Menu.Item>
                  <SubMenu key="2" title={t(`${i18nPrefix}:navigation.destinations`)}>
                    <Menu.Item>
                      <Link href='/destinations'>
                        <a>{t(`${i18nPrefix}:navigation.all_destinations`)}</a>
                      </Link>
                    </Menu.Item>
                    {Object.keys(groupedDestinations).map(key => (
                      <ItemGroup title={t(`${i18nCommonPrefix}:continents.${key}`)} key={key}>
                        {groupedDestinations[key]
                          .sort()
                          .filter(destination => destination.name)
                          .map(destination => (
                            <Menu.Item key={destination.name}>
                              <Link
                                href={`/destination/${destination.name}`}
                              >
                                <a>{t(`${i18nCommonPrefix}:destinations.${destination.name}`)}</a>
                              </Link>
                            </Menu.Item>
                          ))}
                      </ItemGroup>
                    ))}
                  </SubMenu>
                  <Menu.Item key="3">
                    <Link href='/about'>
                      <a>{t(`${i18nPrefix}:navigation.about`)}</a>
                    </Link>
                  </Menu.Item>
                </Menu>
              </Col>
              <Col span={4} className="ant-text-right header-icons">
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
              </Col>
            </Row>

            {/* Menu for mobile app */}
            <Row className="ant-hidden@s">
              <Col span={24} className="ant-text-center">
                <div
                  className="header-mobile-menu"
                  onClick={() => setMobileMenuOpened(!isMobileMenuOpened)}
                  onKeyPress={() => {}}
                >
                  {t(`${i18nPrefix}:menu.label`)}
                  {isMobileMenuOpened ? <MenuUnfoldOutlined style={{ marginLeft: 10 }} /> : <MenuFoldOutlined style={{ marginLeft: 10 }} />}
                </div>
                <Link href='/'>
                  <a style={{ marginLeft: -70 }}>
                    <img
                      src="/static/images/logo/logo_3.png"
                      width="45px"
                      height="45px"
                      alt="Traveling Maude Logo"
                    />
                  </a>
                </Link>
              </Col>
            </Row>
          </Container>
        </AntHeader>
      </Sticky>
    </>
    );
  }
  return  <></>;
}

export default Header;
