import {atom} from 'recoil';

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
  default: '',
})

export const resultModal = atom({
  key: 'resultModal',
  default: false,
})

export const uploadModal = atom({
  key: 'resultModal',
  default: 'none',
})

export const loginStatus = atom({
  key: 'login',
  default: 'none',
})