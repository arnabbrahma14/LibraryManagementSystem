const db = require('../../Backend/Models/database')

exports.displayUsers = (req, res) => {
    db.query('Select Name, Email from users', [], (err, result) => {
        if (err) throw err
        return res.send(result)
    })
}

exports.displayBooksAdmin = (req, res) => {
    var Email = req.body.Email
    var sql = 'select Name, Author, books.Isbn, Count, Sdate, Edate from books inner join usersbooks on books.Isbn = usersbooks.Isbn where email = ? and books.Isbn in (SELECT distinct Isbn from usersbooks)'
    var arr = []
    
    db.query(sql, [Email], (err, result) => {
        if(err) throw err
        
        for(const ele of result) {
            arr.push( {Name : ele.Name, Author : ele.Author , Isbn: ele.Isbn, Total:ele.Count, Sdate: ele.Sdate, Edate: ele.Edate})
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

exports.getEdate = (req, res) => {
    db.query('Select Edate from usersbooks where Email = ? and Isbn = ?', [req.body.Email, req.body.Isbn], (err, result) => {
        if(err) throw err
        return res.send(result)
    })
}

exports.reissue = (req, res) => {
    console.log(`${req.body.Edate} `)
    db.query('UPDATE usersbooks SET Edate = ?  where Email= ? and Isbn = ?', [req.body.Edate, req.body.Email, req.body.Isbn], (err, result) => {
        if(err) throw err
        return res.send(result)
    })
}

/*
 UPDATE `usersbooks` SET Edate = '10/4/2021' where `Email`= 'arnabbrahma14@gmail.com' and Isbn= 'Isbn008' 
 */