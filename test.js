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
        if (data.menu = 'View all departments') {
            db.query('SELECT * FROM department', (err, results) => {
                if (err) {
                    console.log(err);
                } else {
                console.log(results);
                };
            });
            // console.log('Viewing all departments')
        } else if (data.menu = 'View all roles') {
            db.query('SELECT * FROM role', (err, results) => {
                if (err) {
                    console.log(err);
                } else {
                console.log(results);
                };
            });
        } else if (data.menu = 'View all employees') {
            db.query('SELECT * FROM employee', (err, results) => {
                if (err) {
                    console.log(err);
                } else {
                console.log(results);
                };
            });
        } else if (data.menu = 'Add a department') {
            inquirer
                .prompt(addDepartmentQuestion)
                .then((newDepData) => {
                    console.log(newDepData);
                });
                db.query('SELECT * FROM department', (err, results) => {
                    console.log(results);
                });
        } else if (data.menu = 'Add a role') {
            inquirer
                .prompt(addRoleQuestion)
                .then((newRoleData) => {
                    console.log(newRoleData);
                });
            db.query('SELECT * FROM role', (err, results) => {
                console.log(results);
            });
        } else if (data.menu = 'Add an employee') {
            inquirer
                .prompt(addEmployeeQuestion)
                .then((newEmplData) => {
                    console.log(newEmplData);
                });
            db.query('SELECT * FROM employee', (err, results) => {
                console.log(results);
            });
        } else if (data.menu = 'Update an employee role') {
            inquirer
                .prompt(updateEmployeeQuestion)
                .then((updateEmplRole) => {
                    console.log(updateEmplRole);
                });
            db.query('SELECT * FROM employee', (err, results) => {
                console.log(results);
            });
        }
});