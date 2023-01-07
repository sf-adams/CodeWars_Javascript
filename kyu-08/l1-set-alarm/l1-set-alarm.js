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

/*

Genius Solution
- True is greater than false, because js compiles it to 1 or 0

function setAlarm(employed, vacation){
  return employed > vacation
}

---

Best Practice Solution
- Simple use of Logical Not/Negation Operator...

function setAlarm(employed, vacation){
  return employed && !vacation;
}

---

Best Practice as an Arrow Function:
const setAlarm = (employed, vacation) => employed && !vacation;


*/
