const express = require('express')
const router = express.Router()
const {signup, signin, registered} = require('../Controllers/auth')


router.post('/signup', signup)
router.post('/signin', signin)
router.post('/registered', registered)


module.exports = router