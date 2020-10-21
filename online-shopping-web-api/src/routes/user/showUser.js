const express = require('express');
const auth = require('../../middleware/auth');

const User = require('../../models/user');
const router = express.Router();

// @route   get API/users
// @desc    get all users
// @access  Public
router.get('/api/users', async (req, res) => {
  const Users = await User.find({});
  res.header('Content-Range', Users.length);
  res.status(200).send(Users);
});

module.exports = router;
