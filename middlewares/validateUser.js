const { body, validationResult } = require('express-validator')
const User = require('../collections/user')

const emailIsAvailable = async (email = '') => {
  const user = await User.findOne({ email })
  if (user) {
    throw new Error('`email` is already in use')
  }
}

const checkValidationsPassed = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json(errors)
  }
  next()
}

const validations = [
  body('name', '`name` is mandatory').not().isEmpty(),
  body('email', '`email` is not a valid email').isEmail(),
  body('email').custom(emailIsAvailable),
  body('password', '`password` must have more than six characters').isLength({
    min: 6,
  }),
  checkValidationsPassed,
]

module.exports = validations
