const mysql = require('mysql2');

module.exports = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ikhda123',
  database: 'belajar_sequelize'
});
