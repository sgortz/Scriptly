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
    const { name, email, body, url, positive, negative, trust, anger, joy } = inputs;
    const newSpeech = new Speech({
      name,
      email,
      speeches: [{
        body: body,
        url: url,
        analysis: {
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
    const { body, email, name, url, positive, negative, trust, anger, joy } = inputs;
    return Speech.findByIdAndUpdate(
      id,
      {
        name,
        email,

        $push: {
          speeches: {
            $each: [
              {
                body: body,
                url: url,
                analysis: {
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
};