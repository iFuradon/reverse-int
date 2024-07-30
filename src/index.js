module.exports = function reverse (n) {
  let nStr = n.toString();
  let reversedStr = nStr.split('').reverse().join('');
  let resN = parseInt(reversedStr);
  return resN 
}
