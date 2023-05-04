const fs = require('fs');
const inquirer = require('inquirer');
const mysql = require('mysql2');

const PORT = process.env.PORT || 9362;
const app = express();

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: process.env.PASSWORD,
        database: ''
    }
)

app.listen(PORT, () => {
    console.log(`App running at http://localhost:${PORT}`)
})