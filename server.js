// MyLedger
// Back-End main file


// Importing packages and dependencies
const express = require('express')
const mongoose = require('mongoose')
const db = require('./config').mongoURI

// Initialising express with a variable we will call app
const app = express()

// Connecting to the database
mongoose
    .connect(db)
    .then(() => console.log('MongoDB for myledger connected !'))
    .catch(err => console.log(err))

