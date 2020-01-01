// Time Complexity Analysis

// Trie# insert and Trie# search require O(m) time where m is the length of the target word.
// Space Complexity Analysis

// The space of a trie will vary greatly depending on how often prefixes are shared among entries.
// Say we have n words and the maximum length of any word is m. The worst -
//   case trie will have no overlapping prefixes and so it will have O(n * m) characters to store.

class Node {
  constructor() {
    this.children = {};
    this.isTerminal = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word, root = this.root) {
    let letter = word[0];
    if (!(letter in root.children)) {
      root.children[letter] = new Node();
    }

    if (word.length === 1) {
      root.children[letter].isTerminal = true;
    } else {
      this.insert(word.slice(1), root.children[letter]);
    }
  }

  search(word, root = this.root) {
    if (word.length === 0) {
      if (root.isTerminal) {
        return true;
      } else {
        return false;
      }
    }

    let letter = word[0];
    if (letter in root.children) {
      return this.search(word.slice(1), root.children[letter]);
    } else {
      return false;
    }
  }
}