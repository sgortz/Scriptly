const { User, Speech } = require('../models/scriptly')

module.exports = {
  getAllUsers: (page = 0, count = 5) => {
    console.log('page', page, 'count', count)
    return User.find({}).skip(page).limit(count)
  },
  getUserInfo: (params) => {
    const { email } = params
    return User.find({ email: email })

  },
  findOneSpeech: (params) => {
    const id = params.id;
    return Speech.find({ _id: id })
  },
  findUserSpeeches: (params) => {
    return Speech.find(params)
  },
  addSpeech: (inputs) => {
    const { name, email, body, url, title, totalCount, positive, negative, trust, anger, joy } = inputs;
    console.log('inputs', inputs)
    if (typeof (body) === 'string') {
      const newSpeech = new Speech({
        name,
        email,
        title,
        comments: [],
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
    }
    console.log('Please check your format!')
    return;
  },
  deleteSpeech: (params) => {
    const { id } = params
    return Speech.findByIdAndDelete(id)
  },
  deleteComment: (params) => {
    const { id } = params
    return Speech.findByIdAndDelete(id)
  },
  updateOneSpeech: (params, inputs) => {
    console.log('params', params, 'inputs', inputs)
    const id = params.id;
    const { title, body, email, url, totalCount, positive, negative, trust, anger, joy } = inputs;

    return Speech.findByIdAndUpdate(
      id,
      {
        email,
        title,
        $push: {
          speeches: {
            $each: [
              {
                title,
                body,
                url,
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
      { upsert: true, new: true, runValidators: true }
    )


  },
  addCommentToSpeech: (params, inputs) => {
    const { reviewerName, commentBody } = inputs;
    const { id } = params;
    return Speech.findByIdAndUpdate(
      id,
      {
        $push: {
          comments: {
            $each: [
              {
                reviewerName,
                commentBody,
                commentDate: new Date(),
              },
            ],
            $position: 0,
          },
        },
      },
      { upsert: true, new: true, runValidators: true }
    )
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
      .catch((err) => err);
  },
  deleteUser: (params) => {
    const { id } = params
    return User.findByIdAndDelete(id)
  },
  searchSpeechTitle: (inputs) => {
    const { search } = inputs;
    return Speech.find({})
      .then((data) => {
        let result = data.filter((speech) => {
          return speech.title.toLowerCase().includes(search.toLowerCase())
        })
        return result;
      })
      .catch(err => {
        console.log(err)
      })
  },
  searchBodyTitle: (inputs) => {
    const { search } = inputs;
    return Speech.find({})
      .then(data => {
        let resultWeWant = []
        let result = data.map(obj => {
          let temp = obj.speeches.filter(body => {
            body.body = body.body === null ? '' : body.body;
            console.log('body.body', body.body)
            return body.body.toLowerCase().includes(search.toLowerCase())
          });
          temp.forEach((speech) => {
            resultWeWant.push(speech);
          })
        })
        return resultWeWant;
      })
      .catch(err => console.log(err))
  }
};
