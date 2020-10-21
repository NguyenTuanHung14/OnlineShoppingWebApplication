const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');

const { errorHandler, NotFoundError } = require('@thticket/common');

const {
  updateProductRoute,
  showProductRoute,
  createProductRoute,
  deleteProductRoute,
  getOneProductRoute,
} = require('./routes/product');
const {
  updateCategoryRoute,
  showCategoryRoute,
  createCategoryRoute,
  deleteCategoryRoute,
} = require('./routes/category');
const app = express();
app.use(json());
app.use(cors());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Expose-Headers', 'X-Total-Count, Content-Range');
  next();
});
app.use(showProductRoute);
app.use(getOneProductRoute);
app.use(createProductRoute);
app.use(updateProductRoute);
app.use(deleteProductRoute);

app.use(showCategoryRoute);
app.use(createCategoryRoute);
app.use(updateCategoryRoute);
app.use(deleteCategoryRoute);

app.all('*', () => {
  throw new NotFoundError();
});
app.use(errorHandler);

module.exports = app;
