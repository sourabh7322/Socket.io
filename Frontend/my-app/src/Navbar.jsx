import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the custom CSS for the navbar

const Navbar = () => {
  return (
    <nav className="navbar" style={{"display":"flex","alignItems":"center"}}>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/login" className="navbar-link">Login</Link>
        </li>
        <li className="navbar-item">
          <Link to="/register" className="navbar-link">Register</Link>
        </li>
        <li className="navbar-item">
          <Link to="/tasks" className="navbar-link">Tasks</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
