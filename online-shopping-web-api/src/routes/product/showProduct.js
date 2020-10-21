const express = require('express');

const Product = require('../../models/product');
const router = express.Router();

router.get('/api/products', async (req, res) => {
  const products = await Product.find({});
  res.header('Content-Range', products.length);
  res.status(200).send(products);
});

module.exports = router;
