const express = require('express');

const Category = require('../../models/categories');
const router = express.Router();
const { BadRequestError } = require('@thticket/common');

router.put('/api/categories/:id', async (req, res) => {
  const doc = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!doc) {
    throw new BadRequestError('Document ID not found!');
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: doc,
    },
  });
});

module.exports = router;
