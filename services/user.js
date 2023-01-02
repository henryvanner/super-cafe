const bcryptjs = require('./bcrypt')
const User = require('../collections/user')

const findUserByEmail = async (email) => await User.findOne({ email })

const createUser = async ({ name, email, password }) => {
  try {
    const user = new User({
      name,
      email,
      password: bcryptjs.encryptPassword(password),
    })
    await user.save()
    return user
  } catch (error) {
    throw new Error('Malformed payload')
  }
}

module.exports = {
  createUser,
  findUserByEmail,
}
