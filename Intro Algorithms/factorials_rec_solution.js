// Write a recursive function, `factorialsRec(num)`, that returns the first
// `num` factorial numbers. Note that the 1st factorial number is 0!, which 
// equals 1. The 2nd factorial is 1!, the 3rd factorial is 2!, etc.

function factorialsRec(num) {
  if (num === 1) return [1];

  const facts = factorialsRec(num - 1);
  facts.push(facts[facts.length - 1] * (num - 1));
  return facts;
}

// VER. 2, needs to be refactored
// function factorialsRec(num) {
//   if (num <= 1) return [1, 1].slice(1 - num);
//   const prevFacts = factorialsRec(num - 1);
//   const secondToLast = prevFacts[prevFacts.length - 1];
//   const last = secondToLast * num;
//   return prevFacts.concat([last]);
// }
