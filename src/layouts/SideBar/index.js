import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { IconFont } from '@src/components';
import menuList from '@src/constants/menu';

// const upperCase = Component => props => {
//   const upChildren = props.children.toUpperCase()
//   return (
//     <Component>{upChildren}</Component>
//   );
// }

function upperCase() {
  return function haha() {

  }
}

@upperCase
class Title extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <h1 style={{color: '#fff'}}>{children}</h1>
    );
  }
}

console.log(Title);

// const UpperCase = upperCase(Title);

const { Sider } = Layout;
const { Item, SubMenu } = Menu;

@withRouter
@connect(state => ({
  collapsed: state.app.collapsed
}))
class SideBar extends PureComponent {
  static propTypes = {
    collapsed: PropTypes.bool
  }
  render() {
    const { collapsed, location: { pathname } } = this.props;

    const createMenu = (list) => {
      return Array.isArray(list) && list.map((item) => {
        if (item.children && item.children.length) {
          let subChild = createMenu(item.children);
          return (
            <SubMenu
              key={item.name}
              title={(<span>
                {item.icon ? <IconFont type={item.icon} /> : null}
                <span>{item.name}</span>
              </span>)}
            >
              {subChild}
            </SubMenu>
          )
        } else {
          return (
            <Item key={item.path}>
              <Link to={item.path}>
                {item.icon ? <IconFont type={item.icon} /> : null}
                <span>{item.name}</span>
              </Link>
            </Item>
          )
        }
      });
    }

    const menuTree = createMenu(menuList);

    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        theme="dark"
        style={{overflow: 'auto', height: '100vh', position: 'fixed'}}>
        {/* <Title>title</Title> */}
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['home']}
          selectedKeys={[pathname]}
          inlineCollapsed={collapsed}>
          {menuTree}
        </Menu>
      </Sider>
    );
  }
}

export default SideBar;
