// Write an `Array.prototype.myFlatten()` method which flattens a
// multi-dimensional array into a one-dimensional array.
// Example:
// [["a"], "b", ["c", "d", ["e"]]].myFlatten() => ["a", "b", "c", "d", "e"]


Array.prototype.myFlatten = function () {
  let flattened = [];

  this.forEach((el) => {
    if (el instanceof Array) {
      flattened = flattened.concat(el.myFlatten());
    } else {
      flattened.push(el);
    }
  });

  return flattened;
};



// ALT
Array.prototype.myFlatten = function () {
  let flattened = [];

  for (let i = 0; i < this.length; i++) {
    if (this[i] instanceof Array) {
      // flattened.concat(this[i]);
      flattened = flattened.concat(this[i].myFlatten());
    } else {
      flattened.push(this[i])
    }
  }
  return flattened;
}



// WITH THE LEVELS
Array.prototype.myFlatten = function (n) {
  if (n === 0) return this;
  let flattened = [];

  this.forEach((el) => {
    if (el instanceof Array) {
      const flattenedEl = el.myFlatten(n - 1);
      flattened = flattened.concat(flattenedEl);
    } else {
      flattened.push(el);
    }
  });

  return flattened;
};
