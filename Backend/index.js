const express = require('express')

const bodyParser = require('body-parser')
const cors = require('cors')
const authRoutes = require('./Routes/auth')
const booksRoutes = require('./Routes/books')
const usersBooksRoutes = require('./Routes/usersBooks')
const PORT = 5000

   
const app = express()

// Middlewares
app.use(bodyParser.json())
app.use(cors())


// My Routes
app.use('/api', authRoutes)
app.use('/api', booksRoutes)
app.use('/api', usersBooksRoutes)

// Startig a server
app.listen(PORT, ()=>(console.log(`App is Running at Port ${PORT}`)))