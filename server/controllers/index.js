

// eslint-disable-next-line no-undef
module.exports = {
  testFunction: (req, res) => {
    res.send(200)
  },
  getUserData: (req, res) => {
    console.log('getUserData', req.params)
    res.send(200)
  },
  getSpeeches: (req, res) => {
    //array of speeches... either grab the first speech if not defined
    // or grab the speech at index value of request
    console.log('getSpeeches', req.params)
    res.send(req.params)
  },
  getAnalyzedSpeeches: (req, res) => {
    console.log('getAnalyzedSpeeches', req.params)
    res.send(req.params)
  },
  postSpeech: (req, res) => {
    //insert a new speech into database if speech ID doesn't exist, if ID found
    // unshift() speech into array of user speeches.
    console.log('postSpeech', req.body)
    res.send(req.body)
  },
  postVideo: (req, res) => {
    //look up user and add vidoe URL to database
    //Front End will also post to Firebase storage?
    console.log('postSpeech', req.body)
    res.send(req.body)
  }

}