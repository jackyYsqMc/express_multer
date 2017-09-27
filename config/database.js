/**
 * Created by jackyMC on 2017/9/26.
 */
const mysql = require('promise-mysql')
const  pool = mysql.createPool({
    host: '172.16.0.113',
    user: 'root',
    password: 'root',
    database: 'db118',
    connectionLimit: 10
});
module.exports=pool;