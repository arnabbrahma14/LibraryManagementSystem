const express = require('express')
const router = express.Router()
const {borrow, displayBooks} = require('../Controllers/usersBooks')

router.post('/borrow', borrow)
router.post('/displayBooks', displayBooks)

module.exports = router