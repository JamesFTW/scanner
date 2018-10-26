
if(process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

const pg  = require('pg')
const pgp = require("pg-promise")()
const db  = pgp(process.env.DATABASE_URL)
const s3  = require('./s3.js')

pg.defaults.ssl = true

module.exports = {
  db : db,
  s3 : s3
}
