const express = require('express')
const router = express.Router()
const {booksList} = require('../Controllers/books')

router.post("/books", booksList)

module.exports = router