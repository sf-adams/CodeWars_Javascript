/*
Description:

Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

Make sure that your function does not return a false positive by just checking just the day.
*/

function isToday(date) {
  let today = new Date();
  today.setDate(today.getDate());
  if (date == today) {
    return true;
  } else {
    return false;
  }
}

let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

let yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

isToday(new Date());
isToday(tomorrow);
isToday(yesterday);