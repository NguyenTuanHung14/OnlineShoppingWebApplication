const express = require('express');
const Category = require('../../models/categories');
const router = express.Router();

router.get('/api/categories', async (req, res) => {
  const categories = await Category.find({});
  res.status(200).send({
    status: 'success',
    data: categories,
  });
});

module.exports = router;