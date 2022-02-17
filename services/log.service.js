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
};

const printWeather = (res, icon) => {
  console.log(
    `${chalk.bgYellow(' Weather ')} Weather in the city ${res.name}
    ${icon} ${res.weather[0].description}
    Temperature: ${res.main.temp} (feels like ${res.main.feels_like})
    Humidity: ${res.main.humidity}%
    Wind speed: ${res.wind.speed}
    `
  );
}

export {printError, printSuccess, printHelp, printWeather};