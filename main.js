var countToNumber = (maxNumber) => {
  console.log(findRandomNumber(maxNumber));
}

findRandomNumber = (number) => {
  return Math.floor(Math.random() * number) + 1
}

countToNumber(10);
