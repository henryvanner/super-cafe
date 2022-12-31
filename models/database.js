const mongoose = require('mongoose')

const database = () => {
  const connect = async () => {
    try {
      await mongoose.connect(
        'mongodb://admin:admin@mongo:27017/cafe?authSource=admin'
      )
      console.log('Connection to the database was established')
    } catch (error) {
      console.log(error)
      throw new Error('Error when trying to connect to the database')
    }
  }

  return { connect }
}

module.exports = database
