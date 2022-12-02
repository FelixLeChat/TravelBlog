import React from 'react';
import { Layout, Row, Col } from 'antd';
import { useTranslation } from 'next-i18next';

import Container from '../components/global/container';
import { Link } from '../utils';

const i18nPrefix = 'footer';

const Footer = () => {
  const { t } = useTranslation(['common', i18nPrefix]);

  return (
    <Layout.Footer>
      <div className="footer ant-padding-large-top ant-padding-large-bottom">
        <Container>
          <Row type="flex" justify="space-around" align="middle">
            {/* Tablet Up */}
            <Col span={0} md={8} className="ant-text-left">
              {t(`${i18nPrefix}:copyright`)}
            </Col>
            <Col span={0} md={8} className="ant-text-center">
              <Link href="/">
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
            <Col span={0} md={8} className="ant-text-right">
              {t(`${i18nPrefix}:made_in_montreal`)}
            </Col>

            {/* Mobile only */}

            <Col span={24} md={0} className="ant-text-center">
              <Link href="/">
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
            <Col span={24} md={0} className="ant-text-center ant-margin-large-top">
              {t(`${i18nPrefix}:made_in_montreal`)}
            </Col>
            <Col span={24} md={0} className="ant-text-center ant-margin-top">
              {t(`${i18nPrefix}:copyright`)}
            </Col>
          </Row>
        </Container>
      </div>
      <div className="subfooter">
        <Container>
          <Row>
            <Col span={24} className="ant-text-center">
              <Link href="/privacy">
                <a>Privacy Policy</a>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout.Footer>
  );
}

export default Footer;
