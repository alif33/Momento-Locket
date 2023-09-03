import { Schema, model, models } from 'mongoose'

// User schema
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  address: { type: String },
  apartment: { type: String },
  phone: { type: String },
  city: { type: String },
  country: { type: String },
  state: { type: String },
  zipCode: { type: String },
  password: { type: String, required: true },
}, { timestamps: true });

// Product schema
const productSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  price: { type: String },
  qty: { type: String },
}, { timestamps: true });

// Cart schema
const cartSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  items: [{
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    qty: { type: Number, default: 1 }
  }]
  
}, { timestamps: true });


// Export the models
const User = models.User || model('User', userSchema);
const Product = models.Product || model('Product', productSchema);
const Cart = models.Cart || model('Cart', cartSchema);


export { User, Product, Cart };