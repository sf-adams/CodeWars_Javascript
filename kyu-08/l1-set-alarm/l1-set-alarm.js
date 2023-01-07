// Original Solution

// function setAlarm(employed, vacation) {
//   if (employed == true && vacation == true) {
//     return false;
//   } else if (employed == false && vacation == true) {
//     return false;
//   } else if (employed == false && vacation == false) {
//     return false;
//   } else if (employed == true && vacation == false) {
//     return true;
//   }
// }

// module.exports = setAlarm;

// My solution with refactor
// Using multiple ternary operators (conditional chains)
function setAlarm(employed, vacation) {
  return employed == false ? false : vacation == false ? true : false;
}

module.exports = setAlarm;
