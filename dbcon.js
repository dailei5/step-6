var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_daile',
  password        : '3054',
  database        : 'cs340_daile'
});
module.exports.pool = pool