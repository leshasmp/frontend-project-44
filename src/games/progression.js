import gameRunner from '../game.js';

const createNumbers = (maxNumber = 50, countNumbers = 10, maxStep = 5) => {
  const startNumber = Math.floor(Math.random() * maxNumber) + 1;
  const step = Math.floor(Math.random() * maxStep) + 1;
  const dataNumbers = [];

  let nextNumber = startNumber;

  for (let i = 0; i < countNumbers; i += 1) {
    nextNumber += step;
    dataNumbers.push(nextNumber);
  }

  return dataNumbers;
};

const formatNumbers = (numbers, replaceIndex, character = '..') => {
  const clonedNumbers = [...numbers];

  clonedNumbers[replaceIndex] = character;

  return clonedNumbers;
};

const conditions = () => {
  const numbers = createNumbers();

  const replaceIndex = Math.floor(Math.random() * (numbers.length - 1));

  const question = formatNumbers(numbers, replaceIndex).join(' ');
  const answer = numbers[replaceIndex].toString();

  return [question, answer];
};

const description = 'What number is missing in the progression?';

export default () => {
  gameRunner(description, conditions);
};
