/* eslint-disable no-undef */
var router = require('express').Router();
var controller = require('./controllers');

router.get('/user', controller.getAllUsersFunction);
router.get('/user/:email', controller.getUserDataFunction);
router.get('/speech/:id', controller.findOneSpeechFunction);
router.get('/history/:email', controller.findUserSpeechesFunction);
router.post('/user', controller.addUserFunction)
router.post('/speech', controller.addSpeechFunction)
router.post('/speech/:id', controller.updateOneSpeechFunction);

module.exports = router;