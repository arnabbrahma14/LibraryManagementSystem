const db = require('../Models/database')

exports.borrow = (req, res) => {
    var Email = req.body.Email
    var Isbn = req.body.Isbn
    var date = new Date()
    var Sdate = String(date.getDate() + "/" + (date.getMonth()%12+1) + "/" + (date.getFullYear())) 
    date = new Date(Date.now() + 12096e5);
    var Edate = String(date.getDate() + "/" + (date.getMonth()%12+1) + "/" + (date.getFullYear())) 

    db.query('Insert into usersbooks set ?', {Email, Isbn, Sdate, Edate}, (err, result) => {
        if(err) throw err

        console.log(result)
        res.send('Book Borrowed')

    })
}

exports.decreaseCount = (req, res) => {
    db.query('UPDATE books SET Count = Count - 1 WHERE Isbn = ?', [req.body.Isbn] , (err, result) => {
        if(err) throw err
        
        return res.send(result)
    })
}

exports.increaseCount = (req, res) => {
    db.query('UPDATE books SET Count = Count + 1 WHERE Isbn = ?', [req.body.Isbn] , (err, result) => {
        if(err) throw err

        return res.send(result)
    })
}

exports.displayBooks = (req, res) => {
    var Email = req.body.Email
    var sql = 'select Name, Author, books.Isbn, Sdate, Edate from books inner join usersbooks on books.Isbn = usersbooks.Isbn where books.Isbn in (SELECT distinct Isbn from usersbooks where email = ?)'
    var arr = []
    db.query(sql, [Email], (err, result) => {
        if(err) throw err
        
        for(const ele of result) {
            arr.push( {Name : ele.Name, Author : ele.Author , Isbn: ele.Isbn, Sdate: ele.Sdate, Edate: ele.Edate})
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