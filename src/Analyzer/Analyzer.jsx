import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { currentSpeechText, currentAnalysis, editedSpeechText } from '../atoms.jsx';
const parser = require('../components/shared/scriptlyShared.js');
const { fear } = require('./fearfulWords.js');
const { joy } = require('./joyfulWords.js');
const { trust } = require('./trustworthyWords.js');
const { positive } = require('./positiveWords.js');
const { negative } = require('./negativeWords.js');

const Analyzer = () => {
  const [editedValue, setEdited] = useRecoilState(editedSpeechText);
  const [analysisValue, setAnalysis] = useRecoilState(currentAnalysis);

  useEffect(() => {
    funcWrapper(editedValue);
  }, [editedValue]);

  const funcWrapper = (string) => {
    console.log(string);

    // account for other characters on split/filter
    let split = parser.parseTextToArray(string)
    console.log('this is the splitted string: ', split)
    // ship this off with submit
    let emotion = {
      fear: 0,
      joy: 0,
      trust: 0,
      positive: 0,
      negative: 0,
      totalCount: 0,
    }

    split.forEach((value) => {
      emotion.totalCount++;
      if (fear.includes(value)) {
        emotion.fear++;
      } else if (positive.includes(value)) {
        emotion.positive++;
      } else if (negative.includes(value)) {
        emotion.negative++;
      } else if (joy.includes(value)) {
        emotion.joy++;
      } else if (trust.includes(value)) {
        emotion.trust++;
      }
    })
    setAnalysis(emotion)
    console.log(emotion)
  }
}

export default Analyzer;