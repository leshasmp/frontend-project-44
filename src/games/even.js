import gameRunner from '../game.js';

const conditions = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  const answer = number % 2 === 0 ? 'yes' : 'no';

  return [number, answer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  gameRunner(description, conditions);
};
