import readlineSync from 'readline-sync';
import askName from '../cli.js';

const askQuestion = (number) => {
  console.log(`Question: ${number}`);
};

const gameOver = (name) => {
  console.log(`Let's try again, ${name}!`);
};

const gameWin = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const runGame = (name, correctAnswersCount = 0, attemptsCount = 3) => {
  if (correctAnswersCount === attemptsCount) {
    gameWin(name);
    return;
  }

  const number = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  askQuestion(number);

  const answer = readlineSync.question('Your answer: ');

  if (answer !== correctAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    gameOver(name);
    return;
  }

  console.log('Correct!');

  runGame(name, correctAnswersCount + 1, attemptsCount);
};

const evenGame = () => {
  const name = askName();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  runGame(name);
};

export default evenGame;
