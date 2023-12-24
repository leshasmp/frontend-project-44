import gameRunner from '../game.js';

const randomNumber = () => Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100);

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return Math.abs(num1).toString();
  }

  return gcd(num2, num1 % num2);
};

const conditions = () => {
  const number1 = randomNumber();
  const number2 = randomNumber();

  return [`${number1} ${number2}`, gcd(number1, number2)];
};

const description = 'Find the greatest common divisor of given numbers.';

export default () => {
  gameRunner(description, conditions);
};
