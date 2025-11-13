// db.js
import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "test"
});

// ❌ SQL Injection
export function getUser(username) {
  const query = `SELECT * FROM users WHERE name = '${username}'`;
  connection.query(query, (err, results) => {
    if (err) throw err;
    console.log(results);
  });
}
