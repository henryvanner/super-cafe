/** @type {import('express').RequestHandler} */
const getUser = (req, res) => {
  res.send('GET user ' + req.params.id)
}

/** @type {import('express').RequestHandler} */
const postUser = (req, res) => {
  res.send('POST user ' + JSON.stringify(req.body))
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
