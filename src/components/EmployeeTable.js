// src/components/EmployeeTable.js
import React from 'react';
import '../styles/EmployeeTable.css';

const EmployeeTable = ({ employees }) => {
    return (
        <table className="employee-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(employee => (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default EmployeeTable;