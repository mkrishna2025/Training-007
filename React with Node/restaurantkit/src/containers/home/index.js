import React, { Component } from 'react';
import logo from '../../images/logo.png';
import "./home.css";
import { Link } from 'react-router-dom';
import Header from '../../components/header.js';
import Footer from '../../components/footer.js';

export default class Home extends Component {
  constructor(props){
        super(props);
    }
  render(){
    return (
      <div>
        <Header title="Welcome to Restaurant Kit"/>
        This is Home Screen.
        <Footer />
      </div>
    );
  }
}