function abbrevName(name) {
  const nameArray = name.toUpperCase().split(" ");
  return `${nameArray[0][0]}.${nameArray[1][0]}`;
}

module.exports = abbrevName;
