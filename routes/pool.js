var mysql = require("mysql");
var pool = mysql.createPool({
  host: "",
  port: 3306,
  user: "root_T4U",
  password: "Vikram123@@",
  database: "root_T4U",
  connectionLimit: 100,
  multipleStatements: true,
});

module.exports = pool;
