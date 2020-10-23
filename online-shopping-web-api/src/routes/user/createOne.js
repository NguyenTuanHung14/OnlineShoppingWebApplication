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
    const { fullname, email, password } = req.body;
    const username = email;

    let e = await User.findOne({ email });
    if (e) {
      return res.status(401).json({ msg: 'User is existed!' });
    }

    user = new User({
      fullname,
      username,
      email,
      password
    });
    
    //save username
    var mail = user.email;
    var array = mail.split("@");
    user.username = array[0];
    await user.save();


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
