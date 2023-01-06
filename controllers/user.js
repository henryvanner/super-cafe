const User = require('../collections/user')
const userServices = require('../services/user')

const handleGetRequest = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    res.json(user)
  } catch (error) {
    console.log(error)
    res.status(500).end()
  }
}

const handlePostRequest = async (req, res) => {
  try {
    const user = await userServices.createUser(req.body)
    res.json(user)
  } catch (error) {
    console.log(error)
    res.status(500).end()
  }
}

const handlePutRequest = async (req, res) => {
  try {
    const { id } = req.params
    const user = await userServices.updateUser(id, req.body)
    res.json(user)
  } catch (error) {
    console.log(error)
    res.status(500).end()
  }
}

const handleDeleteRequest = async (req, res) => {
  try {
    const { id } = req.params
    await User.findByIdAndDelete(id)
    res.status(204).end()
  } catch (error) {
    console.log(error)
    res.status(500).end()
  }
}

module.exports = {
  handlePostRequest,
  handleGetRequest,
  handlePutRequest,
  handleDeleteRequest,
}
