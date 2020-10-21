const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../../models/user');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { BadRequestError } = require('@thticket/common');

// @route   POST api/account
// @desc    Register an account
// @access  Public
router.post('/api/account', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    let user = await User.findOne({email, username});

    if (user) {
      throw new BadRequestError('User is existed!');
    }
    user = new User({
      username,
      email,
      password
    });

    // encrypt password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    res.status(201).send("successful.");
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }

});

module.exports = router;
