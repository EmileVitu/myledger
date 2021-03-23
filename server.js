// MyLedger
// Back-End main file


// Importing packages and dependencies
const express = require('express')
const mongoose = require('mongoose')
const db = require('./config/keys').mongoURI
const expenses = require('./routes/api/expenses')


// Initialising express with a variable we will call app
const app = express()
// Then we can set up the parser to decrypt the post body requests
app.use(express.json())



// Connecting to the database
mongoose
    .connect(db, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
    .then(() => console.log('MongoDB for myledger connected !'))
    .catch(err => console.log(err))


// The server routes
app.use('/api/expenses', expenses)


// Setting up the server running
const port = process.env.PORT || 5000
// This is to listen to our app on the port variable
app.listen(port, () => console.log(`Server started on port ${port}`))
