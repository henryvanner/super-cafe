const userServices = require('../services/user')

/** @type {import('express').RequestHandler} */
const handleGetRequest = (req, res) => {
  res.send('GET user ' + req.params.id)
}

/** @type {import('express').RequestHandler} */
const handlePostRequest = async (req, res) => {
  try {
    const user = await userServices.createUser(req.body)
    res.send(user)
  } catch (error) {
    console.log(error)
    res.status(500).end()
  }
}

/** @type {import('express').RequestHandler} */
const handlePutRequest = (req, res) => {
  res.send('PUT user ' + req.params.id)
}

/** @type {import('express').RequestHandler} */
const handleDeleteRequest = (req, res) => {
  res.send('DELETE user ' + req.params.id)
}

module.exports = {
  handlePostRequest,
  handleGetRequest,
  handlePutRequest,
  handleDeleteRequest,
}
