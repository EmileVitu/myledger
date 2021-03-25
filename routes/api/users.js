const express = require('express')
const router = express.Router()


const User = require('../../models/User')


// @route POST api/users
// @desc register new users
// @access public
router.post('/', (req, res) => {
    res.send('register')
});

module.exports = router;