import { atom, selector } from 'recoil';
const parser = require('./components/shared/scriptlyShared.js');


export const pageView = atom({
  key: 'pageView',
  default: 'speech'
})

export const allSpeeches = atom({
  key: 'allSpeeches',
  default: [],
})

export const currentSpeechText = atom({
  key: 'currentSpeechText',
  default: ''
})

export const editedSpeechText = atom({
  key: 'editedSpeechText',
  default: '      ',
})

export const updateTitle = atom({
  key: 'updateTitle',
  default: '',
})

export const resultsModal = atom({
  key: 'resultsModal',
  default: false,
})

export const currentAnalysis = atom({
  key: 'currentAnalysis',
  default: {
    anger: 0,
    joy: 0,
    trust: 0,
    positive: 0,
    negative: 0,
    totalCount: 0,
  },
})

export const currentAnalysis2 = atom({
  key: 'currentAnalysis2',
  default: {
    anger: 0,
    joy: 0,
    trust: 0,
    positive: 0,
    negative: 0,
    totalCount: 0,
  },
})

export const currentSpeechId = atom({
  key: 'currentSpeechId',
  default: '627a9e00de163a667afa07a1',
})

export const editBoolean = atom({
  key: 'editBoolean',
  default: false,
})

export const reverser = selector({
  key: 'reverser',
  get: ({get}) => {
    let array = get(allSpeeches)
    let flipped = []
    for (let x = array.length - 1; x >= 0; x--) {
      flipped.push(array[x])
    }
    return flipped;
  }
})
<<<<<<< HEAD

export const formattedSpeech = atom({
  key: 'formattedSpeech',
  default: '',
})
=======
>>>>>>> main
