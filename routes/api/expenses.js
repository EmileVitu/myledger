// The expenses route


// To import our necessary files
const express = require('express')
const router = express.Router()
const Expense = require('../../models/Expense')
const auth = require('../../middleware/auth')


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
router.post('/', auth, (req, res) => {
    const newExpense = new Expense({
        title: req.body.title,
        user: req.body.user,
        amount: req.body.amount,
        dateExpense: req.body.dateExpense,
        category: req.body.category, 
        comment: req.body.comment
    });

    newExpense
        .save()
        .then(expense => res.json(expense))
        .catch(err => console.log(err));
});


// @route DELETE api/expenses
// @desc delete an Expense
// @access public (will be private)
router.delete('/:id', auth, (req, res) => {
    Expense
        .findById(req.params.id)
        .then(expense => expense.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
})


// @route GET api/auth/user
// @desc get user data
// @access private
router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user))
})



// @route UPDATE api/expenses
// @desc update an Expense
// @access public (will be private)
router.post('/:id', auth, (req, res) => {
    const { title,user,amount,dateExpense,category,comment } = req.body
    
    Expense
        .updateOne(
            { _id: req.params.id },
            { title,
              user,
              amount,
              dateExpense,
              category,
              comment },
            { new: false })
        .then(() => res.json({ success: true }))
        .catch(err => res.status(404).json({ success: false }))
})


// To export it
module.exports = router