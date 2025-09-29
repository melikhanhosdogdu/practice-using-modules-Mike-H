const yargs = require("yargs");
const chalk = require("chalk");

const argv = yargs(process.argv.slice(2))
  .option("city", {
    describe: "City name to get weather for",
    type: "string",
    demandOption: true,
  })
  .help().argv;

const weatherData = {
  "New York": { temp: "22°C", condition: "Sunny", humidity: "65%" },
  London: { temp: "15°C", condition: "Cloudy", humidity: "80%" },
  Tokyo: { temp: "18°C", condition: "Rainy", humidity: "90%" },
  Paris: { temp: "20°C", condition: "Partly Cloudy", humidity: "70%" },
  Sydney: { temp: "25°C", condition: "Clear", humidity: "55%" },
};

const city = argv.city;
const weather = weatherData[city] || {
  temp: "20°C",
  condition: "Unknown",
  humidity: "60%",
};

console.log(chalk.blue.bold(`Weather for ${city}:`));
console.log(chalk.green(`Temperature: ${weather.temp}`));
console.log(chalk.yellow(`Condition: ${weather.condition}`));
console.log(chalk.cyan(`Humidity: ${weather.humidity}`));
