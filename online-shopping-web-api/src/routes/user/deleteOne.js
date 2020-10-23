const express = require('express');
const auth = require('../../middleware/auth');
const User = require('../../models/user');
const router = express.Router();
const { BadRequestError } = require('@thticket/common');

// @route   DEL API/users
// @desc    Delete route
// @access  Public
router.delete('/api/account/:id', async (req, res) => {
  const doc = await User.findByIdAndDelete(req.params.id);

  if (!doc) {
    throw new BadRequestError('Document ID not found!');
  }

  res.status(204).json({
    status: 'success',
    data: {
      data: null,
    },
  });
});

module.exports = router;
