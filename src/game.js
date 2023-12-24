import readlineSync from 'readline-sync';
import askName from './cli.js';

const askQuestion = (msg) => {
  console.log(`Question: ${msg}`);
  return readlineSync.question('Your answer: ');
};

const showLossMessage = (name, answer, correctAnswer) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
};

const showWinningMessage = (name) => console.log(`Congratulations, ${name}!`);

const showCorrectMessage = () => console.log('Correct!');

const showWelcomeMessage = () => console.log('Welcome to the Brain Games!');

const showMessage = (msg) => console.log(msg);

const runGame = (name, conditions, correctAnswersCount, attemptsCount) => {
  if (correctAnswersCount === attemptsCount) {
    showWinningMessage(name);
    return;
  }

  const [question, answer] = conditions();
  const userAnswer = askQuestion(question);

  if (userAnswer !== answer) {
    showLossMessage(name, userAnswer, answer);
    return;
  }

  showCorrectMessage();

  runGame(name, conditions, correctAnswersCount + 1, attemptsCount);
};

export default (description, conditions, correctAnswersCount = 0, attemptsCount = 3) => {
  showWelcomeMessage();

  const name = askName();

  showMessage(description);

  runGame(name, conditions, correctAnswersCount, attemptsCount);
};
