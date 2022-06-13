const Pool = require('pg').Pool;

/*const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "ong",
    password: 1503,
    port: 5432
})*/


const pool = new Pool({
    user: "pnvvpmffppuiim",
    host: "ec2-3-226-163-72.compute-1.amazonaws.com",
    database: "d2aucht3s78um7",
    password: 'a633e4500226515329d26873413e5328ab3c9df296d3ef1e038e2beba04c4baa',
    port: 5432
})

module.exports = pool;