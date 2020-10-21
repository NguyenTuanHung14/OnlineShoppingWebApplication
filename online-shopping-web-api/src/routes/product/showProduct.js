const express = require('express');

const Product = require('../../models/product');
const router = express.Router();

router.get('/api/products', async (req, res) => {
  const products = await Product.find({});
  res.status(200).send({
    status: 'success',
    data: products,
  });
});

module.exports = router;
