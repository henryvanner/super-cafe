require("dotenv").config()

const server = require("./models/server")()

server.start()
