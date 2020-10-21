const express = require('express');

const Product = require('../../models/product');
const router = express.Router();
const { BadRequestError } = require('@thticket/common');

router.delete('/api/products/:id', async (req, res) => {
  const doc = await Product.findByIdAndDelete(req.params.id);

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
