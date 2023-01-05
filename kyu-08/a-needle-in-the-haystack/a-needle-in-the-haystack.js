// My attempt
function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      return `found the needle at position ${i}`;
    }
  }
}

module.exports = findNeedle;

// Improved solution
// Uses the `indexOf` method, which returns the first index at which a given element can be found in the array
// In this example, there is only one instance

function findNeedleSolution(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}
