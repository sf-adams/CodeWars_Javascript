/*
Description:

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
*/

function makeNegative(number) {
  return (number <= 0 ? number:(-number));
}

console.log(makeNegative(5));
console.log(makeNegative(-5));
console.log(makeNegative(0));
console.log(makeNegative(0.12));

/*
"Best Solution":

Makes use of the Math.abs() function, which returns the absolute value of a number. By putting the '-' sign in front of the function, it returns the negative of each number if it's not already a negative number.
(ISSUE: it returns -0 if 0 is given, whereas the solution above does not.)

function makeNegative(num) {
  return -Math.abs(num);
}
*/