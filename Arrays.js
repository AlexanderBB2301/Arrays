/*Add two numbers*/
function add(x, y) {
  let result = x + y;
  console.log(result);
}

add(3, 5);

/*Defensive check*/

function addition(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return;
  }
  return a + b;
}
console.log(addition(6, 8));

/*Reverse Array*/
var myArray = ["one", "two", "three", "four", "five"];
console.log(myArray.reverse());

/*Array with 10 items*/
var fruit = [
  "strawberries",
  "banana",
  "apple",
  "peach",
  "orange",
  "cherries",
  "melon",
  "grapes",
  "pear",
  "raisins",
];
console.log(fruit.splice(4, 1, "clemantine"));
console.log(fruit);

/*Delete half*/
fruit.length = 5;
console.log(fruit);

var fruit2 = [
  "strawberries",
  "banana",
  "apple",
  "peach",
  "orange",
  "cherries",
  "melon",
  "grapes",
  "pear",
  "raisins",
];
/*.pop()*/
console.log(fruit2.pop());
console.log(fruit2);

/*push*/
fruit2.push("Lemon");
console.log(fruit2);

/*shift*/
console.log(fruit2.shift());

/*unshift*/
fruit2.unshift("kiwi");
console.log(fruit2);

/*concatenating*/
var drinks = ["water", "milk", "pepsi", "orange juice"];
var options = fruit2.concat(drinks);
console.log(options);

/*splicing*/
drinks.splice(3, 1, "coffee");
console.log(drinks);

/*Slicing*/
var copyArray = drinks.slice(0, 3);
console.log(copyArray);

/*reverse*/
console.log(drinks.reverse());

/*join*/
console.log(drinks.join(" "));

/*for each*/
var scores = [6, 2, 3, 3, 8];
var isOdd = scores.every(function (score) {
  return score % 2 !== 0;
});
console.log(isOdd);

/*indexOf*/
var indexOfCoffee = drinks.indexOf("coffee");
console.log(indexOfCoffee);

/*includes*/
var result = drinks.includes("coffee");
var results1 = drinks.includes("tea");
console.log(result);
console.log(results1);

/*every*/
var scores = [6, 2, 3, 3, 8];
evenScores = scores.every(checkScore);
function checkScore(score) {
  return score % 2 === 0;
}
console.log(evenScores);

/*some*/
var scores = [6, 2, 3, 3, 8];
highScore = scores.some(checkHigh);
function checkHigh(score) {
  return score > 3;
}
console.log(highScore);

/*filter*/
var scores = [6, 2, 3, 3, 8, 7, 9, 1, 0];
filteredScores = scores.filter(function (score) {
  return score > 3;
});
console.log(filteredScores);

/*find*/
var scores = [6, 2, 3, 3, 8, 7, 9, 1, 0];
lowScores = scores.find(function (score) {
  return score < 6;
});
console.log(lowScores);

/*find index*/
var scores = [6, 2, 3, 3, 8, 7, 9, 1, 0];
indexFound = scores.findIndex(function (score) {
  return score === 9;
});
console.log(indexFound);

/*sort*/
var fruit = [
  "strawberries",
  "banana",
  "apple",
  "peach",
  "orange",
  "cherries",
  "melon",
  "grapes",
  "pear",
  "raisins",
];
fruit.sort();
console.log(fruit);

/*map*/
var scores = [6, 2, 3, 3, 8, 7, 9, 1, 0];
var estimatedScores = scores.map(function (score) {
  return score * 11;
});
console.log(estimatedScores);
