import mysql from "mysql2";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "upra2026",
  database: "TravelAngola",
});

export default db;
