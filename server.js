// MyLedger
// Back-End main file


// Importing packages and dependencies
const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

// const db = require('./config/keys').mongoURI
const db = config.get('mongoURI')

// Initialising express with a variable we will call app
const app = express()
// Then we can set up the parser to decrypt the post body requests
app.use(express.json())



// Connecting to the database
mongoose
    .connect(db, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true 
    })
    .then(() => console.log('MongoDB for myledger connected !'))
    .catch(err => console.log(err))


// The server routes
app.use('/api/expenses', require('./routes/api/expenses'))
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
// app.use('/api/update', require('./routes/api/expenses'))

// Setting up the server running
const port = process.env.PORT || 5000
// This is to listen to our app on the port variable
app.listen(port, () => console.log(`Server started on port ${port}`))



// Extension installed


// Server

// bcryptjs
// concurrently
// config
// express
// mongoose
// jsonwebtoken
// nodemon


// Client

// redux
// react-redux
// redux-devtools-extension
// redux-thunk
// redux-logger
// axios
// bootstrap
// reactstrap
// react-transition-group