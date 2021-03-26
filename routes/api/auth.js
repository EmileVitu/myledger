const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const auth = require('../../middleware/auth')


// User model
const User = require('../../models/User');

// @route POST api/auth
// @desc authenticate new users
// @access public
router.post('/', (req, res) => {
    // res.send('register')
    const { email, password } = req.body

    // Simple validation
    if(!email || !password) {
        return res.status(400).json({msg: 'Please enter all fields'})
    }

    // Check for existing user
    User.findOne({ email })
        .then(user => {
            
            // If the user exists
            if(!user) return res.status(400).json({ msg: 'User does not exists' })
            else {
                // Validate password
                bcrypt
                    .compare(password, user.password)
                    .then(isMatch => {
                        if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials' })
                        else {
                            jwt.sign(
                                { id: user.id },
                                config.get('jwtSecret'),
                                { expiresIn: 3600 }, 
                                (err, token) => {
                                    if(err) throw err
                                    res.json({
                                        token,
                                        user: {
                                            id: user.id, 
                                            name: user.name,
                                            email: user.email
                                        }
                                    })
                                }
                            )
                        }
                    })
            }
        })
})

// @route GET api/auth/user
// @desc get user data
// @access private
router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user))
})

module.exports = router;