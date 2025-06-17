const mongoose = require('mongoose');

const user= new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  candidate_id: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  class: {
    type: String,
    trim: true,
    
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
  },
  dob: {
    type: Date,
  },
  profileImage: {
    type: String, // URL or image filename
    default: null,
  },
  address: {
    state: {
      type: String,
      trim: true,
      required: true,
    },
    city: {
      type: String,
      trim: true,
      required: true,
    },
    pincode: {
      type: String,
      trim: true,
      required: true,
    },
    addressLine: {
      type: String,
      trim: true,
    }
  },
  otp: {
    type: Number,
    default: null,
  },
 
  status: {
    type: String,
    enum: ['active', 'inactive', 'banned'],
    default: 'active',
  },
  lastLogin: {
    type: Date,
    default: null,
  },
lastLogout: {
  type: Date,
  default: null,
},
sessionDuration: {
  type: Number, // in seconds or milliseconds
  default: 0,
}
}, { timestamps: true });

module.exports = mongoose.model('Student', user);
// This exports the user model, which can be used in other parts of the application to interact

