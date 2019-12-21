import mongoose, { Schema } from 'mongoose'

const cartSchema = new Schema({
  item: String
})

const Cart = mongoose.model('Cart', cartSchema)

export default Cart
