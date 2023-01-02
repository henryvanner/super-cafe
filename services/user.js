const bcryptjs = require('./bcrypt')
const User = require('../collections/user')

const findUserByEmail = async (email) => await User.findOne({ email })

const createUser = async ({ name, email, password }) => {
  const user = new User({
    name,
    email,
    password: bcryptjs.encryptPassword(password),
  })
  await user.save()
  return user
}

module.exports = {
  createUser,
  findUserByEmail,
}
