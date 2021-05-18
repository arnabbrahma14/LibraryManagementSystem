const db = require('../../Backend/Models/database')

exports.displayUsers = (req, res) => {
    db.query('Select Name, Email from users', [], (err, result) => {
        if (err) throw err
        return res.send(result)
    })
}

exports.displayBooksAdmin = (req, res) => {
    var Email = req.body.Email
    var sql = 'Select Name, Author, Isbn, Count from books where Isbn in (select distinct Isbn from usersbooks where email = ?)'
    var arr = []
    db.query(sql, [Email], (err, result) => {
        if(err) throw err
        
        for(const ele of result) {
            arr.push( {Name : ele.Name, Author : ele.Author , Isbn: ele.Isbn, Total: ele.Count})
        }
        console.log(arr)
        return res.send(arr)
    })
}

exports.deleteUser = (req, res) => {
    db.query('DELETE FROM users WHERE Email = ?', [req.body.Email], (err, result) => {
        if(err) throw err
        res.send(result)
    })
}