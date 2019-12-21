import mongoose from 'mongoose'

mongoose.connect(
  'mongodb+srv://root:OTcIRskqhKwN3oII@printerservice-e9zdx.gcp.mongodb.net/test?retryWrites=true&w=majority'
)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('MongoDB connected.')
})
