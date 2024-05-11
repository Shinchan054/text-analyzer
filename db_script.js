const mysql = require('mysql');
const { promisify } = require('util');

const pool = mysql.createPool({
  connectionLimit: 10,
  user: 'root',
  password: '12345'
});

const query = promisify(pool.query).bind(pool);
const getConnection = promisify(pool.getConnection).bind(pool);

async function main() {
  try {
    const connection = await getConnection();

    try {
      await query('CREATE DATABASE IF NOT EXISTS Texts');
      console.log('Database created');

      await query('USE Texts');
      console.log('Text Database selected');

      await query('CREATE TABLE IF NOT EXISTS Text_List (Id INT AUTO_INCREMENT PRIMARY KEY, Text VARCHAR(255))');
      console.log('Text_List table created');
    } finally {
      connection.release();
    }

    await pool.end();
    console.log('Connection pool closed');
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
