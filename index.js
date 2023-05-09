const inquirer = require('inquirer');
const mysql = require('mysql2');
require('dotenv').config();

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

const init = () => {
    inquirer
        .prompt(menuQuestion)
        .then((data) => {
            if (data.menu === 'View all departments') {
                db.query('SELECT * FROM department', (err, results) => {
                    console.log(results);
                    init();
                });
            } else if(data.menu === 'View all roles') {
                db.query('SELECT * FROM role', (err, results) => {
                    console.log(results);
                    console.log('Viewing all roles')
                    init();
                });
            } else if(data.menu === 'View all employees') {
                db.query('SELECT * FROM employee', (err, results) => {
                    console.log(results);
                    init();
                });
            } else if(data.menu === 'Add a department') {
                inquirer
                    .prompt(addDepartmentQuestion)
                    .then((newDepData) => {
                        console.log(newDepData);
                        db.query('INSERT INTO department (name) VALUE (?)', [newDepData.depTitle], (err, result) => {
                            err ? console.log(err) : console.log(result);
                        });
                        addDepartment();
                    });
            } else if(data.menu === 'Add a role') {
                inquirer
                    .prompt(addRoleQuestion)
                    .then((newRoleData) => {
                        console.log(newRoleData);
                        db.query('INSERT INTO role (title, salary) VALUES (?, ?)', [newRoleData.roleTitle, newRoleData.roleSalary], (err, result) => {
                            err ? console.log(err) : console.log(result);
                        });
                        addRole();
                    });
            } else if(data.menu === 'Add an employee') {
                inquirer
                    .prompt(addEmployeeQuestion)
                    .then((newEmplData) => {
                        console.log(newEmplData);
                        db.query('INSERT INTO employee (first_name, last_name) VALUES (?, ?)', [newEmplData.firstName, newEmplData.lastName], (err, result) => {
                            err ? console.log(err) : console.log(result);
                        });
                        addEmployee();
                    });
            } else if(data.menu === 'Update an employee role') {
                inquirer
                    .prompt(updateEmployeeQuestion)
                    .then((updateEmplRole) => {
                        console.log(updateEmplRole);
                        updateEmployee();
                    });
            } else if (data.menu === 'Quit') {
                console.log('Goodbye!');
            }
    });
};

const addDepartment = () => {
    console.log('Adding a department');
    init();
};

const addRole = () => {
    console.log('Adding a role');
    init();
};

const addEmployee = () => {
    console.log('Adding an employee');
    init();
};

const updateEmployee = () => {
    console.log('Updating an employee');
    init();
}

init();
