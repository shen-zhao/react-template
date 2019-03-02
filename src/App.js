import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '@src/pages/Login';
import Layout from '@src/layouts/Layout';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login}/>
            <Route path="/" component={Layout}/>
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
