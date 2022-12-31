const { Schema, model } = require('mongoose')

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  signedUpWithGoogle: {
    type: Boolean,
    default: false,
  },
})

module.exports = model('User', schema)
