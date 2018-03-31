import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import Login from './containers/login.js';
import Login from './containers/login';

import { Route, Switch } from 'react-router-dom';

class Home extends Component {
  render(){
    return (
      <div> This is Home Screen</div>
    );
  }
}

class Page1 extends Component{
  render(){
    return <div>This is Page 1</div>;
  }
}

class Page2 extends Component{
  render(){
    return <div>This is Page 2</div>;
  }
}

class Page3 extends Component{
  render(){
    return <div>This is Page 3</div>;
  }
}

class Test1SubTest1 extends Component{
  render(){
    return <div>This is  SubTest1 of Test1</div>;
  }
}

class UnImplemented extends Component {
  render(){
    return <div> Need to implement </div>;
  }
}
/*
class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/test1" component={Page1} />
        <Route path="/test2" component={Page2} />
        <Route path="/test3" component={Page3} />
        <Route path="/test1" component={Page3} />
        <Route path="/*" component={UnImplemented} />
      </Switch>
    );
  }
}*/

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/test1" component={Page1} />
        <Route path="/test1/subTest1" component={Test1SubTest1} />
        <Route path="/test2" component={Page2} />
        <Route path="/test3" component={Page3} />
        <Route path="/test1" component={Page3} />
      </div>
    );
  }
}

export default App;
