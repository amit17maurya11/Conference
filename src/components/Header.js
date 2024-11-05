// components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-center">
          <h3>Teaching of Natural Language Processing</h3>
        </div>
        <div className="navbar-left">
          <NavLink to="/" className="nav-link" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link" activeClassName="active">
            About
          </NavLink>
          <NavLink to="/services" className="nav-link" activeClassName="active">
          Themes
          </NavLink>
          <NavLink to="/contact" className="nav-link" activeClassName="active">
            Contact
          </NavLink>
        </div>
        <div className="navbar-right">
          <button className="register-btn">
           <NavLink to='/register' style={{textDecoration:'none',color:"#fff"}}>Register</NavLink>
            </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
