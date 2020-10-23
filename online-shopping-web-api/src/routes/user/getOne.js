const express = require('express');
const auth = require('../../middleware/auth');

const User = require('../../models/user');
const { BadRequestError } = require('@thticket/common');
const router = express.Router();

// @route   get API/users/:id
// @desc    get an user
// @access  Public
router.get('/api/user/:id',auth, async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    throw new BadRequestError('Document ID not found!');
  }
  res.status(201).json(user);
});

module.exports = router;
