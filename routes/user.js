const express = require('express')
const user = require('../controllers/user')

const router = express.Router()

router.post('/', user.post)
router.get('/:id', user.get)
router.put('/:id', user.put)
router.delete('/:id', user.delete)

module.exports = router
