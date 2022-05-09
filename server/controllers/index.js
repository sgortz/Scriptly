const controller = require ('../database/controllers/scriptly.js')

// eslint-disable-next-line no-undef
module.exports = {
  addUserFunction: (req, res) => {
    controller.addUser(req.body)
    .then(data => {
      res.send(data)
    })
    .catch(err => console.log(err))
  },
  findOneSpeechFunction: (req, res) => {
    controller.findOneSpeech(req.params)
    .then(data => res.send(data))
    .catch(err => res.send(err))
  },
  updateOneFunction: (req, res) => {
    controller.updateOne(req.params, req.body)
    .then(data => {
      console.log('updateOneFunction ', data)
      res.send(data)
    })
    .catch(err => console.log(err))
  },
  getUserDataFunction: (req, res) => {
    console.log('getUserData', req.params)
    const params = req.params
    controller.getUserInfo(params)
    .then(data => res.send(data))
    .catch(err => res.send(err))
  },
}