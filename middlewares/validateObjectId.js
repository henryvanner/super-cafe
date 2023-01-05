const { param, validationResult } = require('express-validator')
const { isValidObjectId } = require('mongoose')

const idIsValid = async (id = '') => {
  const isValid = isValidObjectId(id)
  if (!isValid) {
    throw new Error(`\`${id}\` is not a valid id`)
  }
}

const checkValidationPassed = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json(errors)
  }
  next()
}

const validations = [param('id').custom(idIsValid), checkValidationPassed]

module.exports = validations
