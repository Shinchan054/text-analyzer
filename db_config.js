// const mysql = require('mysql');
// const { promisify } = require('util');

// const pool = mysql.createPool({
//   connectionLimit: 10,
//   user: 'root',
//   password: '12345'
// });

// const query = promisify(pool.query).bind(pool);
// const getConnection = promisify(pool.getConnection).bind(pool);

// module.exports = {
//     query,
//     getConnection,
//     pool
// }

// db.js

const mysql = require('mysql');

let pool;

exports.initPool = function() {
    pool = mysql.createPool({
        connectionLimit: 10,
        host: 'localhost',
        user: 'root',
        password: '12345',
        database: 'Texts'
    });
};

exports.query = function(sql, values) {
    return new Promise((resolve, reject) => {
        pool.query(sql, values, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

exports.closePool = function() {
    if (pool) {
        pool.end((err) => {
            if (err) {
                console.error('Error closing the pool:', err);
            } else {
                console.log('Connection pool closed');
            }
        });
    }
};
