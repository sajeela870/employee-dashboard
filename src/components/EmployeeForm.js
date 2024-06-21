// src/components/EmployeeForm.js
import React, { useState } from 'react';
import '../styles/EmployeeForm.css';

const EmployeeForm = () => {
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., sending data to an API
        console.log({ name, designation, location, salary });
    };

    return (
        <div className="employee-form">
            <h2>Add Employee</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
                <label>Designation:</label>
                <input 
                    type="text" 
                    value={designation} 
                    onChange={(e) => setDesignation(e.target.value)} 
                    required 
                />
                <label>Location:</label>
                <input 
                    type="text" 
                    value={location} 
                    onChange={(e) => setLocation(e.target.value)} 
                    required 
                />
                <label>Salary:</label>
                <input 
                    type="number" 
                    value={salary} 
                    onChange={(e) => setSalary(e.target.value)} 
                    required 
                />
                <button type="submit">ADD EMPLOYEE</button>
            </form>
        </div>
    );
};

export default EmployeeForm;