import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Layout, Icon } from 'antd';
import { toggleSiderStatus } from '@src/actions/app';
import './index.scss';

const { Header } = Layout;

@connect(state => ({
  collapsed: state.app.collapsed
}), dispatch => ({
  toggle: () => dispatch(toggleSiderStatus())
}))
class AppHeader extends PureComponent {
  static propTypes = {
    collapsed: PropTypes.bool,
    toggle: PropTypes.func
  }
  render() {
    const { collapsed, toggle } = this.props;

    return (
      <Header style={{ left: collapsed ? 80 : 200 }}>
        <Icon
          className="trigger_btn"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={toggle}
        />
        <div style={{float: 'right'}}>哈哈</div>
      </Header>
    )
  }
}

export default AppHeader;
