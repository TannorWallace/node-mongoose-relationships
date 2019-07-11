import mongoose from 'mongoose'

const connectionString = 'mongodb+srv://Student:Student@cluster0-cmkxe.mongodb.net/Galaxy?retryWrites=true&w=majority'

let connection = mongoose.connection

mongoose.connect(connectionString, {
  useNewUrlParser: true
})

connection.on('error', err => {
  console.error('[THE SYSTEM IS DOWN]:', err)
})

connection.once('open', () => {
  console.log("connection to database established!")
})