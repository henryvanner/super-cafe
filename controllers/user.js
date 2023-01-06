const User = require('../collections/user')
const userServices = require('../services/user')

const handleGetRequest = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    if (!user) return res.status(404).end()
    return res.json(user)
  } catch (error) {
    console.log(error)
    res.status(500).end()
  }
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

const handlePutRequest = async (req, res) => {
  try {
    const { id } = req.params
    const user = await userServices.updateUser(id, req.body)
    res.send(user)
  } catch (error) {
    console.log(error)
    res.status(500).end()
  }
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
