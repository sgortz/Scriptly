const User = require('../models/scriptly')



module.exports = {
  getUserInfo: (params) => {
    const { email } = params
    return User.find({email: email})

  },
  findOneSpeech: (params) => {
    const id = params.id;
    return User.find({'speeches._id': id})


  },
  updateOne: (params, body) => {
    // get analysis for storage here
    // positive, negative, trust, anger, joy
    const id = params.id;
    const { speech, email, name } = body;
<<<<<<< HEAD
    console.log("speech ", speech, "email ", email, "name ", name)
=======

>>>>>>> 0322d64aceabbb9d6831ea9af71303c23ffc6ed9
    return User.findByIdAndUpdate(
      id,
      {
        name: name,
        email: email,

        $push: {
          speeches: {
            $each: [
              {
                id: 1,
                body: speech,
                analysis: {
                  positive: 1,
                  negative: 2,
                  trust: 3,
                  anger: 4,
                  joy: 5,
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
  addUser: (params) => {
    const { name, email } = params;
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
        });
        return embed.save();
      })
      .catch((err) => console.log(err));
  },
};