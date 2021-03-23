// The expenses route


// To import our necessary files
const express = require('express')
const router = express.Router()
const Expense = require('../../models/Expense')


// @route GET api/expenses
// @desc get all expenses
// @access public (will be private)
router.get('/', (req, res) => {
    Expense
        .find()
        .sort({ date: -1 })
        .then(expenses => res.json(expenses))
})


// @route POST api/expenses
// @desc create an Expense
// @access public (will be private)
router.post('/', (req, res) => {
    const newExpense = new Expense({
        title: req.body.title,
        user: req.body.user,
        amount: req.body.amount,
        category: req.body.category, 
        comment: req.body.comment
    });

    newExpense
        .save()
        .then(expense => res.json(expense))
        .catch(err => console.log(err));
});


// @route DELETE api/expenses
// @desc create an Expense
// @access public (will be private)
router.delete('/:id', (req, res) => {
    Expense
        .findById(req.params.id)
        .then(expense => expense.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
})

// To export our it
module.exports = router