const express = require('express')
const userControllers = require('../controllers/user')
const validateUser = require('../middlewares/validateUser')
const validateObjectId = require('../middlewares/validateObjectId')

const router = express.Router()

router.post('/', validateUser, userControllers.handlePostRequest)
router.get(
  '/:id',
  validateObjectId,
  (req, res, next) => {
    console.log('Extra middleware')
    next()
  },
  userControllers.handleGetRequest
)
router.put('/:id', userControllers.handlePutRequest)
router.delete('/:id', userControllers.handleDeleteRequest)

module.exports = router
