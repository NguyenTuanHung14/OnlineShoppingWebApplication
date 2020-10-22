const express = require('express');

const Category = require('../../models/categories');
const { BadRequestError } = require('@thticket/common');
const router = express.Router();

router.get('/api/categories/:id', async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    throw new BadRequestError('Document ID not found!');
  }
  res.status(201).json(category);
});

module.exports = router;
