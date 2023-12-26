import gameRunner from '../game.js';

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return Math.abs(num1).toString();
  }

  return gcd(num2, num1 % num2);
};

const conditions = () => {
  const number1 = randomNumber();
  const number2 = randomNumber();

  const question = `${number1} ${number2}`;
  const answer = gcd(number1, number2);

  return [question, answer];
};

const description = 'Find the greatest common divisor of given numbers.';

export default () => {
  gameRunner(description, conditions);
};
