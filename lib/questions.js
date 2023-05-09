
const menuQuestion = [
    {
        type: 'list',
        name: 'menu',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Quit'
        ]
    }
];

const addDepartmentQuestion = [
    {
        type: 'input',
        name: 'depTitle',
        message: 'What is the title of this new department?'
    }
];

const addRoleQuestion = [
    {
        type: 'input',
        name: 'roleTitle',
        message: 'What is the title of this new role?'
    },
    {
        type: 'input',
        name: 'roleSalary',
        message: 'What is the salary of this new role?'
    },
    {
        type: 'list',
        name: 'roleDep',
        message: 'Which department does this new role belong to?',
        choices: [
            ''
        ]
    }
];

const addEmployeeQuestion = [
    {
        type: 'input',
        name: 'firstName',
        message: 'What is the first name of the employee?'
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'What is the last name of the employee?'
    },
    {
        type: 'list',
        name: 'employeeRole',
        message: 'What is this employees role?',
        choices: [
            ''
        ]
    }
]

const updateEmployeeQuestion = [
    {
        type: 'list',
        name: 'updateName',
        message: 'Which employee do you want to update?',
        choices: [
            ''
        ]
    },
    {
        type: 'list',
        name: 'updateRole',
        message: 'What is the new role of this employee?',
        choices: [
            ''
        ]
    }
]

// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids

// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database

// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
module.exports = {
    menuQuestion,
    addDepartmentQuestion,
    addRoleQuestion,
    addEmployeeQuestion,
    updateEmployeeQuestion
}
