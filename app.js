require('dotenv').config()

const server = require('./models/server')()
const database = require('./models/database')()

database.connect()
server.start()
