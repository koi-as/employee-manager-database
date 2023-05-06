/*
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

Questions:
- What would you like to do (list)
    - View All departments
    - View all roles
    - View all employees
    - Add a department
        - What is the title of this new department (input)
    - Add a role
        - What is the title of this new role (input)
        - What is the salary of this new role (input)
        - What department is this role a part of (list)
            - department names
    - Add an employee
        - What is the first name of the employee (input)
        - What is the last name of the employee (input)
        - What is this employees role (list)
            - role names
    - Update an employee role
        - Which employee do you want to update (list)
            - Employee names
        - What is the new role of this employee (list)
            - Role names

WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids

WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database

WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
*/
