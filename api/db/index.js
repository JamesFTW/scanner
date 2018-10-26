
if(process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

const pg  = require('pg')
const pgp = require("pg-promise")()
const db  = pgp(process.env.DATABASE_URL)

pg.defaults.ssl = true

module.exports = db;
