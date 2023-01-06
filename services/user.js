const bcryptjs = require('./bcrypt')
const User = require('../collections/user')

// TODO: make sure only expected data is received
const createUser = async ({ name, email, password }) => {
  const encryptedPassword = bcryptjs.encryptPassword(password)
  const data = { name, email, password: encryptedPassword }
  const user = new User(data)
  await user.save()
  return user
}

const updateUser = async (id, data) => {
  const encryptedPassword = bcryptjs.encryptPassword(data.password)
  data.password = encryptedPassword
  const user = await User.findByIdAndUpdate(id, data, { new: true })
  return user
}

module.exports = {
  createUser,
  updateUser,
}
