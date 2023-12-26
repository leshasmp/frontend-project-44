import gameRunner from '../game.js';

const isPrimeNumber = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const conditions = () => {
  const number = Math.floor(Math.random() * 100) + 1;

  const question = number;
  const answer = isPrimeNumber(number) ? 'yes' : 'no';

  return [question, answer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  gameRunner(description, conditions);
};
