const userServices = require('../services/user')

/** @type {import('express').RequestHandler} */
const getUser = (req, res) => {
  res.send('GET user ' + req.params.id)
}

/** @type {import('express').RequestHandler} */
const postUser = async (req, res) => {
  try {
    const user = await userServices.createUser(req.body)
    res.send(user)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

/** @type {import('express').RequestHandler} */
const putUser = (req, res) => {
  res.send('PUT user ' + req.params.id)
}

/** @type {import('express').RequestHandler} */
const deleteUser = (req, res) => {
  res.send('DELETE user ' + req.params.id)
}

module.exports = {
  post: postUser,
  get: getUser,
  put: putUser,
  delete: deleteUser,
}
