const db = require('../Models/database')

exports.booksList = (req, res) => {
    var sql = 'Select Name, Author, Count, Isbn from books where Dept = ? and Isbn not in (select distinct Isbn from usersbooks where email = ?)'
    console.log(req.body.Email)
    var arr = []
    db.query(sql, [req.body.Dept, req.body.Email], (err, result) => {
        if(err) throw err

        //console.log(result)

        for(const ele of result) {
            if(ele.Count > 0)
            arr.push( {Name : ele.Name, Author : ele.Author, Total : ele.Count , Isbn: ele.Isbn})
        }
       console.log(arr)

        if(arr.length > 0)
        return res.send(arr)

        else res.send([{Name : 'No Books Available'}])
    })

}

exports.depts = (req, res) => {
    db.query('Select Name from dept' ,(err, result) => {
        if (err) throw err

        return res.send(result)
    })
}