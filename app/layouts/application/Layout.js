// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Layout as AntLayout } from 'antd';

import Header from './Header';
import Footer from './Footer';

const { Content } = AntLayout;

type Props = {
  children: React.Node,
};

const mapStateToProps = state => ({
  global: state.global,
});

const Layout = ({ children }: Props) => (
  <AntLayout>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </AntLayout>
);

export default connect(mapStateToProps)(Layout);
