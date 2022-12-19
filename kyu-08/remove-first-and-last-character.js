/*
Description:

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

function stringRemove(string) {
  // Using the slice method to select a range of which to return a new string
  return string.slice(1, -1);
}

console.log(stringRemove("racing"));

/*
"Alternative Solution":

function removeChar(str){
  return str.substring(1, str.length-1);
};

-------------------------------------------

and another one, but this time using 'substr'

function removeChar(str){
  return str.substr(1, str.length-2);
};

"According to Mozilla MDN, the arguments of substring() represent the starting and ending indexes, while the arguments of substr() represent the starting index and the number of characters to include in the returned string."
*/





