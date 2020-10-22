const express = require('express');
const auth = require('../../middleware/auth');
const User = require('../../models/user');
const router = express.Router();
const { BadRequestError } = require('@thticket/common');

router.put('/api/user/:id', async (req, res) => {
  const doc = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!doc) {
    throw new BadRequestError('Document ID not found!');
  }

  res.status(200).json(doc);
});

module.exports = router;
