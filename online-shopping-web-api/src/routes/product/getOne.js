const express = require('express');

const Product = require('../../models/product');
const { BadRequestError } = require('@thticket/common');
const router = express.Router();

router.get('/api/products/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    throw new BadRequestError('Document ID not found!');
  }
  console.log(product);
  res.status(201).json(product);
});

module.exports = router;
