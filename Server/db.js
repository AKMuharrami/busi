const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "5December",
    host: "localhost",
    database: "business",
    port: 5432
});

module.exports = pool;