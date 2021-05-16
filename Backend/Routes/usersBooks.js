const express = require('express')
const router = express.Router()
const {borrow, displayBooks, deleteBook} = require('../Controllers/usersBooks')

router.post('/borrow', borrow)
router.post('/displayBooks', displayBooks)
router.post('/deleteBook', deleteBook)

module.exports = router