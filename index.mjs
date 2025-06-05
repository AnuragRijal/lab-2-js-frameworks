// Import functions from utils.mjs using ES6 module syntax
import {
    printWelcome,
    convertKmToMiles,
    factorial,
    generatePassword
} from './utils.mjs';

// Welcome message test
printWelcome("Anurag", "Rijal");

// Conversion example: 15 kilometers to miles
const km = 15;
const miles = convertKmToMiles(km);
console.log(`${km} kilometers is approximately ${miles.toFixed(2)} miles.`);

// Factorial example: calculate 6!
const number = 6;
const fact = factorial(number);
console.log(`The factorial of ${number} is: ${fact}`);

// Generate a random password with 10 characters
const password = generatePassword(10);
console.log(`Generated Password: ${password}`);
