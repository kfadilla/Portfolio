import React, { Component } from 'react';
import './Navigation.css'
import { NavLink } from 'react-router-dom'
class Navigation extends Component {
     render() {
  return (
        <nav>
            <h2 class="logo">{this.props.logoTitle}</h2>
            <ul>
                <li><NavLink to = "/">Home</NavLink></li>
                <li><NavLink to = "/About"> About</NavLink></li>
                <li><NavLink to = "/Contact"> Contact</NavLink></li>
            </ul>
        </nav>
        );
    }
}

export default Navigation;
