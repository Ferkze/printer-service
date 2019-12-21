import mongoose, { Schema } from 'mongoose'
import Cart from './cart'

const userSchema = new Schema({
  name: String,
  birthDate: Date,
  gender: String,
  identificationDocument: String,
  phone: String,
  cart: Cart
})

mongoose.model('user', userSchema)
