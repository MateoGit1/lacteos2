import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST  'mysql://root:rbnZnuvlngcmTDnTCzipJwjJncvPcXnh@autorack.proxy.rlwy.net:23892/railway',
  user: process.env.DB_USER  'root',
  password: process.env.DB_PASSWORD  'EnxtLxWhcgrHaRDxHcizNfoWNkRUSCIN',
  database: process.env.DB_NAME  'railway',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;
