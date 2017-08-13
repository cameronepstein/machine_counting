'use strict'

// Notification that count has not worked
const errors = {
  countError: 'Error: incorrect number in sequence'
}

var countBetweenNumbers = (minNumber, maxNumber) => {
  let firstNumberChoice = findRandomNumber(maxNumber);
  if (minNumber == maxNumber - 1 && firstNumberChoice === maxNumber) {
    console.log(firstNumberChoice);
    console.log(`counted to ${maxNumber}`);
  } else if (firstNumberChoice - minNumber == 1) {
    console.log(firstNumberChoice);
    countBetweenNumbers(firstNumberChoice, maxNumber);
    return;
  } else {
    console.log(firstNumberChoice);
    console.log(errors.countError);
    startFromBeginning();
    return;
  }
}

var findRandomNumber = (number) => {
  let randomNumber = Math.floor(Math.random() * number) + 1;
  return randomNumber;
}

var startFromBeginning = () => {
  countBetweenNumbers(0, 5);
}

startFromBeginning();
