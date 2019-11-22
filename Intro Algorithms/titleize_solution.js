// Write a function `titleize(str)` that capitalizes each word in a string like
// a book title. 
// Do not capitalize the following words (unless they are the first word in the 
// string): ["a", "and", "of", "over", "the"]


function titleize(str) {
  const littleWords = ["a", "and", "of", "over", "the"];

  const title = [];
  const words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i]
    if (i !== 0 && littleWords.includes(words[i])) {
      title.push(currentWord.toLowerCase());
    } else {
      let firstLetter = currentWord.slice(0, 1).toUpperCase();
      let rest = currentWord.slice(1).toLowerCase();
      title.push(firstLetter + rest)
    }
  }
  return title.join(' ');
}


function titleize2(title) {
  const littleWords = ['a', 'and', 'of', 'over', 'the'];

  const words = title.split(' ');
  const titleizedWords = words.map( (word, idx) => {
    if (idx !== 0 && littleWords.indexOf(word) >= 0) {
      return word.toLowerCase();
    } else {
      return word.slice(0, 1).toUpperCase() + word.slice(1);
    }
  });

  return titleizedWords.join(' ');
}
