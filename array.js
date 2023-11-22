// Array Creation, Push, Pop etc
const fruits = ["Apple", "Banana", "Grape"];

console.log("An Array: " + fruits);

fruits[2] = "Tangerine";

console.log("Change Element on An Index: " + fruits);

fruits.push("Mango");

console.log("Add Element At End: " + fruits);

fruits.unshift("Strawberry");

console.log("Add Element At Beginning: " + fruits);

removedElement = fruits.pop();

console.log("Remove Last Element: " + fruits + `. Removed ${removedElement}`);

console.log("Finding Index of An Element: " + fruits.indexOf("Banana"));
