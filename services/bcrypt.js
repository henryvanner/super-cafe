const bcryptjs = require('bcryptjs')

const encryptPassword = (password) => {
  const salt = bcryptjs.genSaltSync()
  const passwordEncrypted = bcryptjs.hashSync(password, salt)
  return passwordEncrypted
}

module.exports = { encryptPassword }
