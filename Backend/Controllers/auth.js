
// Creating the Salt and Secure the password, we use the universal unique identification
// Crypto is in buit present in nodeJS. We dont need to download it.
const {v4: uuidv4} = require('uuid')
const crypto = require('crypto')

// To secure the password
function securePassword(plainPassword, salt){
    // console.log(`Password: ${password}\nSalt: ${salt}`)
    return crypto.createHmac('sha256', salt)
                    .update(plainPassword)
                    .digest('hex')
}

// My Database
const db = require('../Models/database')

exports.signup =  (req, res)=> {

    var Name = req.body.Name
    var Email = req.body.Email
    var Password = req.body.Password 
    console.log(req.body)

    if(Name == "")  return res.send('Name Input field cannot be empty')
    if(Email == "")  return res.send('Email Input field cannot be empty')
    if(Password == "")  return res.send('Password Input field cannot be empty')
    
    const Salt = uuidv4()
    Password =  securePassword(Password, Salt)

        //Inserting Into Database
        db.query('Insert into users set ?', {Name, Email, Salt, Password} , (err, result)=>{            
            console.log(result);
            if(err) throw err
            return res.send("User Registered")
        })
    
        
        
        
}

exports.signin = (req, res) => {
    var email = req.body.Email
    var password = req.body.Password
    let sql = 'select salt, password from users where email = ?'
    var msg = ""

    if(email == "")  return res.send('Email Input field cannot be empty')
    if(password == "")  return res.send('Password Input field cannot be empty')

    db.query( sql, email, (err, user) => {
        if (err) throw err

        if(user && user.length == 0) return res.send("User Doesnot exist")

        
        var checkPassword = user[0].password
        password = securePassword(password, user[0].salt)

        if(checkPassword === password)
        msg = "User Authenticated"

        else
        msg = "Wrong Password"
        return res.send(msg)

    })
}

