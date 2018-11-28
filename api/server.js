
const express = require('express')
const helmet  = require('helmet')

const app  = express()
const port = process.env.PORT || 3000

const router  = require('./endpoints/route.js')

app.use(helmet())
app.use('/', router)

//I think for the api I can still set up a proxy for local dev, but for
//prod have to user http://${APIurl}

app.listen(port, () => console.log(`Listening on port ${port}`))
