
require('dotenv').config()

const express = require('express')
const pg      = require('pg')
const pgp     = require("pg-promise")()
const db      = pgp(process.env.DATABASE_URL)
const helmet  = require('helmet')

const app  = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World! \n' + process.env.DATABASE_URL)
})

app.listen(port, () => console.log(`Listening on port ${port}`))
