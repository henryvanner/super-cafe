const express = require('express')
const userControllers = require('../controllers/user')
const validateUser = require('../middlewares/validateUser')
const validateObjectId = require('../middlewares/validateObjectId')
const validateUserExists = require('../middlewares/validateUserExists')

const router = express.Router()

router.post('/', validateUser, userControllers.handlePostRequest)
router.get(
  '/:id',
  validateObjectId,
  validateUserExists,
  userControllers.handleGetRequest
)
router.put(
  '/:id',
  validateObjectId,
  validateUserExists,
  userControllers.handlePutRequest
)
router.delete('/:id', userControllers.handleDeleteRequest)

module.exports = router
