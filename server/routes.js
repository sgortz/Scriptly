/* eslint-disable no-undef */
var router = require('express').Router();
var controller = require('./controllers');

router.get('/user', controller.getAllUsersFunction);
router.get('/user/:email', controller.getUserDataFunction);
router.get('/speech/:id', controller.findOneSpeechFunction);
router.get('/history/:email', controller.findUserSpeechesFunction);
router.get('/search/:search', controller.searchSpeechTitleFunction);
router.get('/search/:search/body', controller.searchBodyTitleFunction);
router.post('/user', controller.addUserFunction);
router.post('/speech', controller.addSpeechFunction);
router.post('/speech/:id', controller.updateOneSpeechFunction);
router.post('/comment/:id', controller.addCommentToSpeechFunction);
router.delete('/user/:id', controller.deleteUserFunction);
router.delete('/speech/:id', controller.deleteSpeechFunction);
router.delete('/comment/:id', controller.deleteCommentFunction);

module.exports = router;