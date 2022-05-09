/* eslint-disable no-useless-escape */
const mongoose = require('mongoose');


const speechesSchema = mongoose.Schema({
  id: Number,
  name: String,
  email: String,
  body: String,
  url: String,
  analysis: {
    positive: Number,
    negative: Number,
    trust: Number,
    anger: Number,
    joy: Number,
  },
  speeches: []
},{
  timestamps: true,
})

var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const userSchema = mongoose.Schema({
  id: Number,
  url: String,
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
  }
})

const User = mongoose.model('User', userSchema);
const Speech = mongoose.model('Speech', speechesSchema);

module.exports = {
  User,
  Speech
}
