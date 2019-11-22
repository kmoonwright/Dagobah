// Write a `String.prototype.symmetricSubstrings` method that returns an array
// of substrings which are palindromes in alphabetical order. Only include 
// substrings of length > 1.
// e.g. "cool".symmetricSubstrings() => ["oo"]

String.prototype.symmetricSubstrings = function () {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 2; j <= this.length; j++) {
      const substring = this.slice(i, j);
      const reversed = substring.split('').reverse().join('');
      if (substring === reversed) {
        result.push(substring);
      }
    }
  }
  return result.sort();
}
