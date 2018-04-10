import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import Login from './containers/login.js';
import Login from './containers/login';
import Home from './containers/home';
import Unimplemented from './containers/unimplemented';

import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/*" component={Unimplemented} />
      </Switch>
    );
  }
}

export default App;
