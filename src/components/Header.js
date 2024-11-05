import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to handle link click
  const handleLinkClick = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-center">
          <h3>Teaching of Natural Language Processing</h3>
        </div>
        <div className={`navbar-left ${menuOpen ? 'active' : ''}`}>
          <NavLink to="/" className="nav-link" activeClassName="active" onClick={handleLinkClick}>
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link" activeClassName="active" onClick={handleLinkClick}>
            About
          </NavLink>
          <NavLink to="/services" className="nav-link" activeClassName="active" onClick={handleLinkClick}>
            Themes
          </NavLink>
          <NavLink to="/contact" className="nav-link" activeClassName="active" onClick={handleLinkClick}>
            Contact
          </NavLink>
        </div>
        <div className="navbar-right">
          <button className="register-btn">
            <NavLink to="/register" style={{ textDecoration: 'none', color: '#fff' }}>Register</NavLink>
          </button>
        </div>
        <div className="burger-menu" onClick={toggleMenu}>
          ☰
        </div>
      </nav>
    </header>
  );
}

export default Header;
