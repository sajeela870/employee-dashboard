// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Employee Dashboard</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/employee-form">Employee Form</Link>
            </div>
        </nav>
    );
};

export default Navbar;