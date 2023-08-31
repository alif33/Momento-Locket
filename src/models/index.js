import { Schema, model, models } from 'mongoose'

// User schema
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
}, { timestamps: true });








// Export the models
const User = models.User || model('User', userSchema);


export { User };