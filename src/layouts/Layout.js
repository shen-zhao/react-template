import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import SideBar from './SideBar';
import Header from './Header';
import Content from './Content';

@connect(state => ({
  collapsed: state.app.collapsed
}))
class AppLayout extends PureComponent {
  static propTypes = {
    collapsed: PropTypes.bool
  }
  render() {
    const { collapsed } = this.props;
    return (
      <Layout>
        <SideBar/>
        <Layout style={{transition: 'margin 0.2s', marginLeft: collapsed ? 80 : 200}}>
          <Header />
          <Content />
        </Layout>
      </Layout>
    );
  }
}

export default AppLayout;
