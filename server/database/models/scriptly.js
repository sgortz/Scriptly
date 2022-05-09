/* eslint-disable no-useless-escape */
const mongoose = require('mongoose');


const speechesSchema = mongoose.Schema({
  id: Number,
  body: String,
  analysis: {
    positive: Number,
    negative: Number,
    trust: Number,
    anger: Number,
    joy: Number,
  }
},{
  timestamps: true,
})

var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const userSchema = mongoose.Schema({
  id: Number,
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  speeches: [speechesSchema]
})

const User = mongoose.model('User', userSchema);
//const Speech = mongoose.model('Speech', speechesSchema);

module.exports = User
