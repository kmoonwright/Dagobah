// Write a function `transpose(arr)` that returns a 2d array transposed.
// e.g. transpose([[1,2],[3,4],[5,6]]) => [[1,3,5],[2,4,6]]
function transpose(arr) {
  const transposedArr = [];

  for (var col = 0; col < arr[0].length; col++) {
    const transposedRow = [];
    for (var row = 0; row < arr.length; row++) {
      transposedRow.push(arr[row][col]);
    }
    transposedArr.push(transposedRow);
  }
  return transposedArr;
};



Array.prototype.transpose = function () {
  let transposed = [];
  for (let i = 0; i < this.length; i++) {
    transposed.push(this.map(x => x[i]));
  };
  return transposed;
}; 

Array.prototype.transpose = function () {
  array[0].map((col, i) => array.map(row => row[i]));
}; 