var countToTen = () => {
  console.log(findRandomNumber());
}

findRandomNumber = () => {
  return Math.floor(Math.random() * 10) + 1
}

countToTen();
