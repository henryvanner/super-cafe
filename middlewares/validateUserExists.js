const { param, validationResult } = require('express-validator')
const User = require('../collections/user')

const userWithIdExists = async (id = '') => {
  const user = await User.findById(id)
  if (!user) {
    throw new Error(`User with id \`${id}\`doesn't exist`)
  }
}

const checkValidationPassed = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(404).end()
  }
  next()
}

const validations = [
  param('id').custom(userWithIdExists),
  checkValidationPassed,
]

module.exports = validations
