/*
Description:

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

function stringRemove(string) {
  // Using the slice method to select a range of which to return a new string
  return string.slice(1, -1);
}

console.log(stringRemove("racing"));

