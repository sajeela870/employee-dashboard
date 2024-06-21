// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import EmployeeForm from './components/EmployeeForm';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/employee-form" element={<EmployeeForm />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;