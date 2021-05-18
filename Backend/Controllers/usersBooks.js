const db = require('../Models/database')

exports.borrow = (req, res) => {
    var Email = req.body.Email
    var Isbn = req.body.Isbn

    db.query('Insert into usersbooks set ?', {Email, Isbn}, (err, result) => {
        if(err) throw err

        console.log(result)
        res.send('Book Borrowed')

    })
}

exports.displayBooks = (req, res) => {
    var Email = req.body.Email
    var sql = 'Select Name, Author, Isbn from books where Isbn in (select distinct Isbn from usersbooks where email = ?)'
    var arr = []
    db.query(sql, [Email], (err, result) => {
        if(err) throw err
        
        for(const ele of result) {
            arr.push( {Name : ele.Name, Author : ele.Author , Isbn: ele.Isbn, Total: 'Date'})
        }
        console.log(arr)
        return res.send(arr)
    })
}

exports.deleteBook = (req, res) => {

    db.query('DELETE FROM usersbooks WHERE Email = ? and Isbn = ?', [req.body.Email, req.body.Isbn] , (err, result) => {
        if(err) throw err

        return res.send(result)
    })

}