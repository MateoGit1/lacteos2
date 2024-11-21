import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'autorack.proxy.rlwy.net',
  user: 'root',
  port: 23892,
  password: 'rbnZnuvlngcmTDnTCzipJwjJncvPcXnh',
  database: 'railway',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;

