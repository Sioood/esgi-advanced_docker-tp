// Use the MariaDB Node.js Connector
var mariadb = require('mariadb');

// Create a connection pool
var pool =
    mariadb.createPool({
        host: '192.168.8.29',
        port: 3306,
        user: 'root',
        password: 'password',
        database: 'docker_avance'
    });

// Expose a method to establish connection with MariaDB SkySQL
module.exports = Object.freeze({
    pool: pool
});