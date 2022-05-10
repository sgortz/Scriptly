module.exports ={
  parseTextToArray: function(text) {
    if (!text) {
      return new Error('Envalid Input')
    }
    if (text.length == 0) {
      return new Error('Empty Input')
    }
    const words= [];
    const strLength = text.length;
    let word = '';
    let isALetter = function(char) {
      const ASCII = char.toLowerCase().charCodeAt(0);
      if (ASCII >= 97 && ASCII <= 122) {
        return true;
      }
      return false;
    }

    for(let idx = 0; idx < strLength; idx++ ) {
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
 

}