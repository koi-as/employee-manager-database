const inquirer = require('inquirer');
const mysql = require('mysql2');
const express = require('express');

const PORT = process.env.PORT || 9362;
const app = express();

const { 
    menuQuestion, 
    addDepartmentQuestion, 
    addRoleQuestion, 
    addEmployeeQuestion, 
    updateEmployeeQuestion } = require('./lib/questions.js');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: 'employee_db'
    }
);

inquirer
    .prompt(menuQuestion)
    .then((responses) => {
        console.log(responses)
    });

app.listen(PORT, () => {
    console.log(`App running at http://localhost:${PORT}`)
})
