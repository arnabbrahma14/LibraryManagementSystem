const express = require('express')
const router = express.Router()
const {borrow, displayBooks, deleteBook, increaseCount, decreaseCount} = require('../Controllers/usersBooks')

router.post('/borrow', borrow)
router.post('/displayBooks', displayBooks)
router.post('/deleteBook', deleteBook)
router.post('/increaseCount', increaseCount)
router.post('/decreaseCount', decreaseCount)
module.exports = router