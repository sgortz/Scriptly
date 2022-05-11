module.exports ={
  parseTextToArray(text) {
    if (!text) {
      return new Error('Envalid Input')
    }
    if (text.length == 0) {
      return new Error('Empty Input')
    }
    const words= [];
    const strLength = text.length;
    let word = '';
    let isALetter = function (char) {
      const ASCII = char.toLowerCase().charCodeAt(0);
      if (ASCII >= 97 && ASCII <= 122) {
        return true;
      }
      return false;
    }

    for (let idx = 0; idx < strLength; idx++ ) {
      if (isALetter(text[idx])) {
        word += text[idx];
      } else if (word.length > 0) {
        words.push(word);
        word = '';
      }

      if (word.length > 0 && idx === strLength - 1) {
        words.push(word);
      }
    }
    return words;
  },
  sumToneValues(array) {
    if (!array) {
      return new Error('Input must be an array');
    }
    let angerSum = 0;
    let joySum = 0;
    let negativeSum = 0;
    let positiveSum = 0;
    let totalCountSum = 0;
    let trustSum = 0;

    array.forEach((speechVersion) => {
      const { anger, joy, negative, positive, totalCount, trust } = speechVersion.analysis;
      angerSum += anger;
      joySum += joy;
      negativeSum += negative;
      positiveSum += positive;
      totalCountSum += totalCount;
      trustSum += trust;
    });

    const sumToneObj = {
      anger: angerSum,
      joy: joySum,
      negative: negativeSum,
      positive: positiveSum,
      totalCount: totalCountSum,
      trust: trustSum,
    };

    return sumToneObj;
  },
};
