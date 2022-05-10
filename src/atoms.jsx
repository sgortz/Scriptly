import { atom } from 'recoil';

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

export const loginStatus = atom({
  key: 'login',
  default: 'none',
})

export const updateTitle = atom({
  key: 'updateTitle',
  default: '',
})