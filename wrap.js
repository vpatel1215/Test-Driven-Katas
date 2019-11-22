// function wrap(string,colNum) {
//     let newString = '';

// }
const wrap = (line, maxLen) => {
  if (line.length <= maxLen) {
    return line;
  } else {
    let remaining = maxLen;
    let newStr = "";
    let newStrArr = line.split(" ");

    newStrArr.forEach(word => {
      if (word.length <= remaining) {
        newStr += word + " ";
        remaining = remaining - word.length - 1;
      } else {
        newStr += "\n" + word + " ";
        remaining = maxLen - word.length - 1;
      }
    });
    return newStr;
  }
};

module.exports = wrap;
