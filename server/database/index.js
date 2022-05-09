/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const mongoose = require('mongoose')
require('dotenv').config()


PASSWORD = process.env.PASSWORD
USERNAME = process.env.USERNAME
const mongoURI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.mmafy.mongodb.net/blueOcean`

const db = mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

db
  .then(db => console.log(`Connected to: ${mongoURI}`))
  .catch(err => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`);
    console.log(err);
  });

module.exports = db
