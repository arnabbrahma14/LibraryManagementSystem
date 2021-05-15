var mysql = require('mysql')

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'library'
})


console.log(`Database Established`)
// Creating a connection
db.connect( err => {
    if(err){
        console.error('Error Connecting: ' + err.stack)
        return
    }
    console.log('connected as id '+db.threadId)
})
module.exports = db
   