#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.yellow("Welcome to the Number Guessing Game!"));

let randomNumber = Math.floor(Math.random() * 10 + 1);

const answers = await inquirer.prompt([
  {
    type: "number",
    name: "userGuess",
    message: "Guess a number between 1 to 10: ",
  },
]);
// conditional statements.
if (answers.userGuess === randomNumber) {
  console.log(chalk.green(" Congratulations:... You guessed right!"));
} else {
  console.log(chalk.red("You guessed wrong!"));
  console.log(chalk.yellow(`The random number was ${randomNumber}`));
  console.log(chalk.blue("Better luck next time!"));
}
// play again.
const playAgain = await inquirer.prompt([
  {
    type: "confirm",
    name: "restart",
    message: "Do you want to play again?",
    default: false,
  },
]);
if (playAgain.restart) {
  console.log(chalk.green("New game started!"));
} else {
  console.log(chalk.blue("Thanks for playing!"));
  console.log(chalk.red("See you next time!"));
}
