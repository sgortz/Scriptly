const controller = require ('../database/controllers/scriptly.js')
module.exports = {
  getAllUsersFunction: (req, res) => {
    const { page, count } = req.query
    console.log("getAllUsersFunctions", page, count, req.query)
    controller.getAllUsers(page, count)
    .then(data => res.send(data))
    .catch(err => res.send(err))
  },
  getUserDataFunction: (req, res) => {
    const params = req.params
    controller.getUserInfo(params)
    .then(data => res.send(data))
    .catch(err => res.send(err))
  },
  findOneSpeechFunction: (req, res) => {
    controller.findOneSpeech(req.params)
    .then(data => res.send(data))
    .catch(err => res.send(err))
  },
  findUserSpeechesFunction: (req, res) => {
    controller.findUserSpeeches(req.params)
    .then(data => res.send(data))
    .catch(err => res.send(err))
  },
  addUserFunction: (req, res) => {
    controller.addUser(req.body)
    .then(data => res.send(data))
    .catch(err => res.send(err))
  },
  addSpeechFunction: (req, res) => {
    controller.addSpeech(req.body)
    .then(data => res.send(data))
    .catch(err => res.send(err))
  },
  updateOneSpeechFunction: (req, res) => {
    controller.updateOneSpeech(req.params, req.body)
    .then(data => res.send(data))
    .catch(err => res.send(err))
  },
  searchSpeechTitleFunction: (req, res) => {
    controller.searchSpeechTitle(req.params)
    .then(data => res.send(data))
    .catch(err => console.log(err))
  },
  searchBodyTitleFunction: (req, res) => {
    controller.searchBodyTitle(req.params)
    .then(data => res.send(data))
    .catch(err => console.log(err))
  },
  addCommentToSpeechFunction: (req, res) => {
    controller.addCommentToSpeech(req.params, req.body)
    .then(data => res.send(data))
    .catch(err => res.send(err))
  },
  deleteUserFunction: (req, res) => {
    controller.deleteUser(req.params)
    .then(data => res.send(data))
    .catch(err => res.send(err))
  },
  deleteSpeechFunction: (req, res) => {
    controller.deleteSpeech(req.params)
    .then(data => res.send(data))
    .catch(err => res.send(err))
  },
  deleteCommentFunction: (req, res) => {
    controller.deleteComment(req.params)
    .then(data => res.send(data))
    .catch(err => res.send(err))
  }
}