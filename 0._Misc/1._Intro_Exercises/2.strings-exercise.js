// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

console.log(parseFloat(numberOne) + parseFloat(numberTwo));

// add those two numbers and show the result
// you cannot touch line 1 neither line 2
const result = parseFloat(numberOne) + parseFloat(numberTwo);
console.log(result);

// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

console.log((parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo)).toFixed(2));
const twoDecimals = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo);
console.log(twoDecimals.toFixed(2));


// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;
console.log(((one + two + three) / 3).toFixed(5));


// Show in the console the avg. with 5 decimals





// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
console.log(letters.charAt(2));
console.log(letters[2]);

console.log(letters.substr(2, 1));
// Get me the character "c"
// string is array of char




// --------------------------------------
// Exercise 7 - Replace



const fact = "You are learning javascript!";

const changedText = fact.replace("j", "J");
console.log(changedText);

// capitalize the J in Javascript


// --------------------------------------
