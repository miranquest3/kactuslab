const { Pool } = require("pg")

const pool = new Pool(process.env.DATABASE_URL ? {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  },
  max: 1,
  idleTimeoutMillis: 10000,
  connectionTimeoutMillis: 5000
} : {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 25060,
  ssl: {
    rejectUnauthorized: false
  },
  max: 1,               // Extremely strict connection limit for DO DBs
  idleTimeoutMillis: 10000,
  connectionTimeoutMillis: 5000
})

module.exports = pool