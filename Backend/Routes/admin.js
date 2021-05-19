const express = require('express')
const router = express.Router()
const {displayUsers, displayBooksAdmin, deleteUser, getEdate, reissue} =  require('../Controllers/admin')

router.get('/users', displayUsers)
router.post('/displayBooksAdmin', displayBooksAdmin)
router.post('/deleteUser', deleteUser)
router.post('/getEdate',getEdate)
router.post('/reissue',reissue)



module.exports = router