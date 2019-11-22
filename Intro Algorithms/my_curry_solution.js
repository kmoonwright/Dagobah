// Write a `Function.prototype.myCurry(numArgs)` method that collects arguments
// until the number of arguments collected is equal to the original `numArgs` 
// value and then invokes the curried function.

Function.prototype.myCurry = function (numArgs) {
  const args = [];
  const that = this;

  return function _myCurry(el) {
    args.push(el);
    if (args.length === numArgs) {
      return that(...args);
    } else {
      return _myCurry;
    }
  }
};


Function.prototype.myCurry = function (numArgs) {
  const args = [];

  const _myCurry = (el) => {
    args.push(el);

    if (args.length === numArgs) {
      return that(...args);
    } else {
      return _myCurry;
    }
  }
  return _myCurry;
};



// STANDALONE
function myCurry(fn, object, numArgs) {
  let numbers = [];

  function _myCurry(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return fn.apply(object, numbers);
    } else {
      return _myCurry;
    }
  }
  return _myCurry;
}

