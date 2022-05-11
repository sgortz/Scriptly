/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const router = require('./routes')
const express = require('express')
require('dotenv').config()
const path = require('path')
const morgan = require("morgan")
const db = require('./database').connnection

const app=express();

//middleware files
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.static('dist'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan('dev'));

app.use('/', router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

