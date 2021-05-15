const db = require('../Models/database')

exports.booksList = (req, res) => {
    var sql = 'Select Name, Author, Count, Isbn from books where Isbn not in (select distinct Isbn from usersbooks where email = ?)'
    console.log(req.body.Email)
    var arr = []
    db.query(sql, [req.body.Email], (err, result) => {
        if(err) throw err

        //console.log(result)

        for(const ele of result) {
            arr.push( {Name : ele.Name, Author : ele.Author, Total : ele.Count , Isbn: ele.Isbn})
        }
       console.log(arr)

        if(arr.length > 0)
        return res.send(arr)

        else res.send([{Name : 'No Data', Author : 'No Data', Total : '0'}])
    })

    

}
