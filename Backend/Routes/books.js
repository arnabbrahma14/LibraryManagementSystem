const express = require('express')
const router = express.Router()
const {booksList, depts} = require('../Controllers/books')

router.post("/books", booksList)
router.get("/depts", depts)

module.exports = router