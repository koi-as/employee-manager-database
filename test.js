const mysql = require('mysql2');
const inquirer = require('inquirer');
require('dotenv').config();


const { 
    menuQuestion, 
    addDepartmentQuestion, 
    addRoleQuestion, 
    addEmployeeQuestion, 
    updateEmployeeQuestion } = require('./lib/questions.js');

const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: 'employee_db',
        port: 3306
    }
);

inquirer
    .prompt(menuQuestion)
    .then((data) => {
        console.log(data);
});