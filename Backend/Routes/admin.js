const express = require('express')
const router = express.Router()
const {displayUsers, displayBooksAdmin, deleteUser} =  require('../Controllers/admin')

router.get('/users', displayUsers)
router.post('/displayBooksAdmin', displayBooksAdmin)
router.post('/deleteUser', deleteUser)



module.exports = router