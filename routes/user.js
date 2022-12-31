const express = require('express')
const userControllers = require('../controllers/user')

const router = express.Router()

router.post('/', userControllers.handlePostRequest)
router.get('/:id', userControllers.handleGetRequest)
router.put('/:id', userControllers.handlePutRequest)
router.delete('/:id', userControllers.handleDeleteRequest)

module.exports = router
