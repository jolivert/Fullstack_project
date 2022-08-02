
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
// Nota: habría que indicar que esto es un email (con formato de email)
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  surname: {
    type: String,
    required: true,
    trim: true,
  },
  userType: {
    type: String,
    required: true,
    trim: true,
  }
});

userSchema.index({ username: 1 });

const User = mongoose.model('user', userSchema);

module.exports = User;