const express = require('express')
const cors = require('cors')

const server = () => {
  const app = express()

  const plugMiddlewaresIn = () => {
    app.use(cors())
    app.use(express.json())
  }

  const plugRoutesIn = () => {
    app.use('/api/user', require('../routes/user'))
  }

  const listenForConnections = () => {
    const port = process.env.PORT

    app.listen(port, () => console.log('Listening on port', port))
  }

  const start = () => {
    plugMiddlewaresIn()
    plugRoutesIn()
    listenForConnections()
  }

  return { start }
}

module.exports = server
