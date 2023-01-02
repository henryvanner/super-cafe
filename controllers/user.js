const userServices = require('../services/user')

const handleGetRequest = (req, res) => {
  res.send('GET user ' + req.params.id)
}

const handlePostRequest = async (req, res) => {
  try {
    const user = await userServices.createUser(req.body)
    res.send(user)
  } catch (error) {
    console.log(error)
    res.status(500).end()
  }
}

const handlePutRequest = (req, res) => {
  res.send('PUT user ' + req.params.id)
}

const handleDeleteRequest = (req, res) => {
  res.send('DELETE user ' + req.params.id)
}

module.exports = {
  handlePostRequest,
  handleGetRequest,
  handlePutRequest,
  handleDeleteRequest,
}
