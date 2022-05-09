import {atom} from 'recoil';

export const pageView = atom({
  key: 'pageView',
  default: 'speech'
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
  default: false
})