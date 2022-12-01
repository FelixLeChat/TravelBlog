// @flow
import * as React from 'react';
import { Layout as AntLayout } from 'antd';

import Header from './header';
import Footer from './footer';
import SideMenu from './sideMenu';

const { Content } = AntLayout;

const Layout: React.FC = ({ children }) => {
  return(<AntLayout style={{ minHeight: '100vh' }}>
    <Header />
    <Content>{children}</Content>
    {/* <Footer />
    <SideMenu /> */}
  </AntLayout>
);
}

export default Layout;
