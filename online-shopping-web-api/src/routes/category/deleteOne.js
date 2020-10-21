const express = require('express');

const Category = require('../../models/categories');
const router = express.Router();
const { BadRequestError } = require('@thticket/common');

router.delete('/api/categories/:id', async (req, res) => {
  const doc = await Category.findByIdAndDelete(req.params.id);

  if (!doc) {
    throw new BadRequestError('Document ID not found!');
  }

  res.status(204).json(null);
});

module.exports = router;
