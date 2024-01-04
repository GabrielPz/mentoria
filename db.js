const dotenv = require('dotenv');
dotenv.config();

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if(err){
        console.error("Erro ao se conectar com o servidor");
    } else {
        console.log("Conexão bem sucedida");
    }
});

module.exports = connection;