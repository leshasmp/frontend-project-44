import readlineSync from 'readline-sync';
import askName from '../cli.js';

const askQuestion = (number) => {
  console.log(`Question: ${number}`);

  return readlineSync.question('Your answer: ');
};

const showLossMessage = (name, answer, correctAnswer) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
};

const showWiningMessage = (name) => console.log(`Congratulations, ${name}!`);

const showCorrectMessage = () => console.log('Correct!');

const showStartGameMessage = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const runGame = (name, correctAnswersCount = 0, attemptsCount = 3) => {
  if (correctAnswersCount === attemptsCount) {
    showWiningMessage(name);
    return;
  }

  const number = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  const answer = askQuestion(number);

  if (answer !== correctAnswer) {
    showLossMessage(name, answer, correctAnswer);
    return;
  }

  showCorrectMessage();

  runGame(name, correctAnswersCount + 1, attemptsCount);
};

const evenGame = () => {
  const name = askName();

  showStartGameMessage();

  runGame(name);
};

export default evenGame;
