const bcryptjs = require('./bcrypt')
const User = require('../collections/user')

const createUser = async ({ name, email, password }) => {
  const encryptedPassword = bcryptjs.encryptPassword(password)
  const data = { name, email, password: encryptedPassword }
  const user = new User(data)
  await user.save()
  return user
}

module.exports = {
  createUser,
}
