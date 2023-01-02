const { pick } = require('lodash')
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

// override method to filter the data being retrieved
schema.methods.toJSON = function () {
  const userData = this.toObject()
  const dataSafeToShare = [
    '_id',
    'name',
    'email',
    'isActive',
    'signedUpWithGoogle',
  ]
  return pick(userData, dataSafeToShare)
}

module.exports = model('User', schema)
