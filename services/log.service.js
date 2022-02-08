import chalk from 'chalk'
const printError = (error) => {
  console.log(chalk.bgRed(' ERROR ') + ' ' + error)
};

const printSuccess = (message) => {
  console.log(chalk.bgGreen(' Success ') + ' ' + message)
};

const printHelp = () => {
  console.log(
    `${chalk.bgCyan(' HELP ')}
    -s [CITY] set city
    -h [HELP] help output
    -t [API_KEY] save token
    `
  );
}

export {printError, printSuccess, printHelp};