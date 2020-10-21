const express = require('express');

const Product = require('../../models/product');
const router = express.Router();

router.post('/api/products', async (req, res) => {
  const createdProduct = await Product.create(req.body);
  res.status(201).send({
    status: 'success',
    data: createdProduct,
  });
});

module.exports = router;
