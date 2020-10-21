const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a product name'],
      unique:true
    },
    price: {
      type: Number,
      required: [true, 'A product must have a price'],
    },
    description: {
      type: String,
    },
    status: {
      type: Boolean,
    },
    size: [String],
    images: [
      {
        type: String,
        default: 'default.png',
      },
    ],
    category: {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

productSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'category',
    select: 'name',
  });
  next();
});
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
