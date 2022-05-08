/* eslint-disable no-undef */
var router = require('express').Router();
var controller = require('./controllers');


router.get('/user/:email', controller.getUserDataFunction);
router.get('/speech/:id', controller.findOneSpeechFunction);
router.post('/user', controller.addUserFunction)
router.post('/user/:id', controller.updateOneFunction);

module.exports = router;