
const express = require('express')
const helmet  = require('helmet')

const app  = express()
const port = process.env.PORT || 3000

const router  = require('./endpoints/route.js')

app.use(helmet())
app.use('/', router)

app.listen(port, () => console.log(`Listening on port ${port}`))
