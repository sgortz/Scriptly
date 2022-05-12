import React, {useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {currentSpeechText, currentAnalysis, editedSpeechText, currentAnalysis2} from '../atoms.jsx';
const parser = require('../components/shared/scriptlyShared.js');
const { fear } = require('./fearfulWords.js');
const { joy } = require('./joyfulWords.js');
const { trust } = require('./trustworthyWords.js');
const { positive } = require('./positiveWords.js');
const { negative } = require('./negativeWords.js');

const Analyzer = () => {
  const [editedValue, setEdited] = useRecoilState(editedSpeechText);
  const [analysisValue, setAnalysis] = useRecoilState(currentAnalysis);
  const [analysisValue2, setAnalysis2] = useRecoilState(currentAnalysis2);


  useEffect(() => {
    funcWrapper(editedValue);
    }, [editedValue]);

    const funcWrapper = (string) => {

      if (string.length === 0) {
        setEdited(' ')
      } else {

      let split = parser.parseTextToArray(string);

      let emotion = {
        anger: 0,
        joy: 0,
        trust: 0,
        positive: 0,
        negative: 0,
        totalCount: 0,
      }

      split.forEach((value) => {
        emotion.totalCount++;
        if (fear.includes(value)) {
          emotion.anger++;
        }
        if (positive.includes(value)) {
          emotion.positive++;
        }
        if (negative.includes(value)) {
          emotion.negative++;
        }
        if (joy.includes(value)) {
          emotion.joy++;
        }
        if (trust.includes(value)) {
          emotion.trust++;
        }
      })
      setAnalysis2(emotion)
      setAnalysis(emotion)
    }
  }
}

export default Analyzer;