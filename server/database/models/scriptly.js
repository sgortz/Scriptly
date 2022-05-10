/* eslint-disable no-useless-escape */
const mongoose = require('mongoose');

var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const commentsSchema = new mongoose.Schema({
  reviewerName :{ type: String, required: true },
  commentBody : { type: String, required: true },
  commentDate: String,
})

const speechesSchema = new mongoose.Schema({
  id: Number,
  name: { type: String, required: true },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  title: { type: String, default: 'Please enter a title' },
  url: String,
  date: String,
  speeches: [{
    title: { type: String, default: 'Please enter a title.' },
    body: { type: String, default: 'Please enter a speech.'},
    analysis: {
      totalCount: {type: Number, default: 0 },
      positive: {type: Number, default: 0 },
      negative: {type: Number, default: 0 },
      trust: {type: Number, default: 0 },
      anger: {type: Number, default: 0 },
      joy: {type: Number, default: 0},
    },
    url: String,
    date: String,
  }],
  comments: [commentsSchema]
},{
  timestamps: true,
})

const userSchema = new mongoose.Schema({
  id: Number,
  url: {type: String, default: "https://firebasestorage.googleapis.com/v0/b/scriptly-dcd67.appspot.com/o/letter_s_icon_151241.png?alt=media&token=17e623e2-6fea-4493-940a-1bdebd9b2f38" },
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
