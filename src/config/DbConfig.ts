import mysql from "mysql2";

// this is an env obj 
 const dbConfig = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "123456",
    DB: "testdb"
  };

export const conn = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

export const poolConn =  mysql.createPool({
    connectionLimit : 10,
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});