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

// Coupon schema
const couponSchema = new Schema({
  code: { type: String, required: true, unique: true },
  couponType: { type: String, enum: ['flat', 'percentage'], required: true },
  discountAmount: { type: Number, required: true },
}, { timestamps: true });


const orderSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  apartment: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  zipCode: { type: String, required: true },
  products: [{
    item: { type: Schema.Types.ObjectId, ref: 'Product',  required: true },
    qty: { type: Number, required: true }
  }],
  total: { type: Number, required: true },
  subTotal: { type: Number, required: true },
  shipping: { type: Number, required: true }
}, { timestamps: true });


// Export the models
const User = models.User || model('User', userSchema);
const Product = models.Product || model('Product', productSchema);
const Cart = models.Cart || model('Cart', cartSchema);
const Coupon = models.Coupon || model('Coupon', couponSchema);
const Order = models.Order || model('Order', orderSchema);

export { User, Product, Cart, Coupon, Order };