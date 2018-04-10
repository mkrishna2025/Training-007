import React, { Component } from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import './header.css';

export default class Header extends Component {
  constructor(props){
        super(props);
        this.state = {
            links: [
                {link: "/home", label: 'Home'},
                {link: "/home/aboutus", label: 'Aboutus'},
                {link: "/home/topics", label: 'Topics'},
                {link: "/home/queries", label: 'Queries'},
                {link: "/home/map", label: 'Map'},
                {link: "/home/restaurants", label: 'Restaurants'},
                {link: "/home/attendees", label: 'Attendees'}
            ]
        }
    }
  render(){
    return (
      <div>
        <div class="title">
            <img src={logo} />
            <h1>{this.props.title}</h1>
        </div>
        <div class="header">
            <ul>
                {this.state.links.map( item => <li><Link to={item.link} activeStyle={{color:"blue"}}>{item.label}</Link></li>)}
            </ul>
        </div>
    </div>
    );
  }
}