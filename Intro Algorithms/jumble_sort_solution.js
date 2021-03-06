// Write a function `jumbleSort(string, alphabet)`.
// Jumble sort takes a string and an alphabet. It returns a copy of the string
// with the letters re-ordered according to their positions in the alphabet. If
// no alphabet is passed in, it defaults to normal alphabetical order (a-z).
// Do NOT use the built-in `Array.prototype.sort`.

// Example:
// jumbleSort("hello") => "ehllo"
// jumbleSort("hello", ['o', 'l', 'h', 'e']) => 'ollhe'


function jumbleSort(str, alpha = "abcdefghijklmnopqrstuvwxyz".split('')) {
  let string = str.split('');
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 1; i < string.length; i++) {
      let current = string[i - 1];
      let next = string[i];
      if (alpha.indexOf(current) > alpha.indexOf(next)) {
        [string[i - 1], string[i]] = [string[i], string[i - 1]];
        sorted = false;
      }
    }
  }
  return string.join('');
}


// ver 2
function jumbleSort(str, alphabet = null) {
  alphabet = alphabet || 'abcdefghijklmnopqrstuvwxyz'.split('');
  str = str.split('');

  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < str.length; i++) {
      if (i === str.length - 1) break;
      let current = str[i];
      let next = str[i + 1];
      if (alphabet.indexOf(current) > alphabet.indexOf(next)) {
        str[i] = next;
        str[i + 1] = current;
        sorted = false;
      }
    }
  }

  return str.join('');
}
