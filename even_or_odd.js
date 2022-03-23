/*
Description:

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

function evenOrOdd(number) {
  // Use the remainder operator to see if the number/2 is equal to zero
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Ternary alternative:
function evenOrOddTernary(number) {
  return (number % 2 == 0 ? "Even":"Odd");
}

console.log(evenOrOdd(10));
console.log(evenOrOdd(97));
console.log(evenOrOdd(16));


console.log(evenOrOddTernary(17));

/*
"Best Solution":

Uses truthy and falsy values so that if a value comes back, the number must be odd. If it doesn't return anything the remainder operator returned zero and so the number must be even.

function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}

*/