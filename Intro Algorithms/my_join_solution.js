// Write an `Array.prototype.myJoin(separator)` method, which joins the elements 
// of an array into a string. If an argument is provided to `myJoin`, use that
// between each element. Otherwise, use an empty string.
// Do NOT call the built-in `Array.prototype.join` method.
// ex.
// [1, 2, 3].myJoin() => '123'
// [1, 2, 3].myJoin('$') => '1$2$3'


Array.prototype.myJoin = function (separator) {
  let result = "";

  for (let i = 0; i < this.length; i++) {
    if (typeof separator === 'undefined') {
      result += this[i];
    } else if (i === this.length - 1) {
      result += this[i];
    } else {
      result += (this[i] + separator);
    }
  }
  return result;
}





Array.prototype.myJoin = function (separator = '') {
  let newString = '';

  this.forEach( (el, idx) => {
    newString += `${el}`;
    if (idx < this.length - 1) newString += separator;
  });

  return newString;
};
