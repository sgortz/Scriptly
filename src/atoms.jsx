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
  default: 'a',
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
    fear: 0,
    joy: 0,
    trust: 0,
    positive: 0,
    negative: 0,
    wordCount: 0,
  },
})

export const currentAnalysis2 = atom({
  key: 'currentAnalysis2',
  default: {
    fear: 0,
    joy: 0,
    trust: 0,
    positive: 0,
    negative: 0,
    wordCount: 0,
  },
})

export const parseSelector = selector({
  key: 'parseSelector',
  get: ({get}) => {
    let data = get(editedValue)
    let parse = parser.parseTextToArray(data)
  }
})
