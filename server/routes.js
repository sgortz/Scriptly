/* eslint-disable no-undef */
var router = require('express').Router();
var controller = require('./controllers');


router.get('/user/:userId', controller.getUserData);
router.get('/speeches/:userId', controller.getSpeeches);
router.get('/speeches/:userId/analyzed', controller.getAnalyzedSpeeches);
router.post('/speeches/:userId', controller.postSpeech);
router.post('/video/:userId', controller.postVideo);




module.exports = router;