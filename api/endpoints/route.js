
const express = require("express")
const router  = express.Router()

const db = require('../db')

router.get('/', (req, res) => {
  res.send('Hello World! \n' + process.env.DATABASE_URL)
})

router.post('/avatarUpload', db.s3.single('avatar'), (req, res, next) => {
  //this route will be used for posting profile photos
  return res.json({'imageUrl': req.file})
})

module.exports = router
