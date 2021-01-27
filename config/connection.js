const mysql = require('mysql')

let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Iammarshall$70',
    database: 'burgers_db'
});

connection.connect(function (err) {
    if (err) {
        console.error('Error connecting to database')
    }
    console.log('Connected as ID ' + connection.threadId)
});

module.exports = connection; 