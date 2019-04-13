const mariadb = require('mariadb');
const printTables = require('./printTables');


const createConnection = async (host, user, password, database) => {


  const pool = await mariadb.createPool({
    host,
    user,
    password,
    database

  });

  return pool;

};

const printAll = async (pool, database) => {
  let arr = [];
  let conn;
  let rows;
  let returnObj = {};
  let tableNames = []; 
  let columnNames = [];

  try {

    conn = await pool.getConnection();
    
    rows = await conn.query(`SELECT table_name FROM information_schema.tables WHERE table_type = 'base table' AND table_schema='${database}'`);
    
    for (row of rows) {
      tableNames.push(row);
      
    }
    
    rows = await conn.query(`Select table_name, Column_name from information_schema.columns where table_schema='${database}'`);

    for (row of rows) {
      
      columnNames.push(row);

    }


    for (let table of tableNames) {
        let a = [];
        rows = await conn.query(`Select * from ${table.table_name}`);  
        for (row of rows) {
          
          a.push(row);
        }
        arr.push(a)
    }

    

  } catch (error) {
      arr.push(-1);
      arr.push(error);

  } finally {
    
    if (conn)
      conn.end();
      
      returnObj = printTables(tableNames, columnNames);
      returnObj.body = arr;
      returnObj.database = database;

      return returnObj;
  }

};

const makeQuery = async (pool, string) => {
  let arr = [];
  let conn;
  let rows;
  try {
    conn = await pool.getConnection();
    rows = await conn.query(string);
    
    if (rows['affectedRows'] >= 0) {
      arr.push(true);
    } else {
      for (row of rows) {
        arr.push(row);

      }
    }


  } catch (err) {
    arr.push(-1);
    arr.push(err);
    console.log(err);
  } finally {

    if (conn)
      await conn.end();

    return arr;
  }
};


module.exports = { createConnection, makeQuery, printAll };