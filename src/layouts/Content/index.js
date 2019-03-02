import React, { PureComponent } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import pageRoutes from '@src/route/pageRoutes';

const Content = Layout.Content

@withRouter
class AppContent extends PureComponent {
  render() {
    return (
      <Content
        style={{
          margin: '16px 16px 0',
          overflow: 'initial',
          paddingTop: 60
        }}>
        <Switch>
          {pageRoutes.map(route => {
            return <Route key={route.path} path={route.path} exact={route.exact} component={route.component}></Route>
          })}
          <Redirect exact from="/" to="/home"></Redirect>
        </Switch>
      </Content>
    )
  }
}


export default AppContent;
