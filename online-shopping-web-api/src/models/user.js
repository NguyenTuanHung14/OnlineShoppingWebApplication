const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please provide an username'],
      unique:true
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique:true

    },
    password: {
      type: String,
    },
    status: {
      type: Boolean,
      default: true
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


const User = mongoose.model('User', userSchema);
module.exports = User;
