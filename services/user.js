const User = require('../collections/user')

const createUser = async (data) => {
  try {
    const user = new User(data)
    await user.save()
    return user
  } catch (error) {
    throw new Error('Malformed payload')
  }
}

module.exports = {
  createUser,
}
