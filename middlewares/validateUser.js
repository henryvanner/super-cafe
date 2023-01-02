const { check, validationResult } = require('express-validator')

const validateResult = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json(errors)
  }
  next()
}

const validators = [
  check('name', '`name` is mandatory').not().isEmpty(),
  check('email', '`email` is not a valid email').isEmail(),
  check('password', '`password` must have more than six characters').isLength({
    min: 6,
  }),
  validateResult,
]

module.exports = validators
