const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../../models/user');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { BadRequestError } = require('@thticket/common');

// @route   POST api/account
// @desc    Register an account
// @access  Public
router.post('/api/register', async (req, res) => {
  try {
    const { fullname, username, email, password } = req.body;
    let e = await User.findOne({ email });
    let u = await User.findOne({ username });
    if (u) {
       return res.status(401).json({ msg: 'Username is existed!' });
    } else if (e) {
       return res.status(401).json({ msg: 'Email is existed!' });
    }


    user = new User({
      fullname,
      username,
      email,
      password
    });

    // encrypt password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    res.status(201).send(user);

  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }

});

module.exports = router;
