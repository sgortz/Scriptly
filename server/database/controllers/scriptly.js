const { User, Speech } = require('../models/scriptly')

module.exports = {
  getAllUsers: (page = 0, count = 5) => {
    console.log('page', page, 'count', count)
    return User.find({}).skip(page).limit(count)
  },
  getUserInfo: (params) => {
    const { email } = params
    return User.find({email: email})

  },
  findOneSpeech: (params) => {
    const id = params.id;
    return Speech.find({_id: id})
  },
  findUserSpeeches: (params) => {
    return Speech.find(params)

  },
  addSpeech: (inputs) => {
    const { name, email, body, url, title, totalCount, positive, negative, trust, anger, joy } = inputs;
    const newSpeech = new Speech({
      name,
      email,
      title,
      speeches: [{
        title: title,
        body: body,
        url: url,
        date: new Date(),
        analysis: {
          totalCount,
          positive,
          negative,
          trust,
          anger,
          joy,
        }
      }]
    })
    return newSpeech.save()
  },
  updateOneSpeech: (params, inputs) => {
    // get analysis for storage here
    // positive, negative, trust, anger, joy
    console.log('params', params, 'inputs', inputs)
    const id = params.id;
    const { title, body, url, totalCount, positive, negative, trust, anger, joy } = inputs;
    return Speech.findByIdAndUpdate(
      id,
      {
        title: title,
        $push: {
          speeches: {
            $each: [
              {
                title: title,
                body: body,
                url: url,
                date: new Date(),
                analysis: {
                  totalCount,
                  positive,
                  negative,
                  trust,
                  anger,
                  joy,
                },
              },
            ],
            $position: 0,
          },
        },
      },
      { upsert: true, new: true }
    );
  },
  addUser: (inputs) => {
    const { name, email, url } = inputs;
    return User.find({})
    .sort({ id: -1 })
    .then((data) => {
        let currentID = 1;
        if (data[0]) {
          currentID = data[0].id + 1;
        }
        return currentID
      })
      .then((currentID) => {
        const embed = new User({
          id: currentID,
          name: name,
          email: email,
          url: url,
        });
        return embed.save();
      })
      .catch((err) => console.log(err));
  },
  searchSpeechTitle: (inputs) => {
    const {search} = inputs;
    return Speech.find({})
      .then((data) => { // [speech1, speech2.....]
        let result = data.filter((speech) => {
          return speech.title.toLowerCase().includes(search.toLowerCase())// true or false
        }) // [speech2, speech5 ...]
        return result; // res.send(result);
      })
      .catch(err => {
        console.log(err)
      })
    //   speeches.filter((speech) => { // [speech1, speech2]
    //   speech.title.toLowerCase().include(title.toLowerCase())
    // })
  },
  searchBodyTitle: (inputs) => {
    //Speech.find({})
    //.then(data => )
  }
};