const express = require('express')
require('dotenv').config()
const path = require('path')
const morgan = require("morgan")

const app=express();

//middleware files
app.use(express.static(path.join(__dirname, '../dist/src')));
app.use(express.static('dist'));
app.use(express.json());
app.use(morgan('dev'));



app.get('/test', (req, res)=> {
  res.send("<h1>Hello World</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})