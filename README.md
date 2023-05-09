# employee-manager-database

## Description

As a business owner, I want to be able to view and manage the departments, roles, and employees in my company so that I can organize and plan my business

## Installation

To begin using this application, clone the repository to your local computer.

Next, run the command `npm i` in the `employee-manager-database` directory to install all of the necessary npm packages.

Finally, before you can create a `.env` file, you need to have MySQL installed. This is important so that you can create the database necessary.

</br>

Once the previous steps are complete, you need to make a `.env` and write the following code as listed below providing your own information:
* DB_USER=`your mysql username`
* DB_PASSWORD=`your mysql password`

</br>

Once you have set up the .env file, the application is almost ready to properly use. Initiate mysql in the terminal using `mysql -u root -p`

Type the following commands:
* `SOURCE db/schema.sql;`
* `USE employee_db;`

## Usage

Now that you've set up all of the necessary softwares, it's time to use the database.

Open your terminal and exit out of the mysql program if you haven't already. 

From there, you'll want to run the command `node index.js`. From here, the program will prompt you with a question.

* To add a new department, select the `Add a department` option and follow the prompts
* To add a new role, select the `Add a role` option and follow the prompts. Please note, the salary prompt only takes a number as a parameter
* To add a new employee, select the `Add an employee` option and follow the prompts.

To stop receiving prompts, select the `Quit` option. However you may still need to press ctrl+C to end the program to use the terminal again. 
