const { check, validationResult } = require('express-validator')
const userServices = require('../services/user')

const emailIsAvailable = async (email = '') => {
  const user = await userServices.findUserByEmail(email)
  if (user) {
    throw new Error('`email` is already in used')
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
  check('name', '`name` is mandatory').not().isEmpty(),
  check('email', '`email` is not a valid email').isEmail(),
  check('email').custom(emailIsAvailable),
  check('password', '`password` must have more than six characters').isLength({
    min: 6,
  }),
  checkValidationsPassed,
]

module.exports = validations
