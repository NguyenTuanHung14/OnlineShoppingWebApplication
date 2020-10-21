const express = require('express');

const Product = require('../../models/product');
const router = express.Router();
const { BadRequestError } = require('@thticket/common');

router.put('/api/products/:id', async (req, res) => {
  const doc = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!doc) {
    throw new BadRequestError('Document ID not found!');
  }

  res.status(200).json(doc);
});

module.exports = router;
