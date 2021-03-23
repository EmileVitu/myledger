// This is our expense model


// First we import mongoose
const mongoose = require('mongoose')


// Then we create our schema
const Schema = mongoose.Schema

// Now we build our schema
const ExpenseSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    user: {
        type: String, 
        required: true
    },
    amount: {
        type: Number;
        required: true
    },
    category: {
        type: String,
        required: true
    },
    comment: {
        type: String, 
        required: false
    },
    hidden: {
        type: Boolean
    },
    date: {
        type: Date, 
        default: Date.now
    }
})

// Now we can export it
module.exports = Expense = mongoose.model('expense', ExpenseSchema)