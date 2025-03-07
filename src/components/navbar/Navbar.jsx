import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu and close icons
import "./Navbar.css";
import logo from "../images/logo.png"; 
import loginIcon from "../images/login.png"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Bank Logo" className="logo-img" />
        <span className="bank-name-heading">BANKNAME</span>
      </div>

      {/* Hamburger Icon - Only Visible on Mobile & Tablet */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FiX size={32} /> : <FiMenu size={32} />}
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
        <li><Link to="/features" onClick={() => setMenuOpen(false)}>Feature</Link></li>
        <li><Link to="/chat" onClick={() => setMenuOpen(false)}>AccessChat</Link></li>
      </ul>

      {/* Login Icon */}
      <img src={loginIcon} alt="Login" className="login-icon" />
    </nav>
  );
};

export default Navbar;
