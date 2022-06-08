const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "ong",
    password: 1503,
    port: 5432
})

module.exports = pool;