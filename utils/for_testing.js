const palindrome = (string) => {

    if(typeof string == 'undefined') return
 
    return string
      .split('')
      .reverse()
      .join('')
 }
 
const average = array => {
     let sum = 0;
     array.forEach(num => { sum += num });
     return sum / array.length;
 }

const square = num => {
    if(num < 0) return NaN;
    return Math.sqrt(num);
};
 
module.exports = {
     palindrome,
     average,
     square
}