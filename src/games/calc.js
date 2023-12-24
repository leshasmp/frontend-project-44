import gameRunner from '../game.js';

const randomOperator = () => {
  const operators = ['+', '-', '*'];
  const random = Math.floor(Math.random() * operators.length);

  return operators[random];
};

const calculate = (number1, number2, operator) => {
  let result = 0;

  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      return 'Wrong operator';
  }

  return result.toString();
};

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const conditions = () => {
  const number1 = randomNumber();
  const number2 = randomNumber();
  const operator = randomOperator();

  return [`${number1} ${operator} ${number2}`, calculate(number1, number2, operator)];
};

const description = 'What is the result of the expression?';

export default () => {
  gameRunner(description, conditions);
};
