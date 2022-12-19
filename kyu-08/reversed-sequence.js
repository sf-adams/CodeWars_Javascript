// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// My attempt
function reverseArray(n) {
  let numbers = [];
  for (let i = n; i > 0; i--) {
    numbers.push(i);
  }
  return numbers;
}

console.log(reverseArray(4));
console.log(reverseArray(0));
console.log(reverseArray(10));

// This was almost identical to the solution,
