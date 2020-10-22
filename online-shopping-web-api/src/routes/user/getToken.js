const express = require('express');
const route = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/user');


// @route   GET API/auth
// @desc    Get user with token
// @access  Public
route.get('/api/auth', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.status(201).send(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})



module.exports = route;