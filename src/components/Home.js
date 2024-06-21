// src/components/Home.js
import React, { useState, useEffect } from 'react';
import EmployeeTable from './EmployeeTable';
import '../styles/Home.css';

const Home = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setEmployees(data));
    }, []);

    return (
        <div className="home">
            <h2>Employee Dashboard</h2>
            <EmployeeTable employees={employees} />
        </div>
    );
};

export default Home;