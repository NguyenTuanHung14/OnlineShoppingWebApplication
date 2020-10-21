const express = require('express');

const Category = require('../../models/categories');
const router = express.Router();

router.post('/api/categories', async (req, res) => {
  const createdCategory = await Category.create(req.body);
  res.status(201).send({
    status: 'success',
    data: createdCategory,
  });
});

module.exports = router;
