// Write a function, `anagrams(str1, str2)`, that takes in two words and returns
// a boolean indicating whether or not the words are anagrams. Anagrams are 
// words that contain the same characters but not necessarily in the same order. 
// Solve this without using Array.prototype.sort.
// 
// Examples:
// anagrams('listen', 'silent') => true
// anagrams('listen', 'potato') => false

function anagrams(str1, str2) {
    if (str1.length !== str2.length) return false;

    const str1Obj = buildLetterCount(str1);
    const str2Obj = buildLetterCount(str2);

    const keys = Object.keys(str1Obj);

    for (let i = 0; i < keys.length; i++) {
        const letter = keys[i];

        const count1 = str1Obj[letter];
        const count2 = str2Obj[letter];

        if (count1 !== count2) return false;
    }

    return true;
}

function buildLetterCount(string) {
  const count = {};

  for (let i = 0; i < string.length; i++) {
    const letter = string[i];

    if (count[letter]) {
        count[letter] += 1;
    } else {
        count[letter] = 1;
    }
  }
  return count;
}



function anagrams(str1, str2) {
  if (str1.length !== str2.length) return false;
  const arr1 = str1.split('');
  const arr2 = str2.split('');

  while (arr1.length > 0) {
    const nextChar = arr1.shift();
    const otherIdx = arr2.indexOf(nextChar);

    if (otherIdx === -1) return false;

    arr2.splice(otherIdx, 1);
  }
  return true;
}

anagrams('listen', 'silent');


// function anagrams(str1, str2) {
//   const letters = {};

//   str1.split("").forEach(char => {
//     if (!letters[char]) letters[char] = 0;
//     letters[char] += 1;
//   });

//   str2.split("").forEach(char => {
//     if (!letters[char]) letters[char] = 0;
//     letters[char] -= 1;
//   });

//   return Object.values(letters).every(letterCount => letterCount === 0);
// }


