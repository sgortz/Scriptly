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
export const showLoginModal = atom({
  key: 'loginModal',
  default: false
})
export const loginText = atom({
  key: 'text',
  default: 'log-in'
})